import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { TOKEN } from "../utils/constants";

function PrivateRoutes({ children }) {
  const navigate = useNavigate();

  useEffect(() => {
    const thisInstant = Date.now();
    const expireToken = localStorage.getItem("expire_token");

    if (!expireToken) {
      navigate("/login");
    }
    //  redirect to login if session time expires
    if (thisInstant > Number(expireToken)) {
      localStorage.removeItem("expire_token");
      window.localStorage.removeItem(TOKEN);

      navigate("/login");
    }
  }, []);

  return <>{children}</>;
}

export default PrivateRoutes;
