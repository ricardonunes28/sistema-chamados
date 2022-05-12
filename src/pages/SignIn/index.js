import { useSignin } from "./useSignin";
import logo from "../../assets/logo.png";
import { Container, FormLogin, Login, LoginArea, Link } from "./style";
import { ButtonSave } from "../../components/ButtonSave";

export default function SignIn() {
 const {
  handleSubmit,
  navigate,
  email,
  password,
  setEmail,
  setPassword,
  loadingAuth
 } = useSignin();

  return (
    <Container>
      <Login>
        <LoginArea>
          <img src={logo} alt="Sistema Logo" />
        </LoginArea>
        <FormLogin onSubmit={handleSubmit}>
          <h1>Entrar</h1>
          <input
            type="text"
            name="email"
            placeholder="email@email.com"
            value={email}
            onChange={(e)=> setEmail(e.target.value)}
          />
          <input
            type="password"
            name="password"
            placeholder="*****"
            value={password}
            onChange={(e)=> setPassword(e.target.value)}
          />
          <ButtonSave loadingAuth={loadingAuth}  type={"Fazer Login"}/>
        </FormLogin>

        <Link  onClick={()=> navigate('/register')}>Criar uma conta</Link>
      </Login>
    </Container>
  );
}
