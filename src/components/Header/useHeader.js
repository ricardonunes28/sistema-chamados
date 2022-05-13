import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/auth";

export const useHeader = () => {

  const { user } = useContext(AuthContext);
  let navigate = useNavigate()

  return {
    user,
    navigate
  };
};
