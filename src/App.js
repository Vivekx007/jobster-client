import Dashboard from "./pages/Dashboard";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import background from "./assets/images/background.jpg";

function App() {
  // const myStyle = {
  //   backgroundImage:
  //     "url('https://img.freepik.com/free-photo/vivid-blurred-colorful-wallpaper-background_58702-3798.jpg?w=1060&t=st=1691941005~exp=1691941605~hmac=3c8b73286faa412d85af27421f583f73f57b032896d985ec15a3e566b1eea463')",
  //   height: "100vh",

  //   backgroundSize: "cover",
  //   backgroundRepeat: "no-repeat",
  // };
  return (
    // <div style={myStyle}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/buyer/SignUp" element={<SignUp />} />
        <Route path="/buyer/Login" element={<Login />} />
      </Routes>
    </BrowserRouter>
    // </div>
  );
}

export default App;
