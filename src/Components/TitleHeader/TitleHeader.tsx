import style from "./TitleHeader.module.scss";

interface props {
  title: string;
  description: string | boolean;
}

const TitleHeader = ({ title, description }: props) => {
  return (
    <div className={style.title_header}>
      <h2 className={style.title}>{title}</h2>
      <p
        className={style.description}
        style={{
          display: description === "" || false ? "none" : "block",
        }}
      >
        {description}
      </p>
    </div>
  );
};

export default TitleHeader;
