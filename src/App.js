import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import FounderManager from "./pages/FounderManager";
import AppointmentHead from "./pages/AppointmentHead";
import OurSchool from "./pages/OurSchool";
import ContactUs from "./pages/Contactus";
import HomePage from "./pages/HomePage";
import VissionMission from "./pages/VissionMission";
import SchoolMagazine from "./pages/SchoolMagazine";
import AdminLogin from "./admin/pages/AdminLogin";
import AdminRegister from "./admin/pages/AdminRegister";
import AdminHome from "./admin/pages/AdminHome";
import YourComponent from "./admin/YourComponent";
import AwardTwo from "./admin/pages/AwardTwo";
import { useSelector } from "react-redux";
import ViewCard from "./admin/pages/ViewCard";
import UploadCertificate from "./admin/pages/UploadCertificate";
import UploadTC from "./admin/pages/UploadTC";
import UploadCharacter from "./admin/pages/UploadCharacter";
import FormTC from "./admin/pages/FormTC";
import FormCC from "./admin/pages/FormCC";
import ActivityComponent from "./admin/pages/Activity/ActivityComponent";
import ActivityMain from "./admin/pages/Activity/ActivityMain";
import ViewActivities from "./admin/pages/Activity/ViewActivities";
import PhotoGalleryComponent from "./admin/pages/Photo Gallery/PhotoGalleryComponent";
import PhotoGalleryMain from "./admin/pages/Photo Gallery/PhotoGalleryMain";
import ViewPhotoGallery from "./admin/pages/Photo Gallery/ViewPhotoGallery";
import MediaComponent from "./admin/pages/Media Corner/MediaComponent";
import MediaMain from "./admin/pages/Media Corner/MediaMain";
import ViewMedia from "./admin/pages/Media Corner/ViewMedia";
import Birthday from "./components/BirthdayCorner/Birthday";
import UpcomingComponent from "./admin/pages/upcoming Event/UpcomingComponent";
import UpcomingMain from "./admin/pages/upcoming Event/UpcomingMain";
import AppointmentAdmin from "./admin/pages/AppointmentAdmin";
import AwardsAchievement from "./pages/AwardsAchievement";
import Events from "./components/Happening/Events";
import Home_Sport from "./components/Happening/Home_Sport";
import Upcoming_Event from "./pages/Upcoming_Event";
import CalanderEv from "./components/Student_Corner/CalanderEv";
import Media_Corner from "./components/Happening/Media_Corner";
import Examination from "./components/Student_Corner/Examination";
import Transfer from "./components/Student_Corner/Transfer";
import TC from "./components/Student_Corner/TC";
import CC from "./components/Student_Corner/CC";
import Uniform from "./components/Student_Corner/Uniform";
import E_Registration from "./pages/E_Registration";
import ActivitImages from "./admin/pages/Activity/ActivitImages";
import ActivityViewImages from "./admin/pages/Activity/ActivityViewImages";
import PhotoGllyImages from "./admin/pages/Photo Gallery/PhotoGllyImages";
import PhotoGalleryViewImages from "./admin/pages/Photo Gallery/PhotoGalleryViewImages";
import UploadAwardImages from "./admin/pages/UploadAwardImages";
import ViewAwardImages from "./admin/pages/ViewAwardImages";
import Photo_Gallery from "./components/Happening/Photo_Gallery";
import Activities from "./components/Student_Corner/Activities";
import Eregister from "./pages/Eregister";
import RegisterCards from "./admin/pages/Registration Component/RegisterCards";
import StudentDetails from "./admin/pages/Registration Component/StudentDetails";
import CertificatePhoto from "./admin/pages/Registration Component/CertificatePhoto";
import ViewStudentData from "./admin/pages/Registration Component/ViewStudentData";
import BlockedStudent from "./admin/pages/Registration Component/BlockedStudent";
import HomeVideo from "./components/HomeVideo";
import RegResponse from "./pages/RegResponse";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsCondition from "./pages/TermsCondition";
import RefundPolicy from "./pages/RefundPolicy";
import Pricing from "./pages/Pricing";
import NoticeBoard from "./components/Noticeboard.jsx"

function App() {
  const { currentUser } = useSelector((state) => state.user);
  return (
    <div className="App">
      <Routes>
        
        <Route path="/" element={<HomePage />} />
        <Route path="/meet-our-founder-manager" element={<FounderManager />} />
        <Route path="/our-school" element={<OurSchool />} />
        <Route path="/our-vision-and-mission" element={<VissionMission />} />
        {/* <Route path="/appointment-with-heads" element={<AppointmentHead />} /> */}
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
        <Route path="/transfer-certificate" element={<TC />} />
        <Route path="/character-certificate" element={<CC />} />
        <Route path="/our-uniform" element={<Uniform />} />
        <Route path="/eregister" element={<E_Registration />} />
        <Route path="/e-registration" element={<Eregister />} />
        <Route path="/reg-response" element={<RegResponse />} />

        <Route path="/admin-LogIn" element={<AdminLogin />} />
        <Route
          path="/admin-Register"
          element={
            currentUser ? <AdminRegister /> : <Navigate to="/admin-LogIn" />
          }
        />
        <Route
          path="/AdminHome"
          element={currentUser ? <AdminHome /> : <AdminLogin />}
        />
        <Route
          path="/appointment-with Admin"
          element={
            currentUser ? <AppointmentAdmin /> : <Navigate to="/admin-LogIn" />
          }
        />
        <Route
          path="/YourComponent"
          element={
            currentUser ? <YourComponent /> : <Navigate to="/admin-LogIn" />
          }
        />
        <Route
          path="/award-two"
          element={currentUser ? <AwardTwo /> : <Navigate to="/admin-LogIn" />}
        />
        <Route
          path="/upload-Award-images/:id"
          element={
            currentUser ? <UploadAwardImages /> : <Navigate to="/admin-LogIn" />
          }
        />
        <Route
          path="/view-award-images/:id"
          element={
            currentUser ? <ViewAwardImages /> : <Navigate to="/admin-LogIn" />
          }
        />
        <Route
          path="/ViewCard/:id"
          element={currentUser ? <ViewCard /> : <Navigate to="/admin-LogIn" />}
        />
        <Route
          path="/uploadcertificate"
          element={
            currentUser ? <UploadCertificate /> : <Navigate to="/admin-LogIn" />
          }
        />
        <Route
          path="/TC"
          element={currentUser ? <UploadTC /> : <Navigate to="/admin-LogIn" />}
        />
        <Route
          path="/CC"
          element={
            currentUser ? <UploadCharacter /> : <Navigate to="/admin-LogIn" />
          }
        />
        <Route
          path="/upload-TC"
          element={currentUser ? <FormTC /> : <Navigate to="/admin-LogIn" />}
        />
        <Route
          path="/upload-CC"
          element={currentUser ? <FormCC /> : <Navigate to="/admin-LogIn" />}
        />
        {/* <Route
          path="/activity"
          element={
            currentUser ? <ActivityComponent /> : <Navigate to="/admin-LogIn" />
          }
        /> */}
        {/* <Route
          path="/activity-main-part"
          element={
            currentUser ? <ActivityMain /> : <Navigate to="/admin-LogIn" />
          }
        /> */}
        {/* <Route
          path="/upload-activity-images/:id"
          element={
            currentUser ? <ActivitImages /> : <Navigate to="/admin-LogIn" />
          }
        /> */}
        {/* <Route
          path="/view-activity-images/:id"
          element={
            currentUser ? (
              <ActivityViewImages />
            ) : (
              <Navigate to="/admin-LogIn" />
            )
          }
        /> */}
        {/* <Route
          path="/view-activity/:id"
          element={
            currentUser ? <ViewActivities /> : <Navigate to="/admin-LogIn" />
          }
        /> */}
        {/* <Route
          path="/photo-gallery"
          element={
            currentUser ? (
              <PhotoGalleryComponent />
            ) : (
              <Navigate to="/admin-LogIn" />
            )
          }
        /> */}
        {/* <Route
          path="/photo-gallery-main-part"
          element={
            currentUser ? <PhotoGalleryMain /> : <Navigate to="/admin-LogIn" />
          }
        /> */}
        {/* <Route
          path="/upload-photogallery-images/:id"
          element={
            currentUser ? <PhotoGllyImages /> : <Navigate to="/admin-LogIn" />
          }
        /> */}
        {/* <Route
          path="/view-photo-gallery/:id"
          element={
            currentUser ? <ViewPhotoGallery /> : <Navigate to="/admin-LogIn" />
          }
        /> */}
        {/* <Route
          path="/view-photo-gallery-images/:id"
          element={
            currentUser ? (
              <PhotoGalleryViewImages />
            ) : (
              <Navigate to="/admin-LogIn" />
            )
          }
        /> */}
        {/* <Route
          path="/media-corners"
          element={
            currentUser ? <MediaComponent /> : <Navigate to="/admin-LogIn" />
          }
        /> */}
        {/* <Route
          path="/media-corner-main-part"
          element={currentUser ? <MediaMain /> : <Navigate to="/admin-LogIn" />}
        /> */}
        {/* <Route
          path="/view-media-corner/:id"
          element={currentUser ? <ViewMedia /> : <Navigate to="/admin-LogIn" />}
        /> */}
        {/* <Route
          path="/upcoming-event"
          element={
            currentUser ? <UpcomingComponent /> : <Navigate to="/admin-LogIn" />
          }
        /> */}
        {/* <Route
          path="/upcoming-Event-main"
          element={
            currentUser ? <UpcomingMain /> : <Navigate to="/admin-LogIn" />
          }
        /> */}
        {/* <Route
          path="/register-parts"
          element={
            currentUser ? <RegisterCards /> : <Navigate to="/admin-LogIn" />
          }
        /> */}
        {/* <Route
          path="/all-register-student"
          element={
            currentUser ? <StudentDetails /> : <Navigate to="/admin-LogIn" />
          }
        /> */}
        {/* <Route
          path="/download-certificate/:id"
          element={
            currentUser ? <CertificatePhoto /> : <Navigate to="/admin-LogIn" />
          }
        /> */}
        {/* <Route
          path="/view-student-data/:id"
          element={
            currentUser ? <ViewStudentData /> : <Navigate to="/admin-LogIn" />
          }
        /> */}
        {/* <Route
          path="/block-student-data"
          element={
            currentUser ? <BlockedStudent /> : <Navigate to="/admin-LogIn" />
          }
        /> */}
        <Route path="/contact-us" element={<ContactUs />} />
        {/* <Route path="/privacy-policy" element={<PrivacyPolicy />} /> */}
        {/* <Route path="/terms-condition" element={<TermsCondition />} /> */}
        {/* <Route path="/refund-policy" element={<RefundPolicy />} /> */}
        {/* <Route path="/pricing-details" element={<Pricing />} /> */}
        {/* {currentUser ?  <Route path="/AdminHome" element={<AdminHome/>}/> : <Route path="/admin-LogIn" element={<AdminLogin/>}/> } */}
        {/* <Route path="/admin-AwardsAchieve" element={<AwardsAchieve/>}/> */}
      </Routes>
    </div>
  );
}

export default App;
