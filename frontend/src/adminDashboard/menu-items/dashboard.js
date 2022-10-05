// assets
import { ProfileOutlined } from "@ant-design/icons";
// icons
const icons = {
  ProfileOutlined,
};
// ==============================|| MENU ITEMS - DASHBOARD ||============================== //
const dashboard = {
  id: "group-dashboard",
  title: "Navigation",
  type: "group",
  children: [
    {
      id: "dashboard",
      title: "Dashboard",
      type: "item",
      url: "/admin/dashboard",
      icon: icons.ProfileOutlined,
      breadcrumbs: false,
    },
  ],
};
export default dashboard;
