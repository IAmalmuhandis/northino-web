// assets
import { UploadOutlined, FolderOpenOutlined } from "@ant-design/icons";

// icons
const icons = {
  UploadOutlined,
  FolderOpenOutlined,
};

// ==============================|| MENU ITEMS - UTILITIES ||============================== //

const account = {
  id: "media",
  title: "Media Management",
  type: "group",
  children: [
    {
      id: "addVideo",
      title: "Add Video",
      type: "item",
      url: "/addVideo",
      icon: icons.UploadOutlined,
    },
    {
      id: "ManageCourses",
      title: "Manage Courses",
      type: "item",
      url: "/manageVideo",
      icon: icons.FolderOpenOutlined,
    },
  ],
};

export default account;
