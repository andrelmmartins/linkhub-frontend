import { destroyCookie, parseCookies, setCookie } from 'nookies' 

const cookieName = 'linkhub@auth'
const path = '/app'

type Context = any

export const cookie = {
    
    get: (context: Context) => {
        const { [cookieName] : cookie } = parseCookies(context);
        return cookie
    },

    set: (context: Context, token: string) => {
        setCookie(context, cookieName, token, {
            maxAge: 60 * 60 * 24 * 1, // 1 dia
            path
        })
    },

    destroy: (context: Context) => {
        destroyCookie(context, cookieName, { path })
    }
}