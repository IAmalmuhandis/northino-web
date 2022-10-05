// assets
import {
  PlusCircleFilled,
  UploadOutlined,
  FolderOpenOutlined,
} from "@ant-design/icons";

// icons
const icons = {
  UploadOutlined,
  FolderOpenOutlined,
  PlusCircleFilled,
};

// ==============================|| MENU ITEMS - UTILITIES ||============================== //

const account = {
  id: "media",
  title: "Media Management",
  type: "group",
  children: [
    {
      id: "addVideo",
      title: "Add Youtube Video",
      type: "item",
      url: "/admin/addVideo",
      icon: icons.PlusCircleFilled,
    },
    {
      id: "addCourse",
      title: "Add Course",
      type: "item",
      url: "/admin/addCourse",
      icon: icons.UploadOutlined,
    },
    {
      id: "ManageCourses",
      title: "Manage Courses",
      type: "item",
      url: "/admin/manageCourses",
      icon: icons.FolderOpenOutlined,
    },
  ],
};

export default account;
