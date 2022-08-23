import classes from "./_reviewBox.module.scss";
import img1 from "../../img/zaks.jpg";
import img2 from "../../img/majia.jpg";
import img3 from "../../img/zarah.jpg";
import "../../base/_typography.scss";
import "../../base/_utilities.scss";
const ReviewBox = (props) => {
  return (
    <div className={classes.story}>
      <figure className={classes.story__shape}>
        <img
          src={props.boxNo === "1" ? img1 : props.boxNo === "2" ? img2 : img3}
          alt="Our Client"
          className={classes.story__img}
        />
        ;
        <figcaption className={classes.story__caption}>{props.name}</figcaption>
      </figure>
      <div className={classes.story__text}>
        <h3 className="heading-tertiary u-margin-bottom-small">
          {props.title}
        </h3>
        <p>{props.review}</p>
      </div>
    </div>
  );
};
export default ReviewBox;
