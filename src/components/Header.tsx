import { Container, Divider, Flex, FlexProps, Image } from '@chakra-ui/react'

interface Props extends FlexProps  {
    bottomLine?: boolean
    children: React.ReactNode
}
 
export default function Header({ bottomLine, children, ...rest }: Props) {
    return (
        <Flex as='header' flexDir='column'>
            <Container>
                <Flex h='120px' justify='space-between' align='center' {...rest} >

                    <Image src='./logo-black.svg' alt='Logotipo do Linkhub' />
                    { children }

                </Flex>
            </Container>

            { bottomLine && (
                <Divider w='90%' borderBottomWidth='1px' opacity='1'  borderColor='black' marginX='5%'/>
            )}
        </Flex>
    )
}