import { useEffect, useState } from "react";
import { FieldErrorsImpl, UseFormClearErrors, UseFormRegisterReturn, UseFormSetError, UseFormWatch } from "react-hook-form/dist/types";
import { FormControl, FormLabel, InputProps, Input as ChakraInput, InputGroup, InputRightElement, Image, FormErrorMessage, Flex, Spinner } from "@chakra-ui/react";

import { useDebounce } from "../hooks/useDebounce";

interface Props extends InputProps {
    label: string,
    register: UseFormRegisterReturn
    errors?: FieldErrorsImpl,
    setError: UseFormSetError<any>,
    clearErrors: UseFormClearErrors<any>,
    watch: UseFormWatch<any>
    errorMessage: string,
    validate: (value: string) => boolean
    checkerFunction: (value: string) => Promise<boolean>
}

export default function InputChecker({ label, register, errors, setError, watch, errorMessage, validate, checkerFunction, clearErrors, ...rest } : Props) {
    
    const error = errors?.[register.name]

    const inErrorStyle = !!error ? {
        _focus: {
            borderColor: 'red.500',
            boxShadow: '0 1px #E53E3E'
        },
        _hover: {
            borderColor: 'red.500',
        }
    } : {}

    const value = watch(register.name)
    const debouncedValue = useDebounce(value)
    const [ result, setResult ] = useState< boolean | null >(null) 

    useEffect(() => {
        setResult(null)
        if(debouncedValue && validate(debouncedValue)) {
            checkerFunction(debouncedValue).then((exists) => {
                setResult(!exists)
                if(exists) {
                    setError(register.name, {
                        message: errorMessage
                    })
                } else {
                    clearErrors(register.name)
                }
            })
        } else setResult(false)
    }, [ debouncedValue ])


    return (
        <FormControl isInvalid={!!error}>

            <FormLabel display='none'>{label}</FormLabel>
            <InputGroup>
                <ChakraInput
                    type='text'
                    placeholder={label}
                    {...inErrorStyle }
                    {...register}
                    {...rest}
                />

                { debouncedValue && (
                    <InputRightElement>
                        <Flex>
                            { result === true ?
                                <Image src='/check.svg' h='12px' w='12px'/>
                            : result === false ?
                                <Image src='/close.svg' h='10px' w='10px'/>
                            :
                                <Spinner color='gray1' h='12px' w='12px'/>
                            }
                        </Flex>
                    </InputRightElement>
                )}
            
            </InputGroup>

            { !!error && (
                <FormErrorMessage fontSize='12px' fontWeight='bold'>{error.message as string}</FormErrorMessage>
            )}
        </FormControl>
    )
}