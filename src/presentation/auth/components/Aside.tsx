import { Container, Flex, FlexProps, Heading } from "@chakra-ui/react";

interface Props extends FlexProps {
    children: React.ReactNode
}

export default function Aside({ children, ...rest }: Props) {
    
    let heading = <Heading as='h1' size={[ 'md', 'xl', 'xl', '2xl', '2xl', '3xl' ]} color='white'>{children}</Heading>
    
    return (
        <Flex as='aside' bg='black' w={['100%', '100%', '40%']} maxW={['100%', '100%', '500px']} align='flex-end' p={['30px 0px', '50px 0px', '50px']} {...rest}>
            <Container display={['flex', 'flex', 'none']}>
                {heading}
            </Container>
            <Flex display={['none', 'none', 'flex']}>{heading}</Flex>
        </Flex>
    )
}