import { TitleHeader } from "../../Components";
import style from "./SkillsSection.module.scss";

interface props {
  title: string;
  description: string | false;
  soft_siklls: soft_siklls[];
  tech_skills: tech_skills[];
}

interface soft_siklls {
  image: string | any;
  title: string;
}

type tech_skills = {
  percent: number | string;
  name: string;
};

const SkillsSection = ({
  title,
  description,
  soft_siklls,
  tech_skills,
}: props) => {
  return (
    <section className={style.skills}>
      <div className="container">
        <TitleHeader
          title={title}
          description={description ? description : false}
        />
        <div className={style.content}>
          <div className={style.soft_skills}>
            {soft_siklls.map((skill, i) => {
              return (
                <div className={style.skill} key={i}>
                  <img src={skill.image} alt={`skill-${i}`} />
                  <h3 className={style.skill_name}>{skill.title}</h3>
                </div>
              );
            })}
          </div>
          <div className={style.tech_skills}>
            {tech_skills.map((skill, index) => {
              return (
                <div
                  className={style.circular_progress}
                  data-percentage={`${skill.percent}`}
                  key={index}
                  style={{
                    background: `conic-gradient(#006868 ${skill.percent}%, transparent ${skill.percent}%)`,
                  }}
                >
                  <div className={style.inner_circle}></div>
                  <p className={style.percentage}>{skill.name}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
