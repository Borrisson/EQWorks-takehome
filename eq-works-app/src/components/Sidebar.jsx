import {
  ProSidebar,
  Menu,
  MenuItem,
  SidebarHeader,
  SidebarFooter,
  SidebarContent,
} from "react-pro-sidebar";

import { useState, useEffect } from "react";
export default function SideBar(props) {
  const [collapse, setCollapse] = useState(false);

  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  function handleCollapse() {
    if (windowSize.width <= 922 && !collapse) {
      setCollapse(true);
    }

    if (windowSize.width > 922 && collapse) {
      setCollapse(false);
    }
  }

  handleCollapse();
  return (
    <ProSidebar collapsed={collapse} className="sidebar" image="logo192.png">
      <SidebarHeader className="sidebar sidebar-header"></SidebarHeader>
      <SidebarContent className="sidebar sidebar-body">
        <Menu className="sidebar sidebar-menu">
          <MenuItem
            className="sidebar item"
            // onClick={() => handleShow("leaderboard")}
          >
            Dashboard
          </MenuItem>
        </Menu>
      </SidebarContent>
      <SidebarFooter>
        <MenuItem className="sidebar sidebar-footer">Copyright 2021</MenuItem>
      </SidebarFooter>
    </ProSidebar>
  );
}
