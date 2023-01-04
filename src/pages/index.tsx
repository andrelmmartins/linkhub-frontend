import { NextPage, GetStaticProps } from 'next'
import Head from 'next/head'
import Page from '../presentation/home'

const Home: NextPage = () => {
  
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

export default Home;


export const getStaticProps : GetStaticProps = async (context) => {
    return {
        props: {}
    }
}