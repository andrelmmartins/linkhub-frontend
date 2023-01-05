import { Flex, FlexProps, Link, Text } from "@chakra-ui/react";

export default function Copyright(props : FlexProps) {
    return (
        <Flex {...props}>
            <Text size='md'>Desenvolvido por <Link href='https://github.com/andremedeiro/'>André Martins</Link></Text>
        </Flex>
    )
}