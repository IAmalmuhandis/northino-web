import { Routes, Route } from "react-router-dom";
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

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/signIn" element={<SignIn />} />
      <Route path="/tutor-signUp" element={<SignUp type="tutor" />} />
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
        element={<ServicesSelection service="branding-and-promotion-form" />}
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
  );
}

export default App;
