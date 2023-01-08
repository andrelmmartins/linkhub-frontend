// user

export type User = UserResponse

export type UserResponse = {
    _id: string
    name: string
    email: string
    username: string
    role: string
}

// login

export type SignInData = {
    email: string
    password: string
}

export type SignInResponse = {
    user: UserResponse
    token: string
} 

// login

export type CreateFormData = {
    name: string
    email: string
    username: string
    password: string
    passwordConfirmation: String
} 