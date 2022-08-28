import {addMessagesAC, DialogsPageType, dialogsReducer} from "../Redux/dialogs-reducer";
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
        ]
    }
})

test('add message', () => {
    const dialogsReducer1 = dialogsReducer(initialState, addMessagesAC({newMessageText: 'Hello'}))
    expect(dialogsReducer1.messagesData.length).toBe(4)
})
