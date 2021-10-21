const ADD_POST = 'ADD_POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT'
const SEND_MESSAGE = 'SEND_MESSAGE'
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY'

let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 0, message: 'Hi, how are u?', like: 20},
                {id: 1, message: 'It\'s my first post', like: 30},
                {id: 2, message: 'It\'s my second post', like: 10},
            ],
            newPostText: 'Enter your new post!'
        },
        messagesPage: {
            dialogs: [
                {id: 0, name: 'Anna'},
                {id: 1, name: 'Andriana'},
                {id: 2, name: 'Mila'},
                {id: 3, name: 'Valya'},
                {id: 4, name: 'Ira'},
                {id: 5, name: 'Kolya'},
                {id: 6, name: 'Anna'},
            ],
            messages: [
                {id: 0, message: 'hi'},
                {id: 1, message: 'hello'},
                {id: 2, message: 'how r u'},
                {id: 3, message: 'fine, u?'},
                {id: 4, message: 'me 2'},
                {id: 5, message: 'any plans 4 weekends?'},
                {id: 6, message: 'i dont think so'},
                {id: 7, message: 'wanna watch a movie?'},
                {id: 8, message: 'sure'},
                {id: 9, message: 'great! c u soon'},
            ],
            newMessageBody: ''
        }
    },
    getState() {
        return this._state
    },
    renderEntireTree() {
    },
    subscriber (observer) {
        this.renderEntireTree = observer
    },

    _addPost() {
        let newPost = {
            id: 10, message: this._state.profilePage.newPostText, like: 0
        }
        this._state.profilePage.posts.push(newPost);
        this._state.profilePage.newPostText = ''
        this.renderEntireTree(this._state)
    },
    _updateNewPostText(newText) {
        this._state.profilePage.newPostText = newText
        this.renderEntireTree(this._state)
    },
    _updateNewMessageText(newText){
        this._state.messagesPage.newMessageBody = newText
        this.renderEntireTree(this._state)
    },
    _sendMessage(){
        let newMessage = {
            id: 10, message: this._state.messagesPage.newMessageBody
        }
        this._state.messagesPage.messages.push(newMessage);
        this._state.messagesPage.newMessageBody = ''
        this.renderEntireTree(this._state)
    },
    dispatch(action){
        if (action.type === ADD_POST){
            this._addPost(action.postMessage)
        }else if(action.type === UPDATE_NEW_POST_TEXT){
            this._updateNewPostText(action.newText)
        }else if(action.type === UPDATE_NEW_MESSAGE_BODY){
            this._updateNewMessageText(action.newText)
        }else if(action.type === SEND_MESSAGE){
            this._sendMessage()
        }
    }
}
export const addPostActionCreator = () => {
    return {
        type: ADD_POST
    }
}

export const updateNewPostTextActionCreator = (text) => {
    return{
        type: UPDATE_NEW_POST_TEXT, newText: text
    }
}

export const sendMessageActionCreator = () => {
    return {
        type: SEND_MESSAGE
    }
}

export const updateNewMessageBodyActionCreator = (text) => {
    return{
        type: UPDATE_NEW_MESSAGE_BODY, newText: text
    }
}


export default store;