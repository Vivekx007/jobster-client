import { useState } from "react";
import Wrapper from "../assets/wrappers/RegisterPage";
import { useNavigate } from "react-router-dom";
// import { toast } from "react-toastify";
import FormRow from "../components/FormRow";
import Alert from "../components/Alert";
import { useAppContext } from "../context/appContext";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Logo from "../components/Logo";

const initialState = {
  name: "",
  email: "",
  password: "",
  adhaar: "",
  pan: "",
  phone: "",
  address: "",
};

const SignUp = () => {
  const [values, setValues] = useState(initialState);
  const [text, setText] = useState();
  const navigate = useNavigate();
  const { showAlert, displayAlert } = useAppContext();

  const toggleMember = () => {
    navigate("/buyer/Login");
  };

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
    // console.log(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const { name, email, password, adhaar, pan, phone } = values;
    // if (!email && !password && !name && !pan && !adhaar && !phone) {
    //   displayAlert("Please fill out all fields");
    //   toast.error("Please fill out all fields");
    //   return;
    // }
    // if (!email) {
    //   displayAlert("Please Enter Email");
    //   toast.error("Please Enter Email");
    //   return;
    // } else if (!password) {
    //   displayAlert("Please Enter Password");
    //   toast.error("Please Enter Password");
    //   return;
    // } else if (!name) {
    //   displayAlert("Please Enter Name");
    //   toast.error("Please Enter Email");
    //   return;
    // } else if (!adhaar) {
    //   displayAlert("Please Enter Adhaar No.");
    //   toast.error("Please Enter Adhaar No.");
    //   return;
    // } else if (!pan) {
    //   displayAlert("Please Enter PAN No.");
    //   toast.error("Please Enter PAN No.");
    //   return;
    // } else if (!phone) {
    //   displayAlert("Please Enter Phone No.");
    //   toast.error("Please Enter Phone No.");
    //   return;
    // }

    switch (true) {
      case !email && !password && !name && !pan && !adhaar && !phone:
        displayAlert("Please fill out all fields");
        toast.error("Please fill out all fields");
        break;

      case !name:
        displayAlert("Please Enter Name");
        toast.error("Please Enter Name");
        break;
      case !email:
        const emailAlertText = "Please Enter Email";
        displayAlert(emailAlertText);
        toast.error(emailAlertText);
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
      case !adhaar:
        displayAlert("Please Enter Adhaar No.");
        toast.error("Please Enter Adhaar No.");
        break;
      case !pan:
        displayAlert("Please Enter PAN No.");
        toast.error("Please Enter PAN No.");
        break;
      case !phone:
        displayAlert("Please Enter Phone No.");
        toast.error("Please Enter Phone No.");
        break;
      default:
        // console.log(text);
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
          <h3>Register to Buyers</h3>

          {showAlert && <Alert />}
          {/* name input */}

          <FormRow
            type="text"
            name="name"
            value={values.name}
            handleChange={handleChange}
          />

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
          {/* adhaar input */}

          <FormRow
            type="number"
            name="adhaar"
            value={values.adhaar}
            handleChange={handleChange}
          />

          {/* pan input */}

          <FormRow
            type="text"
            name="pan"
            value={values.pan}
            handleChange={handleChange}
          />

          <FormRow
            type="tel"
            name="phone"
            value={values.phone}
            handleChange={handleChange}
          />

          <button type="submit" className="btn btn-block">
            Submit
          </button>
          <p>
            Already a member?
            <button type="button" onClick={toggleMember} className="member-btn">
              Login
            </button>
          </p>
        </form>
      </div>
      <ToastContainer />
    </Wrapper>
  );
};
export default SignUp;
