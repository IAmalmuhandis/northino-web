// assets
import { TeamOutlined, UserAddOutlined } from "@ant-design/icons";

// icons
const icons = {
  UserAddOutlined,
  TeamOutlined,
};

// ==============================|| MENU ITEMS - UTILITIES ||============================== //

const members = {
  id: "members",
  title: "Members",
  type: "group",
  children: [
    {
      id: "registeredMembers",
      title: "Registered Members",
      type: "item",
      url: "/admin/registeredMembers",
      icon: icons.TeamOutlined,
    },
    {
      id: "subscribers",
      title: "Subscribers",
      type: "item",
      url: "/admin/subscribers",
      icon: icons.UserAddOutlined,
    },
  ],
};

export default members;
