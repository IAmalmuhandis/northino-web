import "../../base/_typography.scss";
import "../../base/_utilities.scss";
import "../../layout/_grid.scss";
import Card from "../Card/Card2";

const VideoCard = (props) => {
  if (props.course === props.section_type) {
    return (
      <div>
        <Card
          url={props.url}
          cardTitle={props.title}
          cardDesc={props.description}
          type="video"
        />
        {/* <div className={classes.video__card__body}>
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
        </div> */}
      </div>
    );
  } else {
    return null;
  }
};
export default VideoCard;
