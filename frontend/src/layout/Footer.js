import LogoImg from "../img/northinoLogo.png";

import classes from "./_footer.module.scss";
import Typography from "@mui/material/Typography";

import { Link } from "react-router-dom";
import "../base/_utilities.scss";
import "../layout/_grid.scss";
import SocialMediaHandles from "../components/SocialMedia/SocialMediaHandles";
function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://northino.com/">
        northino
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}
const Footer = () => {
  return (
    <footer className={classes.footer}>
      <div className={classes.footer__logo_box}>
        <img src={LogoImg} alt="logo" className={classes.footer__logo} />
      </div>
      <div className="row">
        <div className="col-1-of-3 u-center-text">
          <div className={classes.footer__navigation}>
            <ul className={classes.footer__list}>
              <li className={classes.footer__item}>
                <Link to="/" className={classes.footer__link}>
                  Home
                </Link>
              </li>

              <li className={classes.footer__item}>
                <Link to="/about-northino" className={classes.footer__link}>
                  About Us
                </Link>
              </li>
              <li className={classes.footer__item}>
                <Link to="/contact-us" className={classes.footer__link}>
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-1-of-3 u-center-text">
          <div className={classes.footer__Mediahandles}>
            <SocialMediaHandles />
          </div>
        </div>
        <div className="col-1-of-3 u-center-text">
          <p className={classes.footer__copyright}>
            Built by{" "}
            <Link to="/about-northino" className={classes.footer__link}>
              Northino Web Dev Team
            </Link>
            .<br />
            <Copyright sx={{ mt: 5 }} />
          </p>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
