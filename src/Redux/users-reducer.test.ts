import {followAC, setUsersAC, UsersMainType, usersReducer, UsersType, usFollowAC} from "./users-reducer";
import {v1} from "uuid";

const userID_1: string = v1();
const userID_2: string = v1();

let initialState: UsersMainType;
beforeEach(() => {
    initialState = {
        users: [
            {id: userID_1, photoUrl: 'https://shapka-youtube.ru/wp-content/uploads/2021/02/avatarka-dlya-skaypa-dlya-parney.jpg', followed: true, name: 'Vladimir', status: 'I am a boss', location: {city: 'Grodno', country: 'Belarus'}},
            {id: userID_2, photoUrl: 'https://shapka-youtube.ru/wp-content/uploads/2021/02/avatarka-dlya-skaypa-dlya-parney.jpg', followed: false, name: 'Alex', status: 'I am a boss', location: {city: 'Kiev', country: 'Ukraine'}},
        ]
    }
})

let initialState_1: UsersMainType
beforeEach(() => {
    initialState_1 = {
        users: []
    }
})

test('follow user', () => {
    const usersReducer1 = usersReducer(initialState, followAC(userID_2))
    expect(usersReducer1.users[1].followed).toBe(true)
})
test('unfollow user', () => {
    const usersReducer1 = usersReducer(initialState, usFollowAC(userID_1))
    expect(usersReducer1.users[0].followed).toBe(false)
})
test('set users', () => {
    const usersReducer1 = usersReducer(initialState_1, setUsersAC(initialState.users))
    expect(usersReducer1.users.length).toBe(2)
})
