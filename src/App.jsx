import { Routes, Route } from "react-router-dom";

import { Home, Registration } from "./Pages";

import { Navbar } from "./Components";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/registration" element={<Registration />} />
      </Routes>
    </>
  );
};

export default App;
