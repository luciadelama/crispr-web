import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./sections/Hero/Hero";
import AboutUs from "./sections/AboutUs/AboutUs";
import Technology from "./sections/Technology/Technology";
import Publication from "./sections/Publication/Publication";
import Team from "./sections/Team/Team";
import Steps from "./sections/Steps/Steps";
import Information from "./sections/Information/Information";
import TrackOrder from "./sections/TrackOrder/TrackOrder";
import Footer from "./components/Footer/Footer";


const App = () => {
  return (
    <div className="app">
      <Navbar />
      <Hero />
      <Technology />
      <Publication />
      <Team />
      <div className="steps-info-section">
        <Information />
        <Steps />
      </div>
      <Routes>
        <Route path="/track/:trackingId" element={<TrackOrder />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
