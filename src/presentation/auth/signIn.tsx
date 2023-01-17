import Link from 'next/link'
import { Link as ChakraLink, Stack } from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { SubmitHandler } from "react-hook-form/dist/types";

import Window from "../../components/Window";
import Left from "./components/Left";
import Logo from "./components/Logo";
import Right from "./components/Right";
import Input from "../../components/Input";
import Button from "../../components/Button";

import { SignInData } from "../../types/auth";
import { validate } from "../../utils/validate";
import { useAuthContext } from "../../hooks/useAuthContext";

export default function Page() {

    const { signIn } = useAuthContext()

    const { register, handleSubmit, formState: { errors, isSubmitting }} = useForm<SignInData>()
    const onSubmit : SubmitHandler<SignInData> = async ({ email, password }) => {
        await signIn({ email, password })
    }

    return (
        <Window flexDir={['column', 'column', 'row']}>

            <Left display={[ 'none', 'none', 'flex' ]}>Acessar<br/>sua conta</Left>
            <Left display={[ 'flex', 'flex', 'none' ]}>Entrar</Left>

            <Right>
                <Stack spacing='40px' flexDir='column' align={['center', 'center', 'flex-start']} w='100%' maxW={['100%', '100%', '350px']}>

                    <Logo />
                    
                    <Stack as='form' spacing='20px' w='100%' onSubmit={handleSubmit(onSubmit)}>
                        <Stack spacing='5px' w='100%'>
                            <Input
                                label='Email'
                                type='text'
                                errors={errors}
                                register={register('email', {
                                    required: 'Informe seu email!',
                                    validate: (value: string) => validate.email(value) || 'E-mail inválido!'
                                })}
                            />
                            
                            <Input
                                label='Senha'
                                type='password'
                                errors={errors}
                                register={register('password', {
                                    required: 'Informe sua senha!'
                                })}
                            />
                        </Stack>
                        
                        <Button type='submit' size='lg' isLoading={isSubmitting} arrow>Entrar</Button>
                    
                        <Link href='/auth/forgot' passHref legacyBehavior><ChakraLink size='sm'>Esqueci minha senha</ChakraLink></Link>
                    </Stack>

                    <Stack spacing='10px' w='100%'>
                        <Link href='/auth/create' passHref legacyBehavior><ChakraLink size='md'>Criar minha conta</ChakraLink></Link>
                        <Link href='/' passHref legacyBehavior><ChakraLink size='md'>&lt;Voltar</ChakraLink></Link>
                    </Stack>
                </Stack>
            </Right>
        </Window>
    )
}