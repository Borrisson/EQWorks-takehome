import {
  ProSidebar,
  Menu,
  MenuItem,
  SidebarHeader,
  SidebarFooter,
  SidebarContent,
} from "react-pro-sidebar";

import { useState, useEffect } from "react";
export default function SideBar({ setView, DASHBOARD, MAP, CHART }) {
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
    <ProSidebar collapsed={collapse} className="sidebar">
      <SidebarHeader className="sidebar sidebar-header">
        {" "}
        <MenuItem className="sidebar item">
          <img alt="logo" src="logo-eq-works-square-blue.png"></img>
        </MenuItem>
      </SidebarHeader>
      <SidebarContent className="sidebar sidebar-body">
        <Menu className="sidebar sidebar-menu">
          <MenuItem className="sidebar item" onClick={() => setView(DASHBOARD)}>
            Dashboard
          </MenuItem>
          <MenuItem className="sidebar item" onClick={() => setView(MAP)}>
            Map
          </MenuItem>
          <MenuItem className="sidebar item" onClick={() => setView(CHART)}>
            Chart
          </MenuItem>
        </Menu>
      </SidebarContent>
      <SidebarFooter>
        <MenuItem className="sidebar sidebar-footer">
          Created by Luc Borris
        </MenuItem>
      </SidebarFooter>
    </ProSidebar>
  );
}
