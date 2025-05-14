import s from "./Post.module.css"

function Post(props) {
    return (
        <div className={s.item}>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuH3APgGvrYDDX0hDJ-bkmUBwK6nDWC--jmA&s"/>
            {props.message}
            <div>
                <span>like {props.likeCounts}</span>
            </div>
        </div>
    );
}

export default Post;



