import { NavLink, Outlet } from "react-router-dom";
import logo from "../UI/svg_img/contacts_2022_48dp.png";
import contact_icon from "../UI/svg_img/contacts_2022_48dp.png";
import { FaBars, FaTimesCircle } from "react-icons/fa";
import { MdContacts, MdMessage } from "react-icons/md";
import { BiImport, BiMerge, BiTrash } from "react-icons/bi";
import { BiPlus } from "react-icons/bi";
import { AnimatePresence, motion } from "framer-motion";
import SidebarMenu from "./SideBarMenu";
import { useEffect } from "react";

const routes = [
  {
    path: "/contacts",
    name: "Contacts",
    icon: <MdContacts />,
    count: "100",
  },
  {
    path: "/frequents",
    name: "Frequent",
    icon: <FaTimesCircle />,
  },
  {
    path: "/otherContacts",
    name: "OtherContacts",
    icon: <MdMessage />,
  },
  {
    path: "/mergeorFix",
    name: "Merge&Fix",
    icon: <BiMerge />,
  },

  {
    path: "/import",
    name: "Import",
    icon: <BiImport />,
  },
  {
    path: "/trash",
    name: "Trash",
    icon: <BiTrash />,
  },
];

const SideBar = ({ children, isOpen, setIsOpen }) => {
  // const inputAnimation = {
  //   hidden: {
  //     width: 0,
  //     padding: 0,
  //     transition: {
  //       duration: 0.2,
  //     },
  //   },
  //   show: {
  //     width: "140px",
  //     padding: "5px 15px",
  //     transition: {
  //       duration: 0.2,
  //     },
  //   },
  // };

  const showAnimation = {
    hidden: {
      width: 0,
      opacity: 0,
      transition: {
        duration: 0.5,
      },
    },
    show: {
      opacity: 1,
      width: "auto",
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <>
      <div className="main-container">
        <motion.div
          animate={{
            width: isOpen ? "280px" : "0px",
            transition: {
              duration: 0.5,
              type: "just",
              damping: 10,
            },
          }}
          className={`sidebar `}
        >
          <div className="top_section">
            <AnimatePresence>
              {isOpen && (
                <>
                  {window.innerWidth <= 1023 ? (
                    <div>
                      <img
                        src={contact_icon}
                        alt="Logo"
                        width="40"
                        height="40"
                        className="d-inline-block align-text-top"
                      />
                      <span className="side-contact-title">Contacts</span>
                    </div>
                  ) : (
                    <motion.button
                      variants={showAnimation}
                      initial="hidden"
                      animate="show"
                      exit="hidden"
                      className="createbtn btn btn-primary btn-sm text-capitalize"
                    >
                      <BiPlus /> Create contact
                    </motion.button>
                  )}
                </>
              )}
            </AnimatePresence>
          </div>

          <section className="routes">
            {routes.map((route, index) => {
              if (route.subRoutes) {
                return (
                  <SidebarMenu
                    setIsOpen={setIsOpen}
                    route={route}
                    showAnimation={showAnimation}
                    isOpen={isOpen}
                  />
                );
              }

              return (
                <NavLink
                  to={route.path}
                  key={index}
                  className="link"
                  activeClassName="active"
                >
                  <div className="icon">{route.icon}</div>
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        variants={showAnimation}
                        initial="hidden"
                        animate="show"
                        exit="hidden"
                        className="link_text"
                      >
                        {route.name}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </NavLink>
              );
            })}
          </section>
        </motion.div>
        <main>{children}</main>
        <div id="detail">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default SideBar;
