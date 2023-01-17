import { useRouter } from 'next/router'
import { GetServerSideProps, NextPage } from 'next'
import Head from 'next/head'

import Page from '../../presentation/auth/change'
import { auth } from '../../services/api/auth'
import { useEffect } from 'react'
import { protections } from '../../utils/protections'

interface Props {
    id?: string
    token?: string
}

const ChangePassword: NextPage = ({ id, token }: Props) => {

    const router = useRouter()

    useEffect(() => {
        if(!id || !token) {
            router.push('/auth/signIn')
        }
    }, [])

    return (
        <>
            <Head>
                <title>Alterar Senha | Linkhub</title>
                <meta name="description" content="Agilize a forma como seus clientes te encontram usando o nosso hub de links." />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>

            { token && id && (
                <Page id={id} token={token}/>
            )}
        </>
    )
}

export default ChangePassword;

export const getServerSideProps: GetServerSideProps = protections.keepInApp(
    async (context) => {

        const { id, token } = context.query

        if(id && typeof id === 'string' && token && typeof token === 'string') {

            const valid = await auth.validateForgotProcess({ id, token })
            
            if(valid) {
                return {
                    props: {
                        id,
                        token
                    }
                }
            }
        }

        return {
            redirect: {
                destination: '/auth/signIn?alert=invalid_change',
                permanent: true
            }
        }
    }
)
