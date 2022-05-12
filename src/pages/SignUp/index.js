import { useSignup } from "./useSignup";
import logo from "../../assets/logo.png";
import { Container, FormLogin, Login, LoginArea, Link } from "./style";
import { ButtonSave } from "../../components/ButtonSave";

export default function SignUp() {
  const {
    handleSubmit,
    navigate,
    name,
    email,
    password,
    setEmail,
    setName,
    setPassword,
    loadingAuth
  } = useSignup();

  return (
    <Container>
      <Login>
        <LoginArea>
          <img src={logo} alt="Sistema Logo" />
        </LoginArea>
        <FormLogin onSubmit={handleSubmit}>
          <h1>Cadastrar conta</h1>
          <input
            type="text"
            name="name"
            placeholder="Nome e Sobrenome"
            value={name}
            onChange={(e)=> setName(e.target.value) }
          />
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
          <ButtonSave loadingAuth={loadingAuth}  type={"Cadastrar"}/>
        </FormLogin>

        <Link onClick={() => navigate("/")}>Já possui cadastro ? Entre</Link>
      </Login>
    </Container>
  );
}
