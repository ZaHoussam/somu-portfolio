// import { useEffect, useState } from "react";
import {
  ExperienceSection,
  HeaderSection,
  HeroSection,
  LatestProjectsSection,
  PersonalSummarySection,
  SkillsSection,
} from "./Sections";
import {
  linkedin,
  behance,
  person,
  design,
  userTesting,
  marketing,
  appDeveloper,
  speech,
  collaboration,
  problemSolving,
  leader,
  creativity,
  project_1,
  project_2,
  project_3,
  project_4,
} from "./assets/index";

const App = () => {
  // * Remove All of This If You want get your data from API
  const personal_summary_cards = [
    {
      image: marketing,
      title: "تسويــــق",
      projectNum: 67,
    },
    {
      image: userTesting,
      title: "اختبار المستخدم",
      projectNum: 67,
    },
    {
      image: appDeveloper,
      title: "برمجة التطبيقات",
      projectNum: 67,
    },
    {
      image: design,
      title: "تصميم UIUX",
      projectNum: 67,
    },
  ];
  const soft_skills = [
    {
      image: collaboration,
      title: "إدارة المشاريع",
    },
    {
      image: speech,
      title: "التواصل الفعّال",
    },
    {
      image: leader,
      title: "قيادة الفريق",
    },
    {
      image: problemSolving,
      title: "التفكير النقدي وحل المشكلات",
    },
    {
      image: creativity,
      title: "الإبداع والابتكار",
    },
  ];
  const tech_skills = [
    {
      percent: 65,
      name: "Flutter",
    },
    {
      percent: 60,
      name: "Adobe XD",
    },
    {
      percent: 90,
      name: "Figma",
    },
    {
      percent: 80,
      name: "Sketch",
    },
  ];
  const latest_projects = [
    {
      image: project_1,
      link: "",
    },
    {
      image: project_2,
      link: "",
    },
    {
      image: project_3,
      link: "",
    },
    {
      image: project_4,
      link: "",
    },
    {
      image: project_1,
      link: "",
    },
    {
      image: project_2,
      link: "",
    },
    {
      image: project_3,
      link: "",
    },
    {
      image: project_4,
      link: "",
    },
  ];
  // * And Turn On This Statments
  // const [data, setData] = useState<any[]>([]); // Store users
  // const [loading, setLoading] = useState<boolean>(false); // Track loading state
  // const [error, setError] = useState<string | null>(null); // Track errors

  // // Fetch data from API
  // const fetchUsers = async () => {
  //   setLoading(true); // Start loading
  //   try {
  //     const response = await fetch("Put Here Your API URL");
  //     if (!response.ok) {
  //       throw new Error("Failed to fetch data");
  //     }
  //     const data: any[] = await response.json(); // Parse JSON response
  //     setData(data); // Update state with users data
  //   } catch (err: any) {
  //     setError(err.message); // Handle errors
  //   } finally {
  //     setLoading(false); // Stop loading
  //   }
  // };

  // useEffect(() => {
  //   fetchUsers(); // Call API when component mounts
  // }, []);

  return (
    <>
      <HeaderSection />
      <HeroSection
        name="عبد الرزاق بوقرينات"
        job="مصمم تجربة المستخدم ومسؤول فريق المنتجات في مؤسسة سمو رقمي."
        jobMakerNum={3}
        socialMedia={[behance, linkedin]}
        image={person}
      />
      <PersonalSummarySection
        title={"النبذة الشخصية"}
        description={
          "أنا عبد الرزاق بوقرينات مصمم تجربة المستخدم ومسؤول فريق المنتجات في مؤسسة سمو رقمي. بفضل خبرتي المتنوعة في العمل الفريلانس، أسعى إلى تحسين تجربة المستخدم وجعلها أكثر سلاسة وجاذبية، مع التركيز على تحقيق الأهداف التجارية والعملاء."
        }
        cards={personal_summary_cards}
      />
      <ExperienceSection
        title={"الخبــــــــــرة"}
        description={
          "لدي تجربة واسعة في العمل كفريلانسر، حيث تعاونت مع العديد من الشركات الناشئة والمشاريع الصغيرة لتصميم وتطوير واجهات مستخدم مبتكرة وتحسين تجربة المستخدم. خلال فترة عملي كفريلانسر، قمت بتنفيذ مشاريع متنوعة، من تطبيقات الهاتف المحمول إلى المواقع الإلكترونية، مما أكسبني معرفة عميقة بمتطلبات المستخدمين والسوق."
        }
      />
      <SkillsSection
        title={"المهــــــــــــــــارات"}
        description={false}
        soft_siklls={soft_skills}
        tech_skills={tech_skills}
      />
      <LatestProjectsSection
        title={"آخـــــر أعمالـــي"}
        description={false}
        latest_projects={latest_projects}
      />
    </>
  );
};

export default App;
