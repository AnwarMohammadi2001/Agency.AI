import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TrustBy from "./components/TrustBy";
import Serivces from "./components/Serivces";
import Ourwork from "./components/Ourwork";
import Team from "./components/Team";
import ContactUs from "./components/ContactUs";
import { Toaster } from "react-hot-toast";

const App = () => {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
  );
  return (
    <div className="dark:bg-black  relative">
      <Toaster />
      <Navbar theme={theme} setTheme={setTheme} />
      <Hero />
      <TrustBy />
      <Serivces />
      <Ourwork />
      <Team />
      <ContactUs />
    </div>
  );
};

export default App;
