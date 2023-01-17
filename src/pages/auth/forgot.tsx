import { NextPage, GetServerSideProps } from 'next'
import Head from 'next/head'

import { protections } from '../../utils/protections'
import Page from '../../presentation/auth/forgot'

const Forgot: NextPage = () => {
    return (
        <>
            <Head>
                <title>Esqueci minha senha | Linkhub</title>
                <meta name="description" content="Agilize a forma como seus clientes te encontram usando o nosso hub de links." />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>

            <Page/>
        </>
    )
}

export default Forgot;

export const getServerSideProps : GetServerSideProps = protections.keepInApp(
    async (context) => {
        return {
            props: {}
        }
    }
)