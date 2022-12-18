import { Link, NavLink } from "react-router-dom";
import "./index.scss";
import LogoS from "../../../assets/images/logo-s.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faHome, faUser } from '@fortawesome/free-solid-svg-icons';

const Sidebar = () => {
  return (
    <>
      <div className="nav-bar">
        <Link className="logo" to="/">
          <img src={LogoS} alt="logo" />
        </Link>
        <nav>
          <NavLink exaact="true" activeclassname="active" to="/">
            <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
          </NavLink>
          <NavLink exaact="true" activeclassname="active" className="about-link" to="/about">
            <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
          </NavLink>
          <NavLink exaact="true" activeclassname="active" className="contact-link" to="/contact">
            <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
          </NavLink>
        </nav>
        <ul>
          <li>
            <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/yorcun-sarmis/">
              <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e" />
              </a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Sidebar;
