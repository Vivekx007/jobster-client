import main from "../assets/images/main2.svg";
import Wrapper from "../assets/wrappers/LandingPage";
import Logo from "../components/Logo";
import { Link } from "react-router-dom";
const Landing = () => {
  return (
    <Wrapper>
      <Logo />
      <div className="container page">
        {/* {info} */}
        <div className="info">
          <h1>
            job <span> tracking</span> app
          </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <Link to="/register" className="btn btn-hero">
            Login/Register
          </Link>
        </div>
        <img src={main} alt="job hunt" className="img main-img"></img>
      </div>
    </Wrapper>
  );
};

export default Landing;
