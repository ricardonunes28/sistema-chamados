import { useHeader } from "./useHeader";
import avatar from "../../assets/avatar.png";

import { AiOutlineHome, AiOutlineSetting, AiOutlineUser } from "react-icons/ai";
import { Options, Sidebar } from "./style";

export function Header() {
  const { user, navigate } = useHeader();
  return (
    <Sidebar>
      <div>
        <img
          src={user.avatarUrl === null ? avatar : user.avatarUrl}
          alt="Foto Avatar"
        />
      </div>
      
        <Options  onClick={()=> navigate('/dashboard')}>
          <AiOutlineHome color="#FFF" size={24} />
          Chamados
        </Options>

        <Options onClick={()=> navigate('/dashboard')}>
          <AiOutlineUser color="#FFF" size={24} />
          Clientes
        </Options>

        <Options onClick={()=> navigate('/dashboard')}>
          <AiOutlineSetting color="#FFF" size={24} />
          Configurações
        </Options>
      
    </Sidebar>
  );
}
