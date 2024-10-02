import React from "react";
import { Navigate } from "react-router-dom";

const LoggedIn = ({ Component, ...rest }) => {
  const token = window.localStorage.getItem("token");
  return !token ? <Component {...rest} /> : <Navigate to={`/`} />;
};

export default LoggedIn;
