import s from "./Header.module.css"
import logo from "./Assets/Headerimg.png"
function Header() {
  return (
    <header className={s.header}>
      <img src= {logo} />
    </header>
  );
}

export default Header;
