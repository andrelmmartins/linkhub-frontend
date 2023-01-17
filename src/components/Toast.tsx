import React from "react"
import { Button, HStack, Image, Text } from "@chakra-ui/react"

interface Props {
    title: React.ReactNode,
    status: 'info' | 'warning' | 'success' | 'error' | 'loading' | undefined
    onClose: () => void
}

export default function Toast(props : Props) {
    return (
        <HStack
            bg={ 
                props.status == 'error' ? 'red.500'
                : props.status == 'success' ? 'green.500'
                : 'gray2'
            }
            borderRadius='3px'
            p='12px 15px'
            spacing='15px'
            w='fit-content'
        >
            <Text color='white' fontSize='13px'>{props.title}</Text>
            <Button variant='ghost' height='20px' w='20px' onClick={props.onClose}>
                <Image src='/close.svg' h='10px' w='10px' alt='Fechar'/>
            </Button>
        </HStack>
    )
}