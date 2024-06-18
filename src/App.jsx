import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import GsapTo from "./pages/GsapTo";
import GsapFrom from "./pages/GsapFrom";
import GsapFromTo from "./pages/GsapFromTo";
import GsapTimeline from "./pages/GsapTimeline";
import GsapStagger from "./pages/GsapStagger";
import GsapScrollTrigger from "./pages/GsapScrollTrigger";
import GsapText from "./pages/GsapText";

const App = () => {
  return (
    <div className="bg-black min-h-screen w-full">
      <Router>
        <Routes>
          <Route path="/gsapto" element={<GsapTo />} />
          <Route path="/gsapfrom" element={<GsapFrom />} />
          <Route path="/gsapfromto" element={<GsapFromTo />} />
          <Route path="/gsaptimeline" element={<GsapTimeline />} />
          <Route path="/gsapstagger" element={<GsapStagger />} />
          <Route path="/gsapscrolltrigger" element={<GsapScrollTrigger />} />
          <Route path="/gsaptext" element={<GsapText />} />
          {/* <Route path="/" element={<Home />} /> */}
        </Routes>
      </Router>
    </div>
  );
};

export default App;
