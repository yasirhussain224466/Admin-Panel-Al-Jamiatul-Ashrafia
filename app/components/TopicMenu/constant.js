import React from "react";
import { UserOutlined } from "@ant-design/icons";
const sideBarRoutes = [
  {
    path: "/",
    key: 1,
    icon: <UserOutlined />,
    name: "Contact Us",
  },
  {
    path: "/online-fatwa",
    key: 2,
    icon: <UserOutlined />,
    name: "Online Fatwa",
  },
  {
    path: "/become-mureed",
    key: 3,
    icon: <UserOutlined />,
    name: "Become a Mureed",
  },
];

export default sideBarRoutes;
