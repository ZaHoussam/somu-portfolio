import { useRef, useState } from "react";
import { TitleHeader } from "../../Components";
import style from "./LatestProjectsSection.module.scss";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

interface props {
  title: string;
  description: string | boolean;
  latest_projects: project[];
}

type project = {
  image: string;
  link: string;
};

const LatestProjectsSection = ({
  title,
  description,
  latest_projects,
}: props) => {
  const divideArrayIntoGroupsOfFour = (arr: project[]) => {
    const result = [];

    for (let i = 0; i < arr.length; i += 4) {
      result.push(arr.slice(i, i + 4));
    }

    return result;
  };
  const [projectsSlider] = useState<project[][]>(
    divideArrayIntoGroupsOfFour(latest_projects)
  );
  const swiperRef = useRef<any>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleSlideChange = (swiper: any) => {
    setActiveIndex(swiper.activeIndex);
  };

  return (
    <section className={style.latest_projects}>
      <div className="container">
        <TitleHeader title={title} description={description} />
        <Swiper
          key={projectsSlider.length}
          modules={[Pagination]}
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          onSlideChange={handleSlideChange}
          spaceBetween={50}
          slidesPerView={1}
        >
          {projectsSlider.map((slide, index) => {
            return (
              <SwiperSlide className={style.projects} key={index}>
                {slide.map((project, index) => {
                  return (
                    <div className={style.project} key={index}>
                      <div className={style.image}>
                        <img src={project.image} alt={`project-${index}`} />
                      </div>
                      <div className={style.link}>
                        <span className="txt">التفاصيل</span>
                        <svg
                          width="27"
                          height="22"
                          viewBox="0 0 27 22"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M5.57503 14.726C5.49454 15.0574 5.69794 15.3913 6.02934 15.4718L11.4297 16.7834C11.7611 16.8639 12.095 16.6605 12.1755 16.3291C12.256 15.9977 12.0526 15.6638 11.7212 15.5833L6.92085 14.4175L8.08673 9.61713C8.16722 9.28574 7.96382 8.95185 7.63243 8.87136C7.30104 8.79087 6.96714 8.99427 6.88665 9.32566L5.57503 14.726ZM20.0921 5.6709L5.85383 14.3444L6.49631 15.3991L20.7346 6.72559L20.0921 5.6709Z"
                            fill="white"
                          />
                        </svg>
                      </div>
                    </div>
                  );
                })}
              </SwiperSlide>
            );
          })}
        </Swiper>
        <div className={style.slider_pages}>
          {projectsSlider.map((_page, index) => {
            return (
              <span
                className={style.circle}
                key={index}
                onClick={() => swiperRef.current.slideTo(index)}
                style={{
                  backgroundColor: activeIndex === index ? "#009999" : "",
                }}
              ></span>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default LatestProjectsSection;
