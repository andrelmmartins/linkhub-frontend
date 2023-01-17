import Link from "next/link";
import { Link as ChakraLink, Stack } from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { SubmitHandler } from "react-hook-form/dist/types";

import Window from "../../components/Window";
import Left from "./components/Left";
import Logo from "./components/Logo";
import Right from "./components/Right";
import Input from "../../components/Input";
import Button from "../../components/Button";
import InputChecker from "../../components/InputChecker";

import { useAuthContext } from "../../hooks/useAuthContext";
import { CreateFormData } from "../../types/auth";
import { validate } from "../../utils/validate";

export default function Page() {

    const { create, emailAlredyExists, usernameAlredyExists } = useAuthContext()

    const { register, handleSubmit, formState: { errors, isSubmitting }, watch, setValue, setError, clearErrors } = useForm<CreateFormData>()
    const onSubmit : SubmitHandler<CreateFormData> = async ({ name, email, username, password }) => {
        await create({ name, email, username, password })
    }

    const email = watch('email')
    const password = watch('password')

    return (
        <Window flexDir={['column', 'column', 'row']}>

            <Left display={[ 'none', 'none', 'flex' ]}>Crie<br/>sua conta</Left>
            <Left display={[ 'flex', 'flex', 'none' ]}>Criar conta</Left>

            <Right>
                <Stack spacing='30px' flexDir='column' align={['center', 'center', 'flex-start']} w='100%' maxW={['100%', '100%', '350px']}>

                    <Logo />
                    
                    <Stack as='form' spacing='20px' w='100%' onSubmit={handleSubmit(onSubmit)}>
                        
                        <Stack spacing='5px' w='100%'>
                            <Input
                                label='Nome'
                                type='text'
                                errors={errors}
                                register={register('name', {
                                    required: 'Informe um nome!',
                                    validate: (value: string) => validate.name(value) || 'Tente um nome válido!'
                                })}
                            />
                            
                            <InputChecker
                                label='Email'
                                errors={errors}
                                setError={setError}
                                clearErrors={clearErrors}
                                watch={watch}
                                checkerFunction={emailAlredyExists}
                                validate={validate.email}
                                errorMessage='Email já está em uso'
                                register={register('email', {
                                    required: 'Informe um email!',
                                    validate: (value: string) => validate.email(value) || 'Este email é inválido!',
                                })}
                            />

                            <InputChecker
                                label='Nome de Usuário'
                                errors={errors}
                                setError={setError}
                                clearErrors={clearErrors}
                                watch={watch}
                                checkerFunction={usernameAlredyExists}
                                validate={validate.username}
                                errorMessage='Nome de usuário já está em uso'
                                register={register('username', {
                                    required: 'Informe um nome de usuário!',
                                    validate: (value: string) => validate.username(value) || 'Esse é um nome inválido!',
                                })}
                                onFocus={(e: any) => {
                                    if(!e?.target?.value && email) {
                                        setValue('username', email.split('@')[0])
                                    }
                                }}
                            />
                            
                            <Input
                                label='Senha'
                                type='password'
                                errors={errors}
                                register={register('password', {
                                    required: 'Defina uma senha!',
                                    validate: (value: string) => validate.password(value) || 'Use uma senha com ao menos 8 dígitos!'
                                })}
                            />

                            <Input
                                label='Confirmação de senha'
                                type='password'
                                errors={errors}
                                register={register('passwordConfirmation', {
                                    validate: (value: string) => value === password || 'As senhas não coincidem!'
                                })}
                            />
                        </Stack>

                        <Button type='submit' size='lg' isLoading={isSubmitting} arrow>Criar</Button>
                    </Stack>

                    <Stack spacing='10px' w='100%'>
                        <Link href='/auth/signIn' passHref legacyBehavior><ChakraLink size='md'>Já tenho uma conta</ChakraLink></Link>
                        <Link href='/' passHref legacyBehavior><ChakraLink size='md'>&lt;Voltar</ChakraLink></Link>
                    </Stack>
                </Stack>
            </Right>
        </Window>
    )
}