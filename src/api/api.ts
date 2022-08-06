import axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers:{
        'API-KEY': '455241d3-47b3-41f0-8bd1-28ed96c874d5'
    }
})
export const usersAPI = {
    getUsers: (currentPage: number = 1, pageSize: number = 100) => {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(res => res.data)
    }
}

