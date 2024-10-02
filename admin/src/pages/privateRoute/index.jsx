import React from "react";
import { Route, Navigate } from "react-router-dom";

const PrivateRoute = ({ Component, ...rest }) => {
  const token = window.localStorage.getItem("token");
  return token ? <Component {...rest} /> : <Navigate to={`/login`} />;
};

export default PrivateRoute;
