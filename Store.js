import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";


let store = {
    _state: {
        profilePage: {
            posts: [
                {id:1, post:"Hi, How are you?", likesCount:33},
                {id:2, post:"It's my first post", likesCount:999},
                {id:1, post:"Hi", likesCount:800},
                {id:2, post:"first post", likesCount:99} 
            ],
            newPostText: "algoritm.am"},
            
        messagesPage: {
            dialogs: [
                {id: 1, name: "Karen"}, 
                {id: 2, name: "Khachik"}, 
                {id: 3, name: "Gevorg"}, 
                {id: 4, name: "Anna Furshet"}, 
                {id: 5, name: "Terzyan"}, 
                {id: 6, name: "Muradyan"} 
            ],
            messages: [
                {id: 1, message: "Hi"}, 
                {id: 2, message: "How it is?"}, 
                {id: 3, message: "yo"}, 
                {id: 4, message: "How it is?"}, 
                {id: 5, message: "yo"}
            ],
            newMessageBody: "",
        }
        },

    _callSubscriber () { 
        console.log('state changed') 
    },    



    getState() {
        return this._state;
    },

    subscribe(observer) {
        this._callSubscriber = observer
    },

  
    
    dispatch (action) {

        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.messagesPage = dialogsReducer(this._state.messagesPage, action);
       
        this._callSubscriber(this._state);
    },
}




export default store;
