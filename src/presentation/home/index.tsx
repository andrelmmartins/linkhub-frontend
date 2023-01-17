import Link from "next/link";
import { Container, Flex, Heading, Text } from "@chakra-ui/react";

import Copyright from "../../components/Copyright";
import Header from "../../components/Header";
import Window from "../../components/Window";
import Button from "../../components/Button";

export default function Page() {

    const buttons = <>
        <Link href='/auth/create'><Button maxW='300px' width={['100%', '100%', 'fit-content']} variant='outline'>Criar conta</Button></Link>
        <Link href='/auth/signIn'><Button maxW='300px' width={['100%', '100%', 'fit-content']}>Entrar</Button></Link>
    </>

    return (
        <Window>

            <Header bottomLine justify={[ 'center', 'center', 'space-between' ]}>
                <Flex gap='10px' display={[ 'none', 'none', 'flex' ]}>
                    { buttons }
                </Flex>
            </Header>

            <Flex as='main' h='100%' marginY='50px'>
                <Container h='100%'>

                    <Flex h='100%' gap='50px' align='center' flexDir={['column', 'column', 'row']} textAlign={['center', 'center', 'left']}>
                        
                        <Flex as='section' flexDir='column' h={['fit-content', 'fit-content', '100%']} w='100%'>

                            <Flex flex='1' display={{ 'xl': 'none', '2xl': 'flex' }}/>
                            
                            <Flex flexDir='column' gap='20px'>

                                <Heading size='lg'>Agilize a forma como seus clientes te encontram usando o nosso hub de links.</Heading>
                                <Text size='lg'>Acesse sua conta e aproveite!</Text>

                                <Button display={[ 'none', 'none', 'flex' ]} arrow>Acessar conta</Button>

                                <Flex gap='10px' flexDir={['column', 'row']} align='center' display={[ 'flex', 'flex', 'none' ]} >
                                    { buttons }
                                </Flex>
                            
                            </Flex>
                            
                            <Copyright flex='1' align='flex-end' display={[ 'none', 'none', 'flex' ]} />
                        
                        </Flex>
                        
                        <Flex
                            bg='url(/rocket.svg)'
                            bgSize='contain'
                            bgRepeat='no-repeat'
                            
                            bgPos={[ 'center', 'center', 'right' ]}
                            height={[ '400px', '500px', '100%' ]}
                            width={[ '100%', '100%', '60%' ]}
                        />
                    
                        <Copyright display={[ 'flex', 'flex', 'none' ]}/>

                    </Flex>
                </Container>
            </Flex>
        </Window>
    )
}