import { Routes, Route } from "react-router-dom";

import { Home } from "./Pages";

import { Navbar,Button,Footer } from "./Components";


const App = () => {
  return (
    <>

      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer/>
  
    </>
  );
};

export default App;
