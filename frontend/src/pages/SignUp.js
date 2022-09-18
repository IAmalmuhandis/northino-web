import PhotographyRequestForm from "../components/Form/PhotographyRequestForm";
// import SignUpForm from "../components/Form/SignUpForm";
import Register from "../pages/authentication/Register";
import TutorSignUpForm from "../components/Form/TutorSignUpForm";
import Navigation from "../layout/Navigation";
const SignUp = (props) => {
  return (
    <div>
      <Navigation />
      {props.type === "learner" ? (
        <Register />
      ) : props.type === "studio" ? (
        <PhotographyRequestForm />
      ) : (
        // <TutorSignUpForm />
        <Register type="tutor"/>
      )}
    </div>
  );
};
export default SignUp;
