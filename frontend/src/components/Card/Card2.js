import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import classes from "./_card2.module.scss";
import { Link } from "react-router-dom";
export default function Card2(props) {
  const imgUrl = "../../../img/";
  return (
    <Card className={classes.card} sx={{ maxWidth: 345 }}>
      {props.type !== "video" ? (
        <img
          className={classes.card__img}
          src={imgUrl + props.cardImage}
          alt="cover"
          height="290"
        />
      ) : (
        <iframe
          className={classes.card__iframe}
          src={props.url}
          title={props.title}
          frameBorder="1"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      )}

      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {props.cardTitle}
        </Typography>
        {props.type === "mentor" ? (
          <Typography gutterBottom variant="h6" component="div">
            {props.EOE}
          </Typography>
        ) : (
          ""
        )}
        <Typography variant="body2" color="text.secondary">
          {props.cardDesc}
        </Typography>
      </CardContent>
      <CardActions>
        <Link
          className={classes.card__link}
          to={
            props.cardName === "built-for-clients" &&
            props.btnText === "Request"
              ? "/northino-services/custom-software-development/request-service-form"
              : props.cardName === "promotion-and-branding" &&
                props.btnText === "Request"
              ? "/northino-services/business-brandig-and-promotion/request-service-form"
              : props.cardName === "mentors" && props.btnText === "Request"
              ? "/northino-services/get-mentor/request-service-form"
              : props.cardName === "built-for-clients" && props.cardNo === "1"
              ? "/northino-services/custom-software-development/previous-clients-projects"
              : props.cardName === "built-for-clients" && props.cardNo === "2"
              ? "/northino-services/custom-software-development/our-builtIn-projects"
              : props.cardName === "promotion-and-branding" &&
                props.cardNo === "1"
              ? "/northino-services/business-brandig-and-promotion/businesses-promoted"
              : props.cardName === "mentors" && props.cardNo === "1"
              ? "/northino-services/get-mentor/mentors-list"
              : props.type === "mentor"
              ? "/getMentor-form"
              : "/"
          }
        >
          {props.btnText}
        </Link>
        <Link
          className={classes.card__link}
          to={props.type !== "video" ? "/northino-services" : "/northino-tv"}
        >
          Back
        </Link>
      </CardActions>
    </Card>
  );
}
