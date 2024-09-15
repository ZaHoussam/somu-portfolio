import { useEffect, useRef } from "react";
import { Button } from "../../Components/index";
import style from "./HeroSection.module.scss";

interface props {
  name: string;
  job: any;
  jobMakerNum: number | any;
  image: string;
  socialMedia: string[];
}

const HeroSection = ({ name, job, jobMakerNum, image, socialMedia }: props) => {
  const descriptionDom: any = useRef(null);
  useEffect(() => {
    if (descriptionDom.current && job) {
      const pMaker: [] = job.split(" ").slice(0, jobMakerNum);
      const pWMaker: [] = job.split(" ").slice(jobMakerNum, job.length);
      descriptionDom.current.innerHTML += `<span class="maker">${pMaker.join(
        " "
      )}</span>`;
      descriptionDom.current.innerHTML += " " + pWMaker.join(" ");

      descriptionDom.current = false;
      return;
    }
  }, [job, jobMakerNum]);

  return (
    <section className={style.hero}>
      <div className="container">
        <div className={style.content}>
          <div className={style.info}>
            <h1 className={style.title}>{name}</h1>
            <p ref={descriptionDom} className={style.description}></p>
            <div className={style.action}>
              <Button txt="حمل السيفي الخاص بي" />
              <ul className={style.social_media}>
                {socialMedia.map((icon, i) => {
                  return (
                    <li key={i}>
                      <img src={icon} alt={`${i}`} />
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
          <div className={style.image}>
            <img src={image} alt="person" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
