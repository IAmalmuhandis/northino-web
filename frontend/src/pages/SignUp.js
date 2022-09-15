import SignUpForm from "../components/Form/SignUpForm";
import TutorSignUpForm from "../components/Form/TutorSignUpForm";
import Navigation from "../layout/Navigation";
const SignUp = (props) => {
  return (
    <div>
      <Navigation />
      {props.type !== "tutor" ? <SignUpForm /> : <TutorSignUpForm />}
    </div>
  );
};
export default SignUp;
