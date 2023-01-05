import { extendTheme, StyleFunctionProps } from "@chakra-ui/react"

export const theme = extendTheme({
    colors: {
        white: "#F2F0EB",
        black: "#0D0D0D",
        gray1: "#BFBFBD",
        gray2: "#8C8B88",
        gray3: "#595856",
    },

    fonts: {
        body: 'Manrope',
        heading: 'Manrope'
    },

    styles: {
        global: {
            body: {
                bg: 'white',
                color: 'black'
            }
        }
    },

    breakpoints: {
        sm: '30em',
        md: '48em',
        lg: '62em',
        xl: '80em',
        '2xl': '96em',
    },
    
    components: {
        Container: {
            sizes: {
                sm: {
                    maxWidth: '100%',
                    paddingX: '5%'
                },
                md: {
                    maxWidth: '100%',
                    paddingX: '7%'
                },
                lg: {
                    maxWidth: '100%',
                    paddingX: '10%'
                },
                xl: {
                    maxWidth: '100%',
                    paddingX: '10%'
                },
                '2xl': {
                    maxWidth:  '100%',
                    paddingX: '10%'
                },
            },

            defaultProps: {
                size: ['sm', 'md', 'lg', 'xl', '2xl']
            }
        },

        Button: {
            baseStyle: {
                borderRadius: '3px',
                fontWeight: '600',
                boxShadow: '0px 0px #0D0D0D',

                _hover: {
                    transform: 'translate(-2px, -2px)',
                    boxShadow: '1px 1px #0D0D0D, 2px 2px #0D0D0D' 
                },
                _active: {
                    transform: 'translate(1px, 1px)',
                    boxShadow: '0px 0px #0D0D0D' 
                },
            },

            sizes: {
                sm: {
                    h: '40px',
                    fontSize: '12px',
                    padding: '0px 15px',
                    gap: '15px',
                },
                lg: {
                    justify: 'space-between',
                    align: 'center',
                    padding: '0px 15px',
                }
            },

            variants: {
                solid: (props: StyleFunctionProps) => ({
                    bg: 'black',
                    color: 'white',
                    _hover: {
                        bg: 'black',
                        color: 'white',
                    },
                    _focus: {
                        bg: 'black',
                        color: 'white'
                    },
                }),

                outline: (props: StyleFunctionProps) => ({
                    bg: 'white',
                    color: 'black',
                    borderColor: 'black',
                    borderWidth: '1px',
                    _active: {
                        bg: 'white',
                        color: 'black',
                    }
                }),
            },

            defaultProps: {
                variant: 'solid',
                size: 'sm'
            }
        },

        Text: {
            sizes: {
                md: {
                    fontSize: '13px'
                },
                lg: {
                    fontSize: '18px'
                }
            }
        },

        Heading: {
            sizes: {
                lg: {
                    fontSize: ['24px', '24px', '35px']
                }
            }
        },

        Link: {
            baseStyle: {
                borderBottomWidth: '1px',
                borderColor: 'black',

                _hover: {
                    textDecoration: 'none'
                }
            }
        }
    }
})