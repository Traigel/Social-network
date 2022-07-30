import {
    followAC,
    setCurrentPageAC,
    setTotalUsersCountAC,
    setUsersAC,
    UsersMainType,
    usersReducer,
    usFollowAC
} from "./users-reducer";

const userID_1: number = 1;
const userID_2: number = 2;

let initialState: UsersMainType;
beforeEach(() => {
    initialState = {
        users: [
            {
                "name": 'Vladimir',
                "id": userID_1,
                "uniqueUrlName": null,
                "photos": {
                    "small": null,
                    "large": null
                },
                "status": null,
                "followed": true
            },
            {
                "name": 'Alex',
                "id": userID_2,
                "uniqueUrlName": null,
                "photos": {
                    "small": null,
                    "large": null
                },
                "status": "@Bobuk@",
                "followed": false
            }
        ],
        pageSize: 5,
        totalUsersCount: 0,
        currentPage: 1,
        isFetching: false
    }
})

let initialState_1: UsersMainType
beforeEach(() => {
    initialState_1 = {
        users: [],
        pageSize: 5,
        totalUsersCount: 0,
        currentPage: 1,
        isFetching: false
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
test('set current page', () => {
    const usersReducer1 = usersReducer(initialState_1, setCurrentPageAC(5))
    expect(usersReducer1.currentPage).toBe(5)
})
test('set total users count', () => {
    const usersReducer1 = usersReducer(initialState_1, setTotalUsersCountAC(5432))
    expect(usersReducer1.totalUsersCount).toBe(5432)
})
