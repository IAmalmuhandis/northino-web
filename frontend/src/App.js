import { Routes, Route } from "react-router-dom";
import { lazy } from "react";
import Home from "./pages/Home";
import NorthinoTV from "./pages/NorthinoTV";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import OurMentors from "./pages/OurMentors";
import NorthinoServices from "./pages/NorthinoServices";
import TVCourseSection from "./pages/TVCourseSection";
import ServicesSelection from "./pages/ServicesSelection";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import ThemeCustomization from "./tutorDashboard/themes";
import ScrollTop from "./tutorDashboard/components/ScrollTop";
import MainLayout from "./layout/MainLayout";
import Loadable from "./tutorDashboard/components/Loadable";
import TutorRegistryType from "./pages/TutorRegistryType";

// render - dashboard
const TutorDashboard = Loadable(
  lazy(() => import("./tutorDashboard/pages/dashboard"))
);
// render - Admin dashboard
const AdminDashboard = Loadable(
  lazy(() => import("./adminDashboard/pages/dashboard"))
);
// render - Media
const AddCourse = Loadable(
  lazy(() => import("./tutorDashboard/pages/addCourse/addCourse"))
);
const AddVideo = Loadable(
  lazy(() => import("./tutorDashboard/pages/addVideo/addVideo"))
);
const ManageCourses = Loadable(
  lazy(() => import("./tutorDashboard/pages/manageCourses/manageCourses"))
);
// render - Media Admin
const AdminAddCourse = Loadable(
  lazy(() => import("./adminDashboard/pages/addCourse/addCourse"))
);
const AdminAddVideo = Loadable(
  lazy(() => import("./adminDashboard/pages/addVideo/addVideo"))
);
const AdminManageCourses = Loadable(
  lazy(() => import("./tutorDashboard/pages/manageCourses/manageCourses"))
);
// render - subsriptions
const RecievedPayments = Loadable(
  lazy(() => import("./tutorDashboard/pages/recievedPayments/RecievedPayments"))
);
// render - subsriptions Admin
const AdminRecievedPayments = Loadable(
  lazy(() => import("./adminDashboard/pages/recievedPayments/RecievedPayments"))
);
// render - account
const Profile = Loadable(
  lazy(() => import("./tutorDashboard/pages/profile/profile"))
);
const Settings = Loadable(
  lazy(() => import("./tutorDashboard/pages/settings/settings"))
);
// render - support
const SupportTeam = Loadable(
  lazy(() => import("./tutorDashboard/pages/supportTeam/supportTeam"))
);
const FAQS = Loadable(lazy(() => import("./tutorDashboard/pages/FAQS/FAQS")));

function App() {
  return (
    <ThemeCustomization>
      <ScrollTop>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signIn" element={<SignIn />} />
          <Route path="/tutor-signUp" element={<SignUp type="tutor" />} />
          <Route path="/pricing" element={<TutorRegistryType />} />
          <Route
            path="/photo-videography-request"
            element={<SignUp type="studio" />}
          />
          <Route path="/signUp" element={<SignUp type="learner" />} />
          <Route path="/admin" element={<SignIn type="admin" />} />
          <Route path="/northino-tv" element={<NorthinoTV />} />
          <Route path="/our-mentors" element={<OurMentors />} />
          <Route path="/northino-services" element={<NorthinoServices />} />
          <Route path="/about-northino" element={<AboutUs />} />
          <Route element={<MainLayout />}>
            {/* Tutors Dashboard */}
            <Route path="/tutor-dashboard" element={<TutorDashboard />} />
            <Route path="/addCourse" element={<AddCourse />} />
            <Route path="/addVideo" element={<AddVideo />} />
            <Route path="/manageCourses" element={<ManageCourses />} />
            <Route path="/recievedPayments" element={<RecievedPayments />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/supportTeam" element={<SupportTeam />} />
            <Route path="/FAQS" element={<FAQS />} />
            {/* Admin Dashboard */}
            <Route path="/admin/dashboard" element={<AdminDashboard />} />
            <Route path="/admin/addCourse" element={<AdminAddCourse />} />
            <Route path="/admin/addVideo" element={<AdminAddVideo />} />
            <Route
              path="/admin/manageCourses"
              element={<AdminManageCourses />}
            />
            <Route
              path="/admin/recievedPayments"
              element={<AdminRecievedPayments />}
            />
          </Route>
          <Route
            path="/contact-us"
            element={
              <ContactUs
                pageTitle="Contact Us"
                pageSubTitle="Our Team are ready for you enquiries"
                pageType="contact"
                formTitle="Send us a Message"
              />
            }
          />

          <Route
            path="/subscribe"
            element={
              <ContactUs
                pageTitle="Subscribe"
                pageSubTitle="Get updates on Northino"
                pageType="subscribe"
                formTitle="Subscribe"
              />
            }
          />
          <Route
            path="/northino-tv/interviews"
            element={<TVCourseSection course="interviews" />}
          />
          <Route
            path="/northino-tv/learn-with-almuhandis"
            element={<TVCourseSection course="learn-with-almuhandis" />}
          />
          <Route
            path="/northino-tv/do-it-yourself"
            element={<TVCourseSection course="do-it-yourself" />}
          />
          <Route
            path="/northino-tv/business-management-training"
            element={<TVCourseSection course="business-management-training" />}
          />
          <Route
            path="/northino-tv/motivational-videos"
            element={<TVCourseSection course="motivational-videos" />}
          />
          <Route
            path="/northino-services/custom-software-development"
            element={<ServicesSelection service="custom-software" />}
          />
          <Route
            path="/northino-services/business-brandig-and-promotion"
            element={<ServicesSelection service="branding-and-promotion" />}
          />
          <Route
            path="/northino-services/get-mentor"
            element={<ServicesSelection service="mentor" />}
          />
          <Route
            path="/northino-services/custom-software-development/request-service-form"
            element={<ServicesSelection service="custom-software-form" />}
          />
          <Route
            path="/northino-services/business-brandig-and-promotion/request-service-form"
            element={
              <ServicesSelection service="branding-and-promotion-form" />
            }
          />
          <Route
            path="/getMentor-form"
            element={<ServicesSelection service="mentor-form" />}
          />
          <Route
            path="/northino-services/custom-software-development/previous-clients-projects"
            element={<ServicesSelection service="previous-clients-projects" />}
          />
          <Route
            path="/northino-services/custom-software-development/our-builtIn-projects"
            element={<ServicesSelection service="our-builtIn-projects" />}
          />
          <Route
            path="/northino-services/business-brandig-and-promotion/businesses-promoted"
            element={<ServicesSelection service="businesses-promoted" />}
          />
          <Route
            path="/northino-services/get-mentor/mentors-list"
            element={<ServicesSelection service="mentors-list" />}
          />
        </Routes>
      </ScrollTop>
    </ThemeCustomization>
  );
}
export default App;
