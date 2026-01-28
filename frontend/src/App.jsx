import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Information from "./sections/Information/Information";
import TrackOrder from "./sections/TrackOrder/TrackOrder";


const App = () => {
  return (
    <div className="app">
      <Navbar />
      <Routes>
        <Route path="/" element={<Information />} />
        <Route path="/track/:trackingId" element={<TrackOrder />} />
      </Routes>
    </div>
  );
};

export default App;
