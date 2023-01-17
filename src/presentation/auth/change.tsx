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
import { ChangePasswordFormData } from "../../types/auth";
import { validate } from "../../utils/validate";

interface Props {
    id: string
    token: string
}

export default function Page({ id, token }: Props) {

    const { change } = useAuthContext()

    const { register, handleSubmit, formState: { errors, isSubmitting }, watch} = useForm<ChangePasswordFormData>()
    const onSubmit : SubmitHandler<ChangePasswordFormData> = async ({ password }) => {
        await change({ id, token, password })
    }

    const password = watch('password')

    return (
        <Window flexDir={['column', 'column', 'row']}>

            <Left>Alterar senha</Left>
            
            <Right>
                <Stack spacing='30px' flexDir='column' align={['center', 'center', 'flex-start']} w='100%' maxW={['100%', '100%', '350px']}>

                    <Logo />
                    
                    <Text fontSize='14px'>Vamos definir sua nova senha!</Text>

                    <Stack as='form' spacing='20px' w='100%' onSubmit={handleSubmit(onSubmit)}>
                        
                        <Stack spacing='5px' w='100%'>
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

                        <Button type='submit' size='lg' isLoading={isSubmitting} arrow>Recuperar</Button>
                    </Stack>

                    <Link href='/auth/signIn' passHref legacyBehavior><ChakraLink size='md'>&lt;Voltar</ChakraLink></Link>
                </Stack>
            </Right>
        </Window>
    )
}