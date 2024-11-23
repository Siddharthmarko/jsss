import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import FounderManager from "./pages/FounderManager";
import OurSchool from "./pages/OurSchool";
import ContactUs from "./pages/Contactus";
import HomePage from "./pages/HomePage";
import VissionMission from "./pages/VissionMission";
import SchoolMagazine from "./pages/SchoolMagazine";
import { useSelector } from "react-redux";
import Birthday from "./components/BirthdayCorner/Birthday";
import AwardsAchievement from "./pages/AwardsAchievement";
import Events from "./components/Happening/Events";
import Home_Sport from "./components/Happening/Home_Sport";
import CalanderEv from "./components/Student_Corner/CalanderEv";
import Media_Corner from "./components/Happening/Media_Corner";
import Examination from "./components/Student_Corner/Examination";
import Transfer from "./components/Student_Corner/Transfer";
import Uniform from "./components/Student_Corner/Uniform";
import E_Registration from "./pages/E_Registration";
import Photo_Gallery from "./components/Happening/Photo_Gallery";
import Activities from "./components/Student_Corner/Activities";

function App() {
  return (
    <div className="App">
      <Routes>
        
        <Route path="/" element={<HomePage />} />
        <Route path="/meet-our-founder-manager" element={<FounderManager />} />
        <Route path="/our-school" element={<OurSchool />} />
        <Route path="/our-vision-and-mission" element={<VissionMission />} />
        <Route path="/our-magazine" element={<SchoolMagazine />} />
        <Route
          path="/awards-and-achievements"
          element={<AwardsAchievement />}
        />
        <Route path="/events" element={<Events />} />
        <Route path="/media-corner" element={<Media_Corner />} />
        {/* <Route path="/notice-board" element={<NoticeBoard />} /> */}
        <Route path="/photo-gallerys" element={<Photo_Gallery />} />
        <Route path="/sports-gallery" element={<Home_Sport />} />
        {/* <Route path="/latest-events" element={<Upcoming_Event />} /> */}
        <Route path="/activities" element={<Activities />} />
        <Route path="/school-annual-calendar" element={<CalanderEv />} />
        <Route path="/birthday-corner" element={<Birthday />} />
        <Route path="/examination-pattern" element={<Examination />} />
        <Route path="/download-certificate" element={<Transfer />} />
        <Route path="/our-uniform" element={<Uniform />} />
        <Route path="/eregister" element={<E_Registration />} />
        <Route
          path="/AdminHome"
        />
        <Route path="/contact-us" element={<ContactUs />} />
      </Routes>
    </div>
  );
}

export default App;
