import Hero from "../sections/Hero/Hero";
import AboutUs from "../sections/AboutUs/AboutUs";
import Technology from "../sections/Technology/Technology";
import Publication from "../sections/Publication/Publication";
import Team from "../sections/Team/Team";
import Steps from "../sections/Steps/Steps";
import Information from "../sections/Information/Information";

const Home = () => {
  return (
    <>
      <Hero />
      <Technology />
      <Publication />
      <Team />
      <div className="steps-info-section">
        <Information />
        <Steps />
      </div>
    </>
  );
};

export default Home;
