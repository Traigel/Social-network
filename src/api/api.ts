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