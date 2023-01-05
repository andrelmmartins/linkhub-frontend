import NextLink from "next/link";
import { parse } from "url";
import { LinkProps, Link as ChakraLink } from "@chakra-ui/react";

interface Props extends LinkProps {
    children: React.ReactNode,
    href: string
}

export default function Link({ children, href, ...rest } : Props) {
    
    const parsed = parse(href)
    return (
        <NextLink href={parsed} target='_blank' passHref>
            <ChakraLink {...rest}>
                {children}
            </ChakraLink>
        </NextLink>
    )
}