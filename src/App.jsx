import React from "react";

import Navbar from "./componant/Navbar/Navbar";
import "./App.css";
import Home from "./componant/Home/Home";
import QualityServices from "./componant/QualityServices/QualityServices";
import MyWork from "./componant/MyWork/MyWork";
import Expertise from "./componant/Expertise/Expertise";
import Resume from "./componant/Resume/Resume";
import Pricing from "./componant/Pricing/Pricing";
import Contact from "./componant/Contact/Contact";

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <QualityServices />
      <MyWork />
      <Expertise />
      <Resume />
      <Pricing />
      <Contact />
    </>
  );
}

export default App;
