import { Routes, Route } from "react-router-dom";

import { Home, Registration } from "./Pages";

import { Navbar, Footer, Sponsorspage } from "./Components";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/registration/:event" element={<Registration />} />
      </Routes>
      <Sponsorspage />
      <Footer />
    </>
  );
};

export default App;
