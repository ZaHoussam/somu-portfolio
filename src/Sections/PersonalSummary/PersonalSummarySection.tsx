import { TitleHeader } from "../../Components";
import style from "./PersonalSummarySection.module.scss";

interface card {
  image: string | any;
  title: string;
  projectNum: number | string;
}

interface props {
  title: string;
  description: string | false;
  cards: card[];
}

const PersonalSummarySection = ({ title, description, cards }: props) => {
  return (
    <section className={style.personalSummary}>
      <div className="container">
        <TitleHeader
          title={title}
          description={description ? description : false}
        />
        <div className={style.cards}>
          {cards.map((card, index) => {
            return (
              <div className={style.card} key={index}>
                <img src={card.image} alt={`${index}`} />
                <h4 className={style.card_title}>{card.title}</h4>
                <span
                  className={style.num_of_proejct}
                >{`${card.projectNum} مشروع`}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default PersonalSummarySection;
