import classes from "./_socialMediaHandles.module.scss";
import twitterLogo from "../../img/social-media-icons/twitter.png";
import facebookLogo from "../../img/social-media-icons/facebook.png";
import youtubeLogo from "../../img/social-media-icons/youtube.png";
import linkedinLogo from "../../img/social-media-icons/linkedin.png";
import instagramLogo from "../../img/social-media-icons/instagram.png";
// import gmailLogo from "../../img/social-media-icons/gmail.png";
import whatsappLogo from "../../img/social-media-icons/whatsapp.png";
import telegramLogo from "../../img/social-media-icons/telegram.png";
import "../../layout/_grid.scss";
import "../../base/_utilities.scss";
const SocialMediaHandles = () => {
  return (
    <div className={classes.media__handles + " u-center-text"}>
      <span className="">
        <a href="https://twitter.com/northino">
          <img
            src={twitterLogo}
            alt="twitter"
            className={classes.media__handles_icon}
          />
        </a>
      </span>
      <span className="">
        <a href="https://web.facebook.com/northino">
          <img
            src={facebookLogo}
            alt="facebook"
            className={classes.media__handles_icon}
          />
        </a>
      </span>
      <span className="">
        <a href="https://www.youtube.com/channel/UCpd0hoKzLdUfIfXyOossXuw">
          <img
            src={youtubeLogo}
            alt="youtube"
            className={classes.media__handles_icon}
          />
        </a>
      </span>
      <span className="">
        <a href="https://www.linkedin.com/in/northino-company-8a1881236/">
          <img
            src={linkedinLogo}
            alt="linkedIn"
            className={classes.media__handles_icon}
          />
        </a>
      </span>
      <span className="">
        <a href="https://www.instagram.com/northino_tech/">
          <img
            src={instagramLogo}
            alt="Instagram"
            className={classes.media__handles_icon}
          />
        </a>
      </span>
      <span className="">
        <a href="https://www.instagram.com/northino_tech/">
          <img
            src={whatsappLogo}
            alt="Whatsapp"
            className={classes.media__handles_icon}
          />
        </a>
      </span>
      <span className="">
        <a href="https://www.instagram.com/northino_tech/">
          <img
            src={telegramLogo}
            alt="Telegram"
            className={classes.media__handles_icon}
          />
        </a>
      </span>
    </div>
  );
};
export default SocialMediaHandles;
