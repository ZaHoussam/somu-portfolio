import style from "./Button.module.scss";
import download_icon from "../../assets/download-icon.png";

type txt = {
  txt: string;
};

const Button = ({ txt }: txt) => {
  return (
    <button className={style.btn}>
      <span className="txt">{txt}</span>
      <img src={download_icon} alt="download" />
    </button>
  );
};

export default Button;
