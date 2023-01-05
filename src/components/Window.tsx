import { Flex, FlexProps } from '@chakra-ui/react'

interface Props extends FlexProps {
    children: React.ReactNode
}
 
export default function Window({ children, ...rest }: Props) {
    return (
        <Flex h='100vh' w='100vw' flexDir='column' overflowX='hidden' {...rest} >
            {children}
        </Flex>
    )
}