import { destroyCookie, parseCookies, setCookie } from 'nookies' 

const authCookieName = 'linkhub@auth'
const path = '/'

type Context = any

export const cookie = {
    
    get: (context: Context) => {
        const { [authCookieName] : cookie } = parseCookies(context);
        return cookie
    },

    set: (context: Context, token: string) => {
        setCookie(context, authCookieName, token, {
            maxAge: 60 * 60 * 24 * 1, // 1 day
            path
        })
        
    },

    destroy: (context: Context) => {
        destroyCookie(context, authCookieName, { path })
    }
}