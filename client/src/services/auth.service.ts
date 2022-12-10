import axios from "axios"

axios.defaults.baseURL = 'http://localhost:4200/api'
axios.defaults.headers['Content-type'] = 'application/json'

export const AuthService = {
    async login(name: string, phone: string, email: string, password: string) {
        return axios.post('auth/login', {name, phone, email, password})
    },

    async register(name: string, phone: string, email: string, password: string) {
        return axios.post('auth/register', {name, phone, email, password})
    },

    async getUser(id: string) {
        return axios.get(`auth/user/${id}`)
    },

    async getAllUsers() {
        return axios.get(`auth/users`)
    }
}