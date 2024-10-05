import React from "react";
import { Route, Navigate } from "react-router-dom";
import Header from "../../components/header";

const PrivateRoute = ({ Component, ...rest }) => {
  const token = window.localStorage.getItem("token");
  return token ?<> <Header/><Component {...rest} /> </> : <Navigate to={`/login`} />;
};

export default PrivateRoute;
