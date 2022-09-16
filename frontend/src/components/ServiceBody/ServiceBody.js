import Card2 from "../Card/Card2";
import RequestServiceForm from "../Form/RequestServiceForm";
import RecordListContainer from "../RecordListContainer/RecordListContainer";
const ServiceBody = (props) => {
  const cardName =
    props.service === "custom-software"
      ? "built-for-clients"
      : props.service === "branding-and-promotion"
      ? "promotion-and-branding"
      : props.service === "mentor"
      ? "mentors"
      : "";
  const firstCardTitle =
    props.service === "custom-software"
      ? "Our clients projects"
      : props.service === "branding-and-promotion"
      ? "Businesses We have promoted"
      : props.service === "mentor"
      ? "Our Mentors"
      : "";
  const secondCardTitle = "What we have built";
  const thirdCardTitle = "Request for service";
  const firstCardDesc =
    props.service === "custom-software"
      ? "View our previous projects we've for our clients"
      : props.service === "branding-and-promotion"
      ? "View the businesses we have helped promote their business to a professional standard"
      : props.service === "mentor"
      ? "Check out our well experienced Mentors that we have available"
      : "";
  const secondCardDesc =
    "This are some of the company's softwares built for everyone to use";
  const thirdCardDesc =
    props.service === "custom-software"
      ? "Please Fill in the form below with accurate information that will helps us know the scope of your business and we can bring automation to it"
      : props.service === "branding-and-promotion"
      ? "Please Fill in the form below with accurate information that will helps us understand your business"
      : props.service === "mentor"
      ? "Please Fill in the form below with accurate information that will helps us connect you with nearest and right mentor for you."
      : "";

  return (
    <div className="container">
      {props.service === "previous-clients-projects" ||
      props.service === "our-builtIn-projects" ||
      props.service === "businesses-promoted" ||
      props.service === "mentors-list" ? (
        <div className="row">
          <RecordListContainer serviceType={props.service} />
        </div>
      ) : props.service === "branding-and-promotion-form" ||
        props.service === "custom-software-form" ? (
        <div className="row">
          <RequestServiceForm serviceType={props.service} />
        </div>
      ) : props.service === "custom-software" ? (
        <div>
          <div className="row ">
            <div className="col-1-of-2">
              <Card2
                cardName={cardName}
                imgAlt="view"
                cardTitle={firstCardTitle}
                cardDesc={firstCardDesc}
                btnText="view"
                cardImage="northinoTech.png"
                cardNo="1"
              />
            </div>
            <div className="col-1-of-2">
              <Card2
                cardName={cardName}
                imgAlt="view"
                cardTitle={secondCardTitle}
                cardDesc={secondCardDesc}
                btnText="view"
                cardImage="codes.jpg"
                cardNo="2"
              />
            </div>
          </div>
          <div className="row">
            <div className="col-1-of-2">
              <Card2
                cardName={cardName}
                imgAlt="view"
                cardTitle={thirdCardTitle}
                cardDesc={thirdCardDesc}
                btnText="Request"
                cardImage="northinoLogo.png"
              />
            </div>
          </div>
        </div>
      ) : (
        <div className="row ">
          <div className="col-1-of-2">
            <Card2
              cardName={cardName}
              imgAlt="view"
              cardTitle={firstCardTitle}
              cardDesc={firstCardDesc}
              btnText="view"
              cardNo="1"
              cardImage="northinoLogo.png"
            />
          </div>
          <div className="col-1-of-2">
            <Card2
              cardName={cardName}
              imgAlt="view"
              cardTitle={thirdCardTitle}
              cardDesc={thirdCardDesc}
              btnText="Request"
              cardImage="social-media.jpg"
            />
          </div>
        </div>
      )}
    </div>
  );
};
export default ServiceBody;
