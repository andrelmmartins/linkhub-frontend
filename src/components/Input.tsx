import { useState } from "react";
import { FieldErrorsImpl, UseFormRegisterReturn } from "react-hook-form/dist/types";
import { FormControl, FormLabel, InputProps, Input as ChakraInput, InputGroup, InputRightElement, Image, FormErrorMessage, FormHelperText } from "@chakra-ui/react";

import Button from "./Button";

interface Props extends InputProps {
    type: 'text' | 'password'
    label: string,
    register: UseFormRegisterReturn
    errors?: FieldErrorsImpl
}

export default function Input({ label, type, register, errors, ...rest } : Props) {
    
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

    const showTogglePassword = type === 'password'
    const [ hide, setHide ] = useState(type === 'text')

    return (
        <FormControl isInvalid={!!error}>

            <FormLabel display='none'>{label}</FormLabel>
            <InputGroup>
                <ChakraInput
                    type={ showTogglePassword && !hide ? 'password' : 'text' }
                    placeholder={label}
                    {...inErrorStyle }
                    {...register}
                    {...rest}
                />

                { showTogglePassword && (
                    <InputRightElement>
                        <Button variant='ghost' h='30px' w='30px' onClick={() => setHide(!hide)}>
                            <Image src={hide ? '/closed-eye.svg' : '/open-eye.svg'} />
                        </Button>
                    </InputRightElement>
                )}
            
            </InputGroup>

            { !!error && (
                <FormErrorMessage fontSize='12px' fontWeight='bold'>{error.message as string}</FormErrorMessage>
            )}
        </FormControl>
    )
}