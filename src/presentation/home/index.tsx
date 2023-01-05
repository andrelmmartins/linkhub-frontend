import { Button, Container, Flex, Heading, Image, Text } from "@chakra-ui/react";
import Header from "../../components/Header";
import Link from "../../components/Link";

export default function Page() {
    return (
        <Flex h='100vh' w='100vw' flexDir='column' overflowX='hidden'>
            <Header bottomLine>
                <Flex gap='10px'>
                    <Button variant='outline'>Criar conta</Button>
                    <Button>Login</Button>
                </Flex>
            </Header>

            <Flex as='main' h='100%' marginY='50px'>
                <Container h='100%'>
                    <Flex flexDir='row' gap='50px'h='100%'>
                        
                        <Flex as='section' flexDir='column' h='100%' w='100%'>
                            <Flex flex='1'/>
                            
                            <Flex flexDir='column' gap='20px'>
                                <Heading size='lg'>Agilize a forma como seus clientes te encontram usando o nosso hub de links.</Heading>
                                <Text size='lg'>Acesse sua conta e aproveite!</Text>
                                <Button h='35px' w='35px' p='0px'>
                                    <Image src='./arrow-white.svg' h='9px'/>
                                </Button>
                            </Flex>
                            
                            <Flex flex='1' align='flex-end'>
                                <Text size='md'>Desenvolvido por <Link href='https://github.com/andremedeiro'>André Martins</Link></Text>
                            </Flex>
                        </Flex>
                        
                        <Flex bg='url(./rocket.svg)' bgSize='contain' bgRepeat='no-repeat' bgPos='right' h='100%' w='60%'/>
                    </Flex>
                </Container>
            </Flex>
        </Flex>
    )
}