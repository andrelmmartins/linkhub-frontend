import { createContext, useState } from "react"
import { useRouter } from "next/router";

import { auth } from "../services/api/auth"
import { cookie } from "../services/cookies"
import { useAppContext } from "../hooks/useAppContext"
import { ChangePasswordData, CreateData, ForgotData, SignInData, User } from "../types/auth"
import { translate } from "../utils/error"

interface ContextProps {
    user: User | null
    isAuthenticated: boolean
    signIn: (data: SignInData) => Promise<void>
    signOut: () => void
    create: (data: CreateData) => Promise<void>
    forgot: (data: ForgotData) => Promise<void>
    change: (data: ChangePasswordData) => Promise<void>
    emailAlredyExists: (email: string) => Promise<boolean>
    usernameAlredyExists: (usernama: string) => Promise<boolean>
}

export const AuthContext = createContext({} as ContextProps)

export function AuthProvider(props : { children: React.ReactNode }) {
    
    const { toast } = useAppContext()
    const router = useRouter()

    const [ user, setUser ] = useState<User | null>(null)
    const isAuthenticated = !!user

    async function signIn({ email, password } : SignInData) {
        try {
            const { user, token } = await auth.signIn({ email, password })
            cookie.set(undefined, token)
            setUser(user)

            router.push('/app')
        } catch(error: unknown) {
            toast.error(
                translate(error)
            )
        }
    }

    function signOut() {
        cookie.destroy(undefined)
        setUser(null)
        router.push('/')
    }

    async function create({ name, email, username, password } : CreateData) {
        try {
            const role = 'normal'
            const { user, token } = await auth.create({ name, email, username, password, role })
            cookie.set(undefined, token)
            setUser(user)

            router.push('/app')
        } catch(error: unknown) {
            toast.error(
                translate(error)
            )
        }
    }

    async function forgot({ email } : ForgotData) {
        try {
            await auth.forgot({ email })
        } catch(error: unknown) {
            toast.error(
                translate(error)
            )
        }
    }

    async function change({ id, token, password } : ChangePasswordData) {
        try {
            const { user } = await auth.change({ id, token, password })
            
            toast.sucess(`${user.name.split(' ')[0]}, sua senha foi alterada!`)
            router.push('/auth/signIn')
        } catch(error: unknown) {
            toast.error(
                translate(error)
            )
        }
    }

    async function emailAlredyExists(email: string) : Promise<boolean> {
        try {
            const exists = await auth.emailAlredyExists(email)
            return exists
        } catch(error: unknown) {
            toast.error(
                translate(error)
            )
        }

        return false
    }

    async function usernameAlredyExists(username: string) : Promise<boolean> {
        try {
            const exists = await auth.usernameAlredyExists(username)
            return exists
        } catch(error: unknown) {
            toast.error(
                translate(error)
            )
        }

        return false
    }
    
    
    return (
        <AuthContext.Provider value={{
            user,
            isAuthenticated,
            signIn,
            signOut,
            create,
            forgot,
            change,
            emailAlredyExists,
            usernameAlredyExists
        }}>
            {props.children}
        </AuthContext.Provider>
    )
}
