import classes from "./_heroSection.module.scss";
import SubHomeHeroSection from "./SubHomeHeroSection";
import "../../base/_utilities.scss";
import "../../layout/_grid.scss";
import "../../base/_typography.scss";
const HeroSection = (props) => {
  return (
    <section className={classes.section__about}>
      <div
        className={
          "u-center-text u-margin-buttom-big " +
          classes.header +
          " " +
          (props.pageNo === "1"
            ? classes.header__1
            : props.pageNo === "2"
            ? classes.header__2
            : props.pageNo === "3"
            ? classes.header__3
            : props.pageNo === "4"
            ? classes.header__4
            : props.pageNo === "5"
            ? classes.header__5
            : props.pageNo === "6"
            ? classes.header__6
            : props.pageNo === "7"
            ? classes.header__7
            : props.pageNo === "8"
            ? classes.header__8
            : props.pageNo === "9"
            ? classes.header__9
            : props.pageNo === "10"
            ? classes.header__10
            : props.pageNo === "11"
            ? classes.header__11
            : props.pageNo === "12"
            ? classes.header__12
            : props.pageNo === "13"
            ? classes.header__13
            : classes.header__14)
        }
      >
        <h2 className="heading-primary--main">{props.mainHeader}</h2>
        <h4 className="heading-primary--sub">{props.subHeader}</h4>
      </div>
      {props.mainHeader === "northino" ? <SubHomeHeroSection /> : ""}
    </section>
  );
};
export default HeroSection;
