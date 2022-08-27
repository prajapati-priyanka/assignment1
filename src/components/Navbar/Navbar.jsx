import { HiOutlineMenu } from "react-icons/hi";
import { IoPersonAdd } from "react-icons/io5";
import { IoIosNotificationsOutline } from "react-icons/io";
import { BsSearch } from "react-icons/bs";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="nav-wrapper flex-container">
      <section className="nav-left flex-container">
        <HiOutlineMenu className="menu-bar lg-text" />
        <span className="flex-container">
          <button type="submit" className="btn-search">
            <BsSearch />
          </button>
          <input
            type="search"
            placeholder="Search here..."
            className="input-search"
          />
        </span>
      </section>
      <section className="nav-right flex-container">
        <span className="flex-container">
          <IoPersonAdd />
          <p>INVITE TEAM MEMBER</p>
        </span>
        <IoIosNotificationsOutline className="notify-btn" />
        <figure class="avatar-container">
          <img
            class="avatar avatar-xs-size image-responsive"
            src="https://lh3.googleusercontent.com/ogw/ADea4I4uUERI95xonyxzL3nGOOMdNrpjNtGEXURXLFL0=s32-c-mo"
            alt="lg-avatar"
          />
          <span class="badge-count">NEW</span>
          <span class="avatar-presence online"></span>
        </figure>
      </section>
    </nav>
  );
};

export { Navbar };
