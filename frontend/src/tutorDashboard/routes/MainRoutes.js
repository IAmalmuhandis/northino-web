import { lazy } from "react";

// project import
import Loadable from "../components/Loadable";
import MainLayout from "../layout/MainLayout";

// render - dashboard
const DashboardDefault = Loadable(lazy(() => import("../pages/dashboard")));

// render - Media
const AddVideo = Loadable(lazy(() => import("../pages/addVideo/addVideo")));
const ManageVideo = Loadable(
  lazy(() => import("../pages/manageVideo/manageVideo"))
);
// render - subsriptions
const RecievedPayments = Loadable(
  lazy(() => import("../pages/recievedPayments/recievedPayments"))
);
// render - account
const Profile = Loadable(lazy(() => import("../pages/profile/profile")));
const Settings = Loadable(lazy(() => import("../pages/settings/settings")));
// render - support
const SupportTeam = Loadable(
  lazy(() => import("../pages/supportTeam/supportTeam"))
);
const FAQS = Loadable(lazy(() => import("../pages/FAQS/FAQS")));

// ==============================|| MAIN ROUTING ||============================== //

const MainRoutes = {
  path: "/tutor-dashboard",
  element: <MainLayout />,
  children: [
    {
      path: "/tutor-dashboard",
      element: <DashboardDefault />,
    },
    {
      path: "addVideo",
      element: <AddVideo />,
    },
    {
      path: "manageVideo",
      element: <ManageVideo />,
    },
    {
      path: "recievedPayments",
      element: <RecievedPayments />,
    },
    {
      path: "profile",
      element: <Profile />,
    },
    {
      path: "settings",
      element: <Settings />,
    },
    {
      path: "supportTeam",
      element: <SupportTeam />,
    },
    {
      path: "FAQS",
      element: <FAQS />,
    },
    {
      path: "tutor-dashboard",
      children: [
        {
          path: "tutor-dashboard",
          element: <DashboardDefault />,
        },
      ],
    },
  ],
};

export default MainRoutes;
