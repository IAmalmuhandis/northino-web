import SignInForm from "../components/Form/SignInForm";
import Navigation from "../layout/Navigation";
const SignIn = (props) => {
  return (
    <div>
      {props.type !== "admin" ? <Navigation /> : ""}
      <SignInForm type={props.type} />
    </div>
  );
};
export default SignIn;
