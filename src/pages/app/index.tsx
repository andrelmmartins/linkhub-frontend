import { NextPage, GetServerSideProps } from 'next'
import Head from 'next/head'

import { protections } from '../../utils/protections'
import Page from '../../presentation/app'

const App: NextPage = () => {
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

export default App;

export const getServerSideProps : GetServerSideProps = protections.keepInAuth(
    async (context) => {
        return {
            props: {}
        }
    }
)