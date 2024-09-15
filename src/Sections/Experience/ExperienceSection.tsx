import { TitleHeader } from "../../Components";
import style from "./Experience.module.scss";
import { experience } from "../../assets/index";

interface props {
  title: string;
  description: string | boolean;
}

const ExperienceSection = ({ title, description }: props) => {
  return (
    <section className={style.experience}>
      <img src={experience} alt="bg" className={style.experience_bg} />
      <div className="container">
        <TitleHeader
          title={title}
          description={description ? description : false}
        />
      </div>
    </section>
  );
};

export default ExperienceSection;
