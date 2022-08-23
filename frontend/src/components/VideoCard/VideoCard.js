import classes from "./_videoCard.module.scss";
import "../../base/_typography.scss";
import "../../base/_utilities.scss";
import "../../layout/_grid.scss";
import { Link } from "react-router-dom";
const VideoCard = (props) => {
  if (props.course === props.section_type) {
    return (
      <div className={classes.video__card}>
        <iframe
          className={classes.video__card_iframe}
          src={props.url}
          title={props.title}
          frameBorder="1"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
        <div className={classes.video__card__body}>
          <h3
            className={
              "heading-tertiary u-margin-bottom-small u-center-text  " +
              classes.video__card__body_title
            }
          >
            {props.title}
          </h3>
          <p
            className={
              "paragraph u-center-text " + classes.video__card__body_description
            }
          >
            {props.description}
          </p>
          <a
            href="https://www.youtube.com/channel/UCpd0hoKzLdUfIfXyOossXuw"
            className={classes.video__card__body_btn}
          >
            Subscribe
          </a>
          <Link to="/northino-tv" className={classes.video__card__body_btn2}>
            Return to Category
          </Link>
        </div>
      </div>
    );
  } else {
    return null;
  }
};
export default VideoCard;
