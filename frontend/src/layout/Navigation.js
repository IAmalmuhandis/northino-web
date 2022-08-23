import classes from "./_navigation.module.scss";
import { Link } from "react-router-dom";
import Logo from "../components/Logo/Logo";
import Button from "../components/Button/Button";
const Navigation = () => {
  return (
    <div className={classes.navigation}>
      <Logo />
      <input
        type="checkbox"
        className={classes.navigation__checkbox}
        id="navi-toggle"
      />

      <label htmlFor="navi-toggle" className={classes.navigation__button}>
        <span className={classes.navigation__icon}>&nbsp;</span>
      </label>
      <div className={classes.navigation__background}>&nbsp;</div>
      <nav className={classes.navigation__nav}>
        <ul className={classes.navigation__list}>
          <li className={classes.navigation__item}>
            <Link to="/" className={classes.navigation__link}>
              Home
            </Link>
          </li>
          <li className={classes.navigation__item}>
            <Link to="/northino-tv" className={classes.navigation__link}>
              Northino TV
            </Link>
          </li>
          <li className={classes.navigation__item}>
            <Link to="/northino-store" className={classes.navigation__link}>
              Northino Store
            </Link>
          </li>
          <li className={classes.navigation__item}>
            <Link to="/northino-services" className={classes.navigation__link}>
              Services
            </Link>
          </li>

          <li className={classes.navigation__item}>
            <Link to="/about-northino" className={classes.navigation__link}>
              About Us
            </Link>
          </li>
          <li className={classes.navigation__item}>
            <Link to="/contact-us" className={classes.navigation__link}>
              Contact Us
            </Link>
          </li>
          <li
            className={classes.navigation__item + " " + classes.navigation__btn}
          >
            <Button btnText="Subscribe" redirectTo="/subscribe" />
          </li>
        </ul>
      </nav>
    </div>
  );
};
export default Navigation;
