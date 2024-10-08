import styles from "./sidebar.module.scss";

const sidebarItems = [
  {
    icon: "/home-icon.svg",
    label: "Home",
    link: "#",
  },
  {
    icon: "/events.svg",
    label: "Events",
    link: "#",
  },
  {
    icon: "/orders.svg",
    label: "Orders",
    link: "#",
  },
  {
    icon: "/settings.svg",
    label: "Settings",
    link: "#",
  },
];

const profileItems = [
  {
    title: "My Accounts",
    image: "./profile.svg",
    alt: "My Accounts",
  },
  {
    title: "Privacy Policy",
    image: "./privacy.svg",
    alt: "Privacy Policy",
  },
  {
    title: "Share Feedback",
    image: "./feedback.svg",
    alt: "Share Feedback",
  },
  {
    title: "Sign Out",
    image: "./signOut.svg",
    alt: "Sign Out",
  },
];

export default function Sidebar(props) {
  const {
    isSidebarOpen,
    isMobile,
    isPopupVisible,
    togglePopup,
    toggleSidebar,
  } = props;

  return (
    <>
      {isMobile && (
        <>
          <div className={styles.hamburgerMenu} onClick={toggleSidebar} aria-label="Toggle sidebar">
            <img src="/hamburger.svg" alt="Menu" />
          </div>
          <div
            className={
              isMobile && !isSidebarOpen ? styles.viewProfile : styles.collapsedProfile
            }
            onClick={togglePopup}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => e.key === 'Enter' && togglePopup()} // Handle keyboard navigation
            aria-label="User profile"
          >
            <img src="/profile.svg" alt="User profile" />
          </div>
        </>
      )}

      <nav
        className={`${styles.sidebar} ${
          isMobile && !isSidebarOpen ? styles.close : styles.visible
        }`}
        aria-label="Sidebar navigation"
      >
        <h1>Neo UI</h1>
        <div className={styles.sidebarContent}>
          {sidebarItems.map((item, index) => (
            <div key={index} className={styles.icons}>
              <img src={item.icon} alt={`${item.label} icon`} />
              <a href={item.link} aria-label={item.label}>{item.label}</a>
            </div>
          ))}
        </div>
        <div className={styles.upcomingEvents}>
          <h2>Upcoming Events</h2>
          <ul>
            <li>Bear Hug: Live in Concert</li>
            <li>Six Fingers — DJ Set</li>
            <li>We all look the same</li>
            <li>Wikking people</li>
          </ul>
        </div>

        <div className={styles.profile} onClick={togglePopup} role="button" tabIndex={0} onKeyDown={(e) => e.key === 'Enter' && togglePopup()}>
          <img src="/profile.svg" alt="User profile" />
          <div className={styles.info}>
            <p>Erica</p>
            <p>erica@example.com</p>
          </div>
        </div>
      </nav>

      {isPopupVisible && (
        <div className={isMobile && !isSidebarOpen ? styles.popup : styles.sidebarPopup} role="dialog" aria-modal="true" aria-labelledby="popup-title">
          <ul>
            {profileItems.map((item, index) => (
              <li key={index}>
                {item.image && <img src={item.image} alt={item.alt} />}
                <span>{item.title}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
}
