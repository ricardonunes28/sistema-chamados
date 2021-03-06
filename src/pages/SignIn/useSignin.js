import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/auth";

export const useSignin = () => {
  const { email, password, signIn, setEmail, setPassword,loadingAuth } =
    useContext(AuthContext);

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    if (email !== undefined && password !== undefined) {
      signIn(email, password);
    }
  };

  return {
    handleSubmit,
    navigate,
    email,
    password,
    setEmail,
    setPassword,
    loadingAuth
  };
};
