import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const useSignin = () =>{
     /**
   * useState para setar informações de login de usuario
   */
  const [loginUser, setLoginUser] = useState({
    email: '',
    password: '',
  });

  const navigate = useNavigate();

  /**
   * Função para atribuir todo valor digitado em email ou password
   * @param {*} event 
   */
  const handleInputChangeState = (event) => {
    setLoginUser({
      ...loginUser,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) =>{
      event.preventDefault();
      alert('Clicou')
  }


  return{
      handleInputChangeState,
      handleSubmit,
      navigate
  }

}