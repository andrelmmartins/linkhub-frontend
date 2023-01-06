import { Flex } from "@chakra-ui/react";
import Window from "../../components/Window";
import Aside from "./components/Aside";
import Logo from "./components/Logo";

export default function Page() {

    return (
        <Window flexDir={['column', 'column', 'row']}>

            <Aside>Acessar<br/>sua conta</Aside>

            <Flex justify='center' align='center' w='100%' h='100%' py='50px'>
                <Flex flexDir='column' w='100%' maxW='350px'>
                    <Logo />
                </Flex>
            </Flex>
        </Window>
    )
}