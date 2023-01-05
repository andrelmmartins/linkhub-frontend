import { ButtonProps, Button as ChakraButton, Image } from "@chakra-ui/react";

interface Props extends ButtonProps {
    text?: string
    arrow?: boolean
}

export default function Button({ text, arrow, ...rest} : Props) {
    return (
        <ChakraButton {...rest}>
            { text }
            { arrow && (
                <Image src='./arrow-white.svg' h='9px' alt='Seta dentro de um botão que se refere ao fato de acessar a conta.'/>
            )}
        </ChakraButton>
    )
}