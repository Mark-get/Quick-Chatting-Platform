const addMessage = "addMessage";
const updateNewMessage = "updateNewMessage";

let initialState = {
  messages: [
    { id: 1, message: 'Hey!"' },
    { id: 2, message: "How is this going?" },
    { id: 3, message: "This is going great!" },
  ],
  newMessageText: "Mark",
  dialogs: [
    { id: 1, name: "Andrew" },
    { id: 2, name: "Igor" },
    { id: 3, name: "Ivan" },
    { id: 4, name: "Vlad" },
    { id: 5, name: "Sasha" },
  ],
};

const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case addMessage: {
      let body = state.newMessageText;
      return {
        ...state,
        newMessageText: "",
        messages: [...state.messages, { id: 6, message: body }],
      };
    }
    case updateNewMessage: {
      return {
        ...state,
        newMessageText: action.newMessage,
      };
    }
    default:
      return state;
  }
};

export const buttonSendActionCreator = () => {
  return {
    type: addMessage,
  };
};

export const messagePostChangeActionCreator = (text) => {
  return {
    type: updateNewMessage,
    newMessage: text,
  };
};
export default dialogsReducer;
