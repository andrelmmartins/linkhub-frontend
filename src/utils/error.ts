import { AxiosError } from "axios"

export function translate(error: unknown) {

    if (typeof error === "string") return translateStringErrors(error)
    
    else if (error instanceof AxiosError) {
        if(error.response) {
            if (typeof error.response.data === 'string') return translateStringErrors(error.response.data)
        }    
    }

    else if (error instanceof Error) return translateStringErrors(error.message)
    
    console.log(error)

    return 'Houve algum erro inesperado!'
}

function translateStringErrors(error: string) {
    switch(error) {
        // AUTH
        case 'incorrect email or password': return 'Email ou senha incorretos!'
        default: {
            console.log(error)
            return 'Houve algum erro inesperado!'
        }
    }

}