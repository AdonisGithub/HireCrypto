import React from "react";
import { Header } from "../components/header";
import { Footer } from "../components/footer";
import { Home } from "./Home";
import { Roadmap } from "./Roadmap";
import { AboutUs } from "./AboutUs";
import { ContactUs } from "./ContactUs";
import { MeetTheTeam } from "./MeetTheTeam";
import { Discord } from "./Discord";
const HomePage = () => {
  return (
    <div className="">
      <Header />
      <Home />
      <Roadmap />
      <AboutUs />
      <MeetTheTeam />
      <ContactUs />
      <Discord />
      <Footer />
    </div>
  );
};
export { HomePage };
