import s from "./ProfileInfo.module.css";

function ProfileInfo() {

    return (
        <div>
            <div className={s.img}>
                <img
                    src="https://img.freepik.com/premium-vector/airport-terminal-building-with-aircraft-taking-off-monochrome-mono-color-airport-landscape_88272-1448.jpg"/>
            </div>
            <div className={s.descriptionPart}>ava + description</div>
        </div>

    )
}

export default ProfileInfo;