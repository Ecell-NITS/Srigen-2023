import { Routes, Route } from "react-router-dom";

import { Home, Registration, Sponsors, Team, NotFound404, Comingsoon } from "./Pages";

import { Footer } from "./Components";

const App = () => {
  // const backgroundColor = "var(--srijan4-gradient-4)"
  const bgColor = "var(--srijan4-gradient-3)";

  return (
    <>
      {/* <Navbar /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/registration/:event" element={<Registration />} />
        <Route path="/sponsors" element={<Sponsors bgColor={bgColor} />} />
        <Route path="/team" element={<Team />} />
        <Route path="/coming" element={<Comingsoon />} />
        <Route path="*" element={<NotFound404 />} />
      </Routes>

      <Footer />
    </>
  );
};

export default App;
