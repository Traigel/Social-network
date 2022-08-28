import axios from "axios";

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers:{
        'API-KEY': 'fe0bde16-910d-49bc-94ec-281d4e7919c5'
    }
})

export const usersAPI = {
    getUsers: (currentPage: number = 1, pageSize: number = 100) => {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(res => res.data)
    }
}

export const followAPI = {
    postFollow: (userID: number) => {
        return instance.post(`follow/${userID}`)
    },
    deleteUnFollow: (userID: number) => {
        return instance.delete(`follow/${userID}`)
    }
}

export const profileAPI = {
    getProfile: (userID: string) => {
        return instance.get(`profile/${userID}`)
    },
    getStatus: (userID: string) => {
        return instance.get(`profile/status/${userID}`)
    },
    putStatus: (status: string) => {
        return instance.put('profile/status', {status})
    }

}

export const authAPI = {
    getAuth: () => {
        return instance.get(`auth/me`)
            .then(res => res.data)
    }
}