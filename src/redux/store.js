import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";
import sidebarReducer from "./sidebarReducer";


let store = {
    _state: {
        profilePage: {
            posts: [
                {message: 'Hi,how are you?', id: 1, likeCounts: 15},
                {message: 'It\'s my first props', id: 2, likeCounts: 20},
            ],
            newPostText: 'Mark',
        },
        dialogsPage: {
            messages: [
                {id: 1, message: 'Hey!"'},
                {id: 2, message: 'How is this going?'},
                {id: 3, message: 'This is going great!'},
            ],
            newMessageText: 'Mark',
            dialogs: [
                {id: 1, name: 'Andrew'},
                {id: 2, name: 'Igor'},
                {id: 3, name: 'Ivan'},
                {id: 4, name: 'Vlad'},
                {id: 5, name: 'Sasha'},
            ],
        },
        sidebar: {}
    },
    _callSubscriber() {
        console.log('State changed');
    },

    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) {


        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.sidebar = sidebarReducer(this._state.sidebar, action);

        this._callSubscriber(this._state);

    }

}


export default store;