import PhotographyRequestForm from "../components/Form/PhotographyRequestForm";
import TutorSignUpForm from "../components/Form/TutorSignUpForm";
import Navigation from "../layout/Navigation";
import SignUpForm from "../components/Form/SignUpForm";
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
