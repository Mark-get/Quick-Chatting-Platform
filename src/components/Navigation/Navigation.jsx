import s from "./Navigation.module.css"
import {NavLink} from "react-router-dom";

function Navigation() {
    return (
        <nav className={s.nav}>
            <div className={s.item}>
                <NavLink to="/profile"
                         className={({isActive}) => isActive ? `${s.item} ${s.active}` : `${s.item}`}>Profile</NavLink>
            </div>
            <div className={`${s.item} ${s.active}`}>
                <NavLink to="/dialogs"
                         className={({isActive}) => isActive ? `${s.item} ${s.active}` : `${s.item}`}>Dialogs</NavLink>
            </div>
            <div className={`${s.item} ${s.active}`}>
                <NavLink to="/users"
                         className={({isActive}) => isActive ? `${s.item} ${s.active}` : `${s.item}`}>Users</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/news"
                         className={({isActive}) => isActive ? `${s.item} ${s.active}` : `${s.item}`}>News</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/music"
                         className={({isActive}) => isActive ? `${s.item} ${s.active}` : `${s.item}`}>Music</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/settings"
                         className={({isActive}) => isActive ? `${s.item} ${s.active}` : `${s.item}`}>Settings</NavLink>
            </div>
        </nav>
    );
}

export default Navigation;
