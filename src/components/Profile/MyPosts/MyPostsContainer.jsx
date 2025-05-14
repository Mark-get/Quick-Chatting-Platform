import React from "react";
import { addPostActionCreator, addPostChangeActionCreator, } from "../../../redux/profileReducer";
import MyPosts from "./MyPosts";
import { connect } from "react-redux";



const mapStateToProps = (state) => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        updateNewPostText: (text) => {
            let action = addPostChangeActionCreator(text);
            dispatch(action);
        },
        addpost: () => {
            dispatch(addPostActionCreator());
        }

    }
}


const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

export default MyPostsContainer;    
