import { Routes, Route } from "react-router-dom";

// import { Home, Registration, Sponsors, Team, NotFound404, Comingsoon } from "./Pages";
import { NotFound404, Comingsoon } from "./Pages";

import { Footer } from "./Components";
import Loader from "./Components/Loader/Loader";

const App = () => {
  // const backgroundColor = "var(--srijan4-gradient-4)"
  // const bgColor = "var(--srijan4-gradient-3)";

  return (
    <>
      {/* <Navbar /> */}
      <Loader />
      <Routes>
        {/* <Route path="/" element={<Home />} /> */}
        {/* <Route path="/registration/:event" element={<Registration />} />
        <Route path="/sponsors" element={<Sponsors bgColor={bgColor} />} />
        <Route path="/team" element={<Team />} /> */}
        <Route path="/" element={<Comingsoon />} />
        <Route path="*" element={<NotFound404 />} />
      </Routes>

      <Footer />
    </>
  );
};

export default App;
