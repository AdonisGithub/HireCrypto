import React from "react";
import { useEffect, useState } from "react";
import { Header } from "../components/header";
import { Footer } from "../components/footer";
import { Wellcome } from "./Wellcome";
import { Roadmap } from "./Roadmap";
import { AboutUs } from "./AboutUs";
import { ContactUs } from "./ContactUs";
import { MeetTheTeam } from "./MeetTheTeam";
import { Discord } from "./Discord";
const HomePage = () => {
  const [scroll, setScroll] = useState(0);

  useEffect(() => {
    window.removeEventListener("scroll", function () {});
    window.addEventListener("scroll", function (event) {
        setScroll(this.document.documentElement.scrollTop);
    });
  }, []);

  return (
    <div className="">
      <Header />
      <Wellcome />
      <Roadmap scroll={scroll}/>
      <AboutUs />
      <MeetTheTeam />
      <Discord />
      <ContactUs />
      <Footer />
    </div>
  );
};
export { HomePage };
