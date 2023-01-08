import { extendTheme, StyleFunctionProps } from "@chakra-ui/react"

export const theme = extendTheme({
    colors: {
        white: "#F2F0EB",
        black: "#0D0D0D",
        black_transparent: "#0D0D0D11",
        gray1: "#BFBFBD",
        gray2: "#8C8B88",
        gray3: "#595856",
    },

    shadows: {
        outline: '0 0 0 3px #BFBFBD'
    },

    fonts: {
        body: 'Manrope',
        heading: 'Manrope'
    },

    styles: {
        global: {
            body: {
                bg: 'white',
                color: 'black',
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
                    width: 'fit-content'
                },
                lg: {
                    display: 'flex',
                    fontSize: '14px',
                    justifyContent: 'space-between',
                    padding: '0px 15px',
                    height: '50px'
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
                    _hover: {
                        bg: 'white',
                        color: 'black',
                    },
                    _active: {
                        bg: 'white',
                        color: 'black',
                    }
                }),

                ghost: (props: StyleFunctionProps) => ({
                    bg: 'transparent',
                    padding: '0px',
                    minH: 'fit-content',
                    minW: 'fit-content',
                    margin: 'auto',
                    _hover: {
                        transform: 'translate(0px, 0px)',
                        boxShadow: '0px 0px transparent',
                        bg: 'black_transparent'
                    },
                    _active: {
                        transform: 'translate(0px, 0px)',
                        boxShadow: '0px 0px transparent',
                        bg: 'black_transparent',
                    },
                })
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
                    fontSize: ['24px', '24px', '24px', '35px', '40px', '45px']
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
            },
            
            sizes: {
                sm: {
                    w: 'fit-content',
                    fontSize: '12px',
                    borderBottom: 'none',
                },
                
                md: {
                    w: 'fit-content',
                    fontSize: '12px',
                }
            }
        },

        Input: {

            variants: {
                flushed: (props: StyleFunctionProps) => ({
                    field: {
                        fontWeight: 'bold',
                        fontSize: '14px',
                        borderColor: 'black',
                        paddingLeft: '15px',
                        height: '45px',
                        
                        _hover: {
                            borderColor: 'black',
                        },
                        _focus: {
                            borderColor: 'black',
                            boxShadow: '0 1px #0D0D0D'
                        },
                        _placeholder: {
                            color: 'black',
                            fontSize: '13px',
                            fontWeight: 'normal'
                        }
                    },
                }),
            },

            defaultProps: {
                variant: 'flushed'
            }
        },
    }
})