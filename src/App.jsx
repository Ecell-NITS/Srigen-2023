import { Routes, Route } from "react-router-dom";

import { Home, Registration } from "./Pages";

import { Navbar, Footer, GalleryCarousel } from "./Components";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/registration/:event" element={<Registration />} />
      </Routes>
      <GalleryCarousel />
      <Footer />
    </>
  );
};

export default App;
