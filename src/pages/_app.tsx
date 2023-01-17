import type { AppProps } from 'next/app'

import { ChakraProvider } from '@chakra-ui/react'
import { theme } from '../styles/theme'

import { AuthProvider } from '../contexts/AuthContext'
import { AppProvider } from '../contexts/AppContext'

export default function App({ Component, pageProps }: AppProps) {
    return (
        <ChakraProvider theme={theme}>
        <AppProvider>
        <AuthProvider>
        
            <Component {...pageProps} />
        
        </AuthProvider>
        </AppProvider>
        </ChakraProvider>
    )
}
