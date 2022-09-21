// assets
import {PlusCircleFilled, UploadOutlined, FolderOpenOutlined } from "@ant-design/icons";

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
      title: "Add Video",
      type: "item",
      url: "/addVideo",
      icon: icons.PlusCircleFilled,
    },
    {
      id: "addCourse",
      title: "Add Course",
      type: "item",
      url: "/addCourse",
      icon: icons.UploadOutlined,
    },
    {
      id: "ManageCourses",
      title: "Manage Courses",
      type: "item",
      url: "/manageCourses",
      icon: icons.FolderOpenOutlined,
    },
  ],
};

export default account;
