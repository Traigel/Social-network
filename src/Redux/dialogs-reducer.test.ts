import {addMessagesAC, DialogsPageType, dialogsReducer, updateNewMessagesAC} from "./dialogs-reducer";
import {v1} from "uuid";

let initialState: DialogsPageType;
beforeEach(() => {
    initialState = {
        dialogsData: [
            {id: v1(), name: 'Vova'},
            {id: v1(), name: 'Alex'},
            {id: v1(), name: 'Dima'},
            {id: v1(), name: 'Vasa'},
            {id: v1(), name: 'Masha'},
        ],
        messagesData: [
            {id: v1(), message: 'Hello Word!'},
            {id: v1(), message: 'I am a computer programmer'},
            {id: v1(), message: 'Yo'},
        ],
        newMessageText: ''
    }
})

test('update new message', () => {
    const dialogsReducer1 = dialogsReducer(initialState, updateNewMessagesAC("New message"))
    expect(dialogsReducer1.newMessageText).toBe("New message")
})
test('add message', () => {
    const dialogsReducer1 = dialogsReducer(initialState, addMessagesAC())
    expect(dialogsReducer1.messagesData.length).toBe(4)
})
