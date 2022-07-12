import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login/login";
import Registeration from "../pages/Register/registeration";
import RegisterSuccess from "../pages/Success/Register";
import VotingSuccess from "../pages/Success/Voting";
import EmailAuth from "../pages/Success/EmailAuth";
import Verify from "../pages/Success/verify";

const Router = ({ hasToken }) => {
  return (
    <Routes>
      {/*=========================================
      2. if token, load login and register page
      3. else, load the other pages...  
   =========================================*/}
      {hasToken ? (
        <>
          <Route exact path="/" element={<Home />} />
          <Route path="/email-auth" element={<EmailAuth />} />
          <Route path="/register-success" element={<RegisterSuccess />} />
          <Route path="/voting-success" element={<VotingSuccess />} />
          <Route path="/verify" element={<Verify />} />
        </>
      ) : (
        <>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Registeration />} />
        </>
      )}
    </Routes>
  );
};
export default Router;
