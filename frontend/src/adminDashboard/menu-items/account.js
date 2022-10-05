// assets
import {
SettingOutlined,
UserOutlined
} from '@ant-design/icons';

// icons
const icons = {
  SettingOutlined,
  UserOutlined,
};

// ==============================|| MENU ITEMS - UTILITIES ||============================== //

const account = {
  id: "account",
  title: "Account Settings",
  type: "group",
  children: [
    {
      id: "profile",
      title: "Profile",
      type: "item",
      url: "/profile",
      icon: icons.UserOutlined,
    },
    {
      id: "settings",
      title: "Settings",
      type: "item",
      url: "/settings",
      icon: icons.SettingOutlined,
    },
  ],
};

export default account;
