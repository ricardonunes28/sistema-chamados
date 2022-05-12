import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/auth";

export const useSignup = () => {
  const { signUp, name, setName, email, setEmail, password, setPassword, loadingAuth} =
    useContext(AuthContext);

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    if (name !== "" && email !== "" && password !== "") {
      signUp(email, password, name);
    }
  };

  return {
    handleSubmit,
    navigate,
    name,
    email,
    password,
    setEmail,
    setName,
    setPassword,
    loadingAuth
  };
};
