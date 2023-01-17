export const validate = {

    name: (name: string) => {
        return Boolean(
            name.match(/^([A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ\s]+)?$/)
        )
    },

    email: (email: string) => {
        return Boolean(
            email.match(/^(([a-z0-9](\.?[a-z0-9]){2,}))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)
        )
    },

    password: (password: string) => {
        return (
            password.trim().length >= 8
        )
    },

    username: (username: string) => {
        return Boolean(
            username.match(/^[a-z0-9](\.?[a-z0-9]){2,}$/)
        )
    },

}