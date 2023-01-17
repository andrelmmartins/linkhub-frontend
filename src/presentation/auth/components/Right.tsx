import { Container, Flex, FlexProps } from "@chakra-ui/react";

interface Props extends FlexProps {
    children: React.ReactNode
}

export default function Right({ children } : Props) {
    return (
        <Flex w='100%' h='100%' overflowY='scroll'>
            <Container w='100%' h='100%'>
                <Flex w='100%' h='100%' justify='center' align='center' py='50px'>
                    { children }
                </Flex>
            </Container>
        </Flex>
    )
}