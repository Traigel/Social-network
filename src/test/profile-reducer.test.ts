import {addPostAC, ProfilePageType, profileReducer} from "../Redux/profile-reducer";
import {v1} from "uuid";

let initialState: ProfilePageType;
beforeEach(() => {
    initialState = {
        posts: [
            {id: v1(), message: 'Hello word', likes: 24},
            {id: v1(), message: 'Yo! i`m props', likes: 56},
        ],
        profile: {
            userId: 2,
            aboutMe: '',
            fullName: '',
            lookingForAJob: true,
            lookingForAJobDescription: '',
            photos: {
                large: null,
                small: null
            },
            contacts: {
                facebook: '',
                github: '',
                instagram: '',
                mainLink: '',
                twitter: '',
                vk: '',
                website: '',
                youtube: ''
            }
        },
        status: ''
    }
})

test('add post', () => {
    const profileReducer1 = profileReducer(initialState, addPostAC({newPostText: 'Hello'}))
    expect(profileReducer1.posts.length).toBe(3)
})
