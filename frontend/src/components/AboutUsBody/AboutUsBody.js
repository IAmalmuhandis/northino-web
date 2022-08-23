import classes from "./_aboutUsBody.module.scss";
import CEOImg from "../../img/anga.jpg";
import CTIOImg from "../../img/sanee.jpg";
import COOImg from "../../img/kalsom.jpg";
import "../../layout/_grid.scss";
import "../../base/_utilities.scss";
import "../../base/_typography.scss";
const AboutUsBody = () => {
  return (
    <div className={classes.aboutUsBody}>
      <div className={"row u-margin-top-negative-small "}>
        <div className="col-1-of-2 u-center-text">
          <img src={CEOImg} alt="CEO" className={classes.ceo__photo} />
          <h4>CEO ~ Abubakar Muhammad Umar (Almuhandis)</h4>
        </div>
        <div className="col-1-of-2 u-center-text">
          <h3 className="heading-tertiary u-margin-bottom-small ">
            How the journey started
          </h3>
          <p className="paragraph">
            Where I came from, One of the major problem we are facing is lack of
            awareness and development on digital skills which led to lack of job
            opportunities and scalability. Having came from such community where
            i find it so difficult to learn about digital skills in an easy way
            due to the unavailability of digital training and lack of proper
            english communication skills. In 2020 during the covid 19 pandemic,
            i started thinking of ways to aquire a form of digital skill. So i
            started surfing the internet using the youtube platform to get
            tutorials online but unfortunately I couldn’t find the contents i
            need which are tutorials delivered in hausa language. Since then i
            kept thinking of possible ways i can come up with a solution to this
            problem then I started delivering tutorials of digital skills in
            Hausa language to my colleagues in the university. And then I
            designed NORTHINO TECH.
          </p>
        </div>
      </div>
      <div className="row u-center-text">
        <h3 className="heading-tertiary u-margin-bottom-small ">
          Welcome to Northino Tech
        </h3>
        <p className="paragraph">
          The advanced Technology Company paving the way to the future. We are a
          team of like-minded and determined individuals, all sharing a vision
          for success. We believe that our sophisticated technology has the
          potential to become an industry sensation.
        </p>
      </div>
      <div className="row">
        <div className="col-1-of-2 u-center-text">
          <img src={CTIOImg} alt="CTIO" className={classes.ctio__photo} />
          <h4>CTIO ~ Muhammad Sani</h4>
        </div>
        <div className="col-1-of-2 u-center-text">
          <h3
            className={
              "heading-tertiary u-margin-bottom-small " +
              classes.section__about__ourMission
            }
          >
            Our Mission
          </h3>
          <p className={"paragraph " + classes.section__about__ourMission}>
            Our company’s mission is to bring more innovations to humanity and
            also bring our community up to date on how the world of technology
            is expanding and how we can bring achievements to ourselves and our
            community using technology.
          </p>
          <h3
            className={
              "heading-tertiary u-margin-bottom-small " +
              classes.section__about__ourMission
            }
          >
            Our Vission
          </h3>
          <p className={"paragraph " + classes.section__about__ourMission}>
            We project ourselves in the future to be among one of the biggest
            and successful companies in Nigeria and the world at large.
          </p>
        </div>
      </div>
      <div className="row">
        <div className="col-1-of-2 u-center-text">
          <img src={COOImg} alt="COO" className={classes.coo__photo} />
          <h4>COO ~ Ibrahim Bala (Kallsom)</h4>
        </div>
        <div className="col-1-of-2 u-center-text">
          <h3
            className={
              "heading-tertiary u-margin-bottom-small " +
              classes.section__about__ourMission
            }
          >
            Why Northino Tech
          </h3>
          <p className={"paragraph " + classes.section__about__ourMission}>
            We deliver qualitative, reliable and secured projects in an
            efficient way. <br />
            We make recommendation on the best gadget to buy for your specific
            need. <br />
            We make tutorials, reviews and interviews for you to get more
            experience on IT and other related fields.
          </p>
        </div>
      </div>
    </div>
  );
};
export default AboutUsBody;
