// user

export type User = UserResponse

export type UserResponse = {
    _id: string
    name: string
    email: string
    username: string
    role: string
}

// signIn

export type SignInData = {
    email: string
    password: string
}

export type SignInResponse = {
    user: UserResponse
    token: string
} 

// create

export type CreateData = {
    name: string
    email: string
    username: string
    password: string
}

export type CreateAPIData = {
    name: string
    email: string
    username: string
    password: string
    role: string
} 

export type CreateFormData = CreateData & {
    passwordConfirmation: string
}

// forgot

export type ForgotData = {
    email: string
}

export type ValidateForgotProcessData = {
    id: string
    token: string
}

// change

export type ChangePasswordFormData = {
    password: string,
    passwordConfirmation: string
}

export type ChangePasswordData = ValidateForgotProcessData & {
    password: string
}
