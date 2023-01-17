import { NextPage, GetServerSideProps } from 'next'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { useEffect } from 'react'

import { useAppContext } from "../../hooks/useAppContext"
import { protections } from '../../utils/protections'
import { translate } from '../../utils/error'

import Page from '../../presentation/auth/signIn'

interface Props {
    alert?: string
}

const SignIn: NextPage = ({ alert } : Props) => {
    
    const router = useRouter()
    const { toast } = useAppContext()

    useEffect(() => {
        if(alert) {
            router.replace('', undefined, { shallow: true }).then(() => {
                toast.error(
                    translate(alert)
                )
            })
        }
    }, [ this ])
    
    return (
        <>
            <Head>
                <title>Linkhub</title>
                <meta name="description" content="Agilize a forma como seus clientes te encontram usando o nosso hub de links." />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>

            <Page/>
        </>
    )
}

export default SignIn;

export const getServerSideProps : GetServerSideProps = protections.keepInApp(
    async (context) => {
    
        const { alert } = context.query
    
        if (alert) return {
            props: {
                alert
            }
        }
    
        return {
            props: {}
        }
    }
)