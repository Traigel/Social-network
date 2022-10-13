import {AppReducer, AppReducerType, setInitializedAC} from "./app-reducer";

let state: AppReducerType

beforeEach(() => {
    state = {
        initialized: false
    }
})

test('set initialized', () => {
    const appReducerTest = AppReducer(state, setInitializedAC())
    expect(appReducerTest.initialized).toBe(true)
})