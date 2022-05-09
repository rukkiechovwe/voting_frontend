import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login/login";
import Registeration from "../pages/Register/registeration";
import RegisterSuccess from "../pages/Success/Register";

export default () => {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Registeration />} />
      <Route path="/register-success" element={<RegisterSuccess />} />
    </Routes>
  );
};
