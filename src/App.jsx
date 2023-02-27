import { Routes, Route } from "react-router-dom";

import { Home, Registration } from "./Pages";

import { Navbar, Footer } from "./Components";
import GalleryCarousel from "./Components/GalleryCarousel/GalleryCarousel";

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
