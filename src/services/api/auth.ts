import { ChangePasswordData, ValidateForgotProcessData, CreateAPIData, ForgotData, SignInData, SignInResponse, User } from "../../types/auth";
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
    },

    create: async ({ name, email, username, password, role } : CreateAPIData) => {
        const response = await api.post('/auth/create', {
            name,
            email,
            username,
            password,
            role
        })
        
        const data = response.data as SignInResponse
        
        return {
            user: data.user,
            token: data.token
        }
    },

    forgot: async ({ email } : ForgotData) => {
        const response = await api.post('/auth/forgot', {
            email
        })

        return response.data
    },

    change: async ({ id, token, password } : ChangePasswordData) => {
        const response = await api.put(`/auth/change/${id}/${token}`, {
            password
        })

        const data = response.data as { user: User }

        return data
    },

    emailAlredyExists: async(email: string) => {
        const response = await api.post('/user/exists/email', {
            email
        })

        if(response.data.exists) {
            return response.data.exists
        }

        return false
    },

    usernameAlredyExists: async(username: string) => {
        const response = await api.post('/user/exists/username', {
            username
        })

        if(response.data.exists) {
            return response.data.exists
        }
        
        return false
    },

    validateForgotProcess: async ({ id, token } : ValidateForgotProcessData) => {
        const response = await api.get(`/auth/forgot/${id}/${token}`)
        
        if(response.data.valid) {
            return response.data.valid
        }
        
        return false
    },
}