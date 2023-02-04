import classes2 from "./_composition.module.scss";
import btnClasses from "../Button/_button.module.scss";
import "../../base/_utilities.scss";
import "../../layout/_grid.scss";
import "../../base/_typography.scss";
import NorthinTechImg from "../../img/teaching.jpg";
import NorthinTvImg from "../../img/northinoTV.jpg";
import NorthinStoreImg from "../../img/northinoTVBg.png";
import classes from "./_heroSection.module.scss";
import { Link } from "react-router-dom";
const SubHomeHeroSection = () => {
  return (
    <div className={"row " + classes.xSpace}>
      <div className="col-1-of-2">
        <h3 className="heading-tertiary u-margin-bottom-small ">
          Welcome to Northino
        </h3>
        <p className="paragraph">
          {/* Welcome to Northino, the advanced E-learning platform paving the way */}
          {/* to the future. We are a team of like-minded and determined */}
          {/* individuals, all sharing a vision for success. We believe that our */}
          {/* sophisticated technology has the potential to become an industry */}
          {/* sensation. Would you like to find out more? Explore our website today. */}
          Welcome to Northino<br /> An E-learning platform paving the way to the future. We are 
          Providing tech-focused video contents in Hausa Language and One on One Mentorship feature, Allowing youths to have access digital
          skills and get access to digital jobs.
        </p>
        <h3
          className={
            "heading-tertiary u-margin-bottom-small " +
            classes.section__about__ourMission
          }
        >
          Our Mission
        </h3>
        <p className={"paragraph " + classes.section__about__ourMission}>
          Our company’s mission is to bridge the gap between people with digital
          literacy and illiteracy, therefore equip you with digital skills in an
          easy way using our native language which is hausa language.
        </p>
        <Link to="/about-northino" className={btnClasses.btn__text}>
          Learn more &rarr;
        </Link>
      </div>
      <div className="col-1-of-2">
        <div className={classes2.composition}>
          <img
            src={NorthinTechImg}
            alt="Tech"
            className={
              classes2.composition__photo +
              " " +
              classes2.composition__photo__p1
            }
          />
          <img
            src={NorthinStoreImg}
            alt="TV"
            className={
              classes2.composition__photo +
              " " +
              classes2.composition__photo__p2
            }
          />
          <img
            src={NorthinTvImg}
            alt="Store"
            className={
              classes2.composition__photo +
              " " +
              classes2.composition__photo__p3
            }
          />
        </div>
      </div>
    </div>
  );
};
export default SubHomeHeroSection;
