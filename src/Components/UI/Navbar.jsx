import { React, useState } from "react";
import { BiMenu } from "react-icons/bi";
import { BsQuestionCircle } from "react-icons/bs";
import profile from "./svg_img/hacker.png";
import { MdSettings } from "react-icons/md";
import { FaBars } from "react-icons/fa";
import contact_logo from "./svg_img/contacts_2022_48dp.png";
import SideBar from "./SideBar";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(true);
  const toggle = () => setIsOpen(!isOpen);
  return (
    <div>
      <header>
        <nav class="navbar navbar-expand-md shadow-none p-3">
          <div className="container-fluid">
            <FaBars onClick={toggle} style={{ cursor: "pointer" }} />
            <a className="navbar-brand" href="/">
              <img
                src={contact_logo}
                alt="Logo"
                width="40"
                height="40"
                className="d-inline-block align-text-top ms-3"
              />
              <span className="contact-title">Contacts</span>
            </a>

            <div className="flex-grow-1 mx-5">
              <div className="input-section">
                <form role="search">
                  <input
                    className="form-control me-2 search-input"
                    type="search"
                    placeholder="Search"
                    aria-label="Search"
                    autoComplete="off"
                  />
                </form>
              </div>
            </div>

            <div class="navbar-collapse collapse justify-content-end">
              <ul className="navbar-nav ">
                <div className="me-3">
                  <li class="nav-item dropdown">
                    <a className="nav-link dots-button" href="#">
                      <BsQuestionCircle />
                    </a>
                    <div class="dropdown-content">
                      <a href="#" class="dropdown-item">
                        Send feedback
                      </a>
                      <a href="#" class="dropdown-item">
                        Help
                      </a>
                      <hr class="dropdown-divider" />
                      <a href="#" class="dropdown-item">
                        Training
                      </a>
                    </div>
                  </li>

                  <li className="nav-item dropdown">
                    <a className="nav-link dots-button" href="#">
                      <MdSettings />
                    </a>
                    <div class="dropdown-content">
                      <a href="#" class="dropdown-item">
                        Undo Changes
                      </a>
                      <a href="#" class="dropdown-item">
                        More Settings
                      </a>
                    </div>
                  </li>
                </div>

                <li className="nav-item">
                  <a
                    className="nav-link dots-button"
                    href="https://www.google.co.in/intl/en/about/products?tab=Ch"
                  >
                    <BiMenu />
                  </a>
                </li>

                <li className="nav-item">
                  <a className="nav-link" href="#">
                    <img src={profile} alt="avatar" width="24" height="auto" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
      <SideBar isOpen={isOpen} setIsOpen={setIsOpen} />
    </div>
  );
}
