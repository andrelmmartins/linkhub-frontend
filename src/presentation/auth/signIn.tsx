import { Link, Stack } from "@chakra-ui/react";
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
import { useAuthContext } from "../../contexts/AuthContext";

export default function Page() {

    const { signIn } = useAuthContext()

    const { register, handleSubmit, formState: { errors } } = useForm<SignInData>()
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

                        <Button type='submit' size='lg' arrow>Entrar</Button>
                    
                        <Link size='sm' href='../forget'>Esqueci minha senha</Link>
                    </Stack>

                    <Stack spacing='20px' w='100%'>
                        <Link size='md' href='../create'>Criar minha conta</Link>
                        <Link size='md' href='../../create'>&lt;Voltar</Link>
                    </Stack>
                </Stack>
            </Right>
        </Window>
    )
}