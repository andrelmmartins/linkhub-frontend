import { Flex, FlexProps, Heading } from "@chakra-ui/react";

interface Props extends FlexProps {
    children: React.ReactNode
}

export default function Left({ children, ...rest }: Props) {
        
    return (
        <Flex 
            as='aside'
            bg='black'
            p={['30px', '50px']}
            
            w={['100%', '100%', '40%']}
            maxW={['100%', '100%', '500px']}
            flexDir={['column', 'column', 'row']}
            align={['center', 'center', 'flex-end']}
            
            {...rest}
        >
            <Heading
                as='h1'
                color='white'
                textAlign={['center', 'center', 'left']}
                size={[ 'lg', 'xl', 'xl', '2xl', '2xl', '3xl' ]}
            >
                {children}
            </Heading>
        </Flex>
    )
}