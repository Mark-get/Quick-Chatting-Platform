const addPost = "addPost";
const updateNewPostText = "updateNewPostText";

let initialState = {
  posts: [
    { message: "Hi,how are you?", id: 1, likeCounts: 15 },
    { message: "It's my first props", id: 2, likeCounts: 20 },
  ],
  newPostText: "Mark",
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case addPost: {
      let newPost = {
        id: 5,
        message: state.newPostText,
        likeCounts: 0,
      };
      return {
        ...state,
        posts: [...state.posts, newPost],
        newPostText: "",
      };
    }
    case updateNewPostText: {
      return {
        ...state,
        newPostText: action.newText,
      };
    }
    default:
      return state;
  }
};

export const addPostActionCreator = () => {
  return {
    type: addPost,
  };
};

export const addPostChangeActionCreator = (text) => {
  return {
    type: updateNewPostText,
    newText: text,
  };
};

export default profileReducer;
