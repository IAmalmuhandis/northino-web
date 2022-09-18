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
              Start Learning
            </Link>
          </li>
          <li className={classes.navigation__item}>
            <Link to="/northino-services" className={classes.navigation__link}>
              IT Services
            </Link>
          </li>

          <li className={classes.navigation__item}>
            <Link to="/our-mentors" className={classes.navigation__link}>
              Get a Mentor
            </Link>
          </li>
          <li className={classes.navigation__item}>
            <Link to="/pricing" className={classes.navigation__link}>
              Become a Tutor
            </Link>
          </li>
          <li className={classes.navigation__item}>
            <Link to="/about-northino" className={classes.navigation__link}>
              About
            </Link>
          </li>
          <li className={classes.navigation__item}>
            <Link to="/contact-us" className={classes.navigation__link}>
              Contact Us
            </Link>
          </li>
          <li className={classes.navigation__item}>
            <Button
              className={classes.navigation__btn}
              btnText="SignIn"
              redirectTo="/signIn"
            />
            &nbsp;
            <Button
              className={classes.navigation__btn}
              btnText="SignUp"
              redirectTo="/signUp"
            />
          </li>
        </ul>
      </nav>
    </div>
  );
};
export default Navigation;
