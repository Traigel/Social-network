import {v1} from "uuid";

export type PostsType = {
    id: string,
    message: string,
    likes: number
}
type ContactsType = {
    github: string
    vk: string
    facebook: string
    instagram: string
    twitter: string
    website: string
    youtube: string
    mainLink: string
}
type PhotosType = {
    small: string | null
    large: string | null
}
export type ProfileType = {
    aboutMe: string
    userId: number
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    contacts: ContactsType
    photos: PhotosType

}
export type ProfilePageType = {
    posts: Array<PostsType>
    newPostText: string
    profile: ProfileType | null
}

type AddPostActionType = ReturnType<typeof addPostAC>
type UpdateNewPostActionType = ReturnType<typeof updateNewPostAC>
type SetUserProfileACType = ReturnType<typeof setUserProfileAC>
export type ProfileActionType = AddPostActionType | UpdateNewPostActionType | SetUserProfileACType

const initialState: ProfilePageType = {
    posts: [
        {id: v1(), message: 'Hello word', likes: 24},
        {id: v1(), message: 'Yo! i`m props', likes: 56},
    ],
    newPostText: '',
    profile: null

// {
//     userId: 2,
//         aboutMe: '',
//     fullName: '',
//     lookingForAJob: true,
//     lookingForAJobDescription: '',
//     photos: {
//     large: null,
//         small: null
// },
//     contacts: {
//         facebook: '',
//             github: '',
//             instagram: '',
//             mainLink: '',
//             twitter: '',
//             vk: '',
//             website: '',
//             youtube: ''
//     }
// }
}

export const profileReducer = (state: ProfilePageType = initialState, action: ProfileActionType): ProfilePageType => {
    switch (action.type) {
        case 'ADD-POST':
            return {
                ...state,
                posts: [{id: v1(), message: state.newPostText, likes: 0}, ...state.posts],
                newPostText: ''
            };
        case 'UPDATE-NEW-POST-TEXT':
            return {
                ...state,
                newPostText: action.newText
            };
            case 'SET-USER-PROFILE':
            return {
                ...state,
                profile: action.profile
            };

        default :
            return state;
    }
}

export const addPostAC = () => ({type: 'ADD-POST'} as const)
export const updateNewPostAC = (newText: string) => ({type: 'UPDATE-NEW-POST-TEXT', newText} as const)
export const setUserProfileAC = (profile: ProfileType) => ({type: 'SET-USER-PROFILE', profile} as const)
