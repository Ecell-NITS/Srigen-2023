import { Routes, Route } from "react-router-dom";

import { Home } from "./Pages";

import { Navbar } from "./Components";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
};

export default App;
