import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import TrackOrder from "./sections/TrackOrder/TrackOrder";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home";

const App = () => {
  return (
    <div className="app">
      <Navbar />

      <main className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/track/:trackingId" element={<TrackOrder />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
};

export default App;
