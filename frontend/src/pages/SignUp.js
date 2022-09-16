import PhotographyRequestForm from "../components/Form/PhotographyRequestForm";
import SignUpForm from "../components/Form/SignUpForm";
import TutorSignUpForm from "../components/Form/TutorSignUpForm";
import Navigation from "../layout/Navigation";
const SignUp = (props) => {
  return (
    <div>
      <Navigation />
      {props.type === "learner" ? (
        <SignUpForm />
      ) : props.type === "studio" ? (
        <PhotographyRequestForm />
      ) : (
        <TutorSignUpForm />
      )}
    </div>
  );
};
export default SignUp;
