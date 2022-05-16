import axios from "axios"
const instance = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com/todos"
})
export const UsersApi = {
    setUsers(data) {
        return instance.post()
    },
    getUsers() {
        return instance.get('/6')
    }
}