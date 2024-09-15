import style from "./HeaderSection.module.scss";
import logo from "../../assets/logo.svg";

const HeaderSection = () => {
  return (
    <header className={style.header}>
      <div className="container">
        <div className={style.content}>
          <img src={logo} alt="logo" />
        </div>
      </div>
    </header>
  );
};

export default HeaderSection;
