import { Flex, Image } from "@chakra-ui/react";

export default function Page() {
    return (
        <Flex h='100vh' as='main' justify='center' align='center'>
            <Image src="./logo-black.svg" width="100px" />
        </Flex>
    )
}