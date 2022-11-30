import React from "react";
import { NavElements } from "../../Utitlities/utility";
import { Link } from "react-router-dom";
import "../NavBar/NavBar.css";

export const NavBar = () => {
  const [showNavbar, setShowNavbar] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showContent, setShowContent] = useState<string>("");

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <div className="NavBar_container">
      {NavElements.map((item, index) => {
        return (
          <nav className="nav">
            <div className="container">
              <div className="menu-icon" onClick={handleShowNavbar}>
                <GiHamburgerMenu />
              </div>
              <ul>
                <li>{item}</li>
              </ul>
            </div>
          </nav>
        );
      })}
    </div>
  );
};

export default NavBar;
