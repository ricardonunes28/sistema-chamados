import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../contexts/auth";

export default function RouteWrapper({ isPrivate, loggedComponent, defaultComponent }) {
  const { signed } = useContext(AuthContext);


  if (!signed && isPrivate) {
    return <Navigate to="/" />;
  }

  if (signed && !isPrivate) {
    return <Navigate to="/dashboard" />;
  }

  return signed ? loggedComponent: defaultComponent
}
