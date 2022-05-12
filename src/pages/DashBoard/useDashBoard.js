import { useContext } from "react";
import { AuthContext } from "../../contexts/auth";

export const useDashBoard = () =>{
    const {signOut} = useContext(AuthContext)

    const logout = () => {
        signOut()
      };


      return{
        logout
      }
}