import React from "react";
import s from "./MyPosts.module.css"
import Post from "./Post/Post";

const MyPosts = (props) => {


    let postsElements = props.posts.map(p => <Post message={p.message} likeCounts={p.likeCounts} />)

    let newPostElement = React.createRef();

    let onAddPost = () => {
        props.addpost();
    }

    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.updateNewPostText(text);
    }

    return (
        <div className={s.postBlock}>
            My posts
            <div>
                <div>
                    <textarea onChange={onPostChange} ref={newPostElement}
                        value={props.newPostText} />
                </div>
                <div>
                    <button onClick={onAddPost}> Add Post</button>
                </div>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    );
}

export default MyPosts;
