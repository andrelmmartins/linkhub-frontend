import { SignInData, SignInResponse } from "../../types/auth";
import { api } from "./index";

export const auth = {
    signIn: async ({ email, password } : SignInData) => {
        const response = await api.post('/auth/signIn', {
            email,
            password
        })
        
        const data = response.data as SignInResponse
        
        return {
            user: data.user,
            token: data.token
        }
    }
}