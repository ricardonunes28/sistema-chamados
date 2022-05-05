import { useSignin } from "./useSignin";
import logo from "../../assets/logo.png";
import { Container, FormLogin, Login, LoginArea, Link } from "./style";

export default function SignIn() {
 const {
  handleInputChangeState,
  handleSubmit,
  navigate
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
            value={handleInputChangeState.email}
            onChange={handleInputChangeState}
          />
          <input
            type="password"
            name="password"
            placeholder="*****"
            value={handleInputChangeState.password}
            onChange={handleInputChangeState}
          />
          <button type="submit">Acessar</button>
        </FormLogin>

        <Link  onClick={()=> navigate('/register')}>Criar uma conta</Link>
      </Login>
    </Container>
  );
}
