import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../contexts/auth";

export default function RouteWrapper({ element: Element, isPrivate, loggedComponent, defaultComponent }) {
  const { signed, isLoading } = useContext(AuthContext);

  if(isLoading){
      return <div>Carregando ...</div>
  }

  if (!signed && isPrivate) {
    return <Navigate to="/" />;
  }

  if (signed && !isPrivate) {
    return <Navigate to="/dashboard" />;
  }

  return signed ? loggedComponent: defaultComponent
}
