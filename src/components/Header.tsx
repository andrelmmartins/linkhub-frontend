import { Container, Divider, Flex, Image } from '@chakra-ui/react'

interface Props {
    bottomLine?: boolean
    children: JSX.Element
}
 
export default function Header(props: Props) {
    return (
        <Flex as='header' flexDir='column'>
            <Container>
                <Flex h='120px' justify='space-between' align='center'>

                    <Image src='./logo-black.svg' alt='Logotipo do Linkhub' />
                    { props.children }

                </Flex>
            </Container>

            { props.bottomLine && (
                <Divider w='90%' borderBottomWidth='1px' opacity='1'  borderColor='black' marginX='5%'/>
            )}
        </Flex>
    )
}