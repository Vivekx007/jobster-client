import { useState } from "react";
import Wrapper from "../assets/wrappers/RegisterPage";
import FormRow from "../components/FormRow";
import Alert from "../components/Alert";
import { useAppContext } from "../context/appContext";
import { useNavigate } from "react-router-dom";
// import login from "../assets/images/login.svg";
import Logo from "../components/Logo";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const initialState = {
  email: "",
  password: "",
};

const Login = () => {
  const [values, setValues] = useState(initialState);
  const [text, setText] = useState();
  const navigate = useNavigate();
  const { showAlert, displayAlert } = useAppContext();
  const isValidEmail = (email) => {
    // This is a simple email validation regex, you might want to use a more robust one
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  };
  const toggleMember = () => {
    // setValues({ ...values, isMember: !values.isMember });
    navigate("/buyer/SignUp");
  };

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
    // console.log(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const { email, password } = values;
    // if (!email) {
    //   displayAlert("Please Enter Email");
    //   toast.error("Please Enter Email");
    //   return;
    // } else if (!password) {
    //   displayAlert("Please Enter Email");
    //   toast.error("Please Enter Password");
    //   return;
    // }
    switch (true) {
      case !email && !password:
        displayAlert("Please fill out all fields");
        toast.error("Please fill out all fields");
        break;
      case !email:
        const emailAlertText = "Please Enter Email";

        displayAlert(emailAlertText);
        toast.error(emailAlertText);
        break;
      case email && !isValidEmail(email):
        const invalidEmailAlertText = "Please Provide a Valid Email";
        displayAlert(invalidEmailAlertText);
        toast.error(invalidEmailAlertText);
        break;
      case !password:
        const passwordAlertText = "Please Enter Password";
        displayAlert(passwordAlertText);
        toast.error(passwordAlertText);
        break;
      case password.length < 8:
        const lengthAlertText = "Password should be greater than 8 characters";
        displayAlert(lengthAlertText);
        toast.error(lengthAlertText);
        break;
      default:
        console.log(text);
        break;
    }

    setText(values);
    console.log(text);
  };
  return (
    <Wrapper className="full-page">
      <div className="container page">
        <form className="form" onSubmit={onSubmit}>
          <Logo />
          <h3>Login</h3>
          {showAlert && <Alert />}
          {/* email input */}
          <FormRow
            type="email"
            name="email"
            value={values.email}
            handleChange={handleChange}
          />
          {/* password input */}
          <FormRow
            type="password"
            name="password"
            value={values.password}
            handleChange={handleChange}
          />

          <button type="submit" className="btn btn-block">
            Submit
          </button>
          <p>
            Not a member?
            <button type="button" onClick={toggleMember} className="member-btn">
              Register
            </button>
          </p>
        </form>

        {/* <img src={login} alt="login" className="img" /> */}
      </div>
      <ToastContainer />
    </Wrapper>
  );
};
export default Login;
