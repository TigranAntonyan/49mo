const UPDATE_NEW_MESSAGE_BODY = "UPDATE_NEW_MESSAGE_BODY";
const SEND_MESSAGE = "SEND_MESSAGE";

let initialState =  {
    dialogs: [
        {id: 1, name: "Karen"}, 
        {id: 2, name: "Khachik"}, 
        {id: 3, name: "Gevorg"}, 
        {id: 4, name: "Anna Furshet"}, 
        {id: 5, name: "Terzyan"}        
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

const dialogsReducer = (state = initialState, action) => {

    switch(action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            return {
                ...state,
                newMessageBody: action.body
            };
        case SEND_MESSAGE:
            let body = state.newMessageBody;
            return {
                ...state,
                newMessageBody: "",
                messages: [...state.messages, {id: 6, message: body}]
            };
        default:
            return state;
    }
}
        

export const sendMessageCreator = () => {
    return { type: SEND_MESSAGE }
}
  
export const updateNewMessageBodyCreator = (body) => {
    return { type: UPDATE_NEW_MESSAGE_BODY, body: body }
}
  



export default dialogsReducer;