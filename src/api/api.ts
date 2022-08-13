import axios from "axios";

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers:{
        'API-KEY': 'b9c59615-46e7-4032-afb6-5c6e3ef180ec'
    }
})

export const usersAPI = {
    getUsers: (currentPage: number = 1, pageSize: number = 100) => {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(res => res.data)
    }
}

export const followAPI = {
    postUserID: (userID: number) => {
        return instance.post(`follow/${userID}`)
    },
    deleteUserID: (userID: number) => {
        return instance.delete(`follow/${userID}`)
    }
}

export const profileAPI = {
    getUserID: (userID: string) => {
        return instance.get(`profile/${userID}`)
    }
}

export const authAPI = {
    getAuth: () => {
        return instance.get(`auth/me`)
            .then(res => res.data)
    }
}