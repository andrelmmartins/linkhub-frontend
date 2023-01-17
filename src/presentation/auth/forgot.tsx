import Link from "next/link";
import { Link as ChakraLink, Stack, Text } from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { SubmitHandler } from "react-hook-form/dist/types";

import Window from "../../components/Window";
import Left from "./components/Left";
import Logo from "./components/Logo";
import Right from "./components/Right";
import Input from "../../components/Input";
import Button from "../../components/Button";

import { useAuthContext } from "../../hooks/useAuthContext";
import { ForgotData } from "../../types/auth";
import { validate } from "../../utils/validate";

export default function Page() {

    const { forgot } = useAuthContext()

    const { register, handleSubmit, formState: { errors, isSubmitting }} = useForm<ForgotData>()
    const onSubmit : SubmitHandler<ForgotData> = async ({ email }) => {
        await forgot({ email })
    }

    return (
        <Window flexDir={['column', 'column', 'row']}>

            <Left display={[ 'none', 'none', 'flex' ]}>Esqueci<br/>minha senha</Left>
            <Left display={[ 'flex', 'flex', 'none' ]}>Recuperar senha</Left>

            <Right>
                <Stack spacing='30px' flexDir='column' align={['center', 'center', 'flex-start']} w='100%' maxW={['100%', '100%', '350px']}>

                    <Logo />
                    
                    <Text fontSize='14px'>Insira o seu e-mail e vamos te enviar um link para redefinir sua senha.</Text>

                    <Stack as='form' spacing='10px' w='100%' onSubmit={handleSubmit(onSubmit)}>
                        <Input
                            label='Email'
                            type='text'
                            errors={errors}
                            register={register('email', {
                                required: 'Informe seu email!',
                                validate: (value: string) => validate.email(value) || 'E-mail inválido!'
                            })}
                        />

                        <Button type='submit' size='lg' isLoading={isSubmitting} arrow>Recuperar</Button>
                    </Stack>

                    <Stack spacing='10px' w='100%'>
                        <Link href='/auth/create' passHref legacyBehavior><ChakraLink size='md'>Ainda não tenho uma conta</ChakraLink></Link>
                        <Link href='/auth/signIn' passHref legacyBehavior><ChakraLink size='md'>&lt;Voltar</ChakraLink></Link>
                    </Stack>
                </Stack>
            </Right>
        </Window>
    )
}