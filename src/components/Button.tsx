import { ButtonProps, Button as ChakraButton, Image } from "@chakra-ui/react";

interface Props extends ButtonProps {
    arrow?: boolean
    children?: React.ReactNode
}

export default function Button({ children, arrow, ...rest} : Props) {
    return (
        <ChakraButton {...rest}>
            { children }
            { arrow && (
                <Image src='/arrow-white.svg' h='9px' alt='Seta dentro de um botão que se refere ao fato de acessar a conta.'/>
            )}
        </ChakraButton>
    )
}