import { createContext, useContext, useState } from "react"
import Router, { useRouter } from "next/router";

import { auth } from "../services/api/auth"
import { cookie } from "../services/cookies"
import { useAppContext } from "./AppContext";
import { SignInData, User } from "../types/auth"
import { translate } from "../utils/error";

interface ContextProps {
    signIn: (data: SignInData) => Promise<void>
}

const AuthContext = createContext({} as ContextProps)

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

            router.push('../app')
        } catch(error: unknown) {
            toast.error(
                translate(error)
            )
        }
    }
    
    return (
        <AuthContext.Provider value={{
            signIn
        }}>
            {props.children}
        </AuthContext.Provider>
    )
}

export const useAuthContext = () => useContext(AuthContext) 
