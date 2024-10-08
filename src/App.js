import Sidebar from "./Components/SideBar/Sidebar";
import Navbar from "./Components/NavBar/Navbar";
import DashboardContent from "./Components/DashboardContent/DashboardContent";
import styles from "./app.module.scss";
import { useEffect, useState } from "react";

export default function Layout() {
  const [isMobile, setIsMobile] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    handleResize();

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
    setIsPopupVisible(false);
  };

  const togglePopup = () => {
    console.log("Hello");
    setIsPopupVisible(!isPopupVisible);
  };
  return (
    <div className={`${styles.container}`}>
      <Sidebar
        toggleSidebar={toggleSidebar}
        togglePopup={togglePopup}
        isMobile={isMobile}
        isSidebarOpen={isSidebarOpen}
        isPopupVisible={isPopupVisible}
      />
      <div
        className={`${
          isSidebarOpen ? styles.navContainerMbl : styles.navContainer
        }`}
      >
        <Navbar />
        <DashboardContent />
      </div>
    </div>
  );
}
