import { createContext, useContext } from "react";
import { RenderProps, useToast } from '@chakra-ui/react'
import Toast from "../components/Toast";

interface ContextProps {
    toast: {
        sucess: (title: string) => void
        error: (title: string) => void
    }
}

export const AppContext = createContext({} as ContextProps)

export function AppProvider(props : { children: React.ReactNode }) {

    const toast = useToast()
    
    function createToast(title: string, status: 'info' | 'warning' | 'success' | 'error' | 'loading' | undefined) {
        toast({
            title,
            status,
            isClosable: true,
            duration: 1000 * 5, // seconds
            position: 'bottom-right',
            render: ({ title, status, id } : RenderProps) => (
                <Toast title={title} status={status} onClose={() => {if(id) toast.close(id)}} />
            ),
            containerStyle: {
                margin: '0px',
                marginTop: '5px',
                transform: 'translate(0px, -50px)'
            },
        })
    }

    return (
        <AppContext.Provider value={{
            toast: {
                sucess: (title: string) => createToast(title, 'success'),
                error: (title: string) => createToast(title, 'error'),
            }
        }}>
            { props.children }
        </AppContext.Provider>
    )
}