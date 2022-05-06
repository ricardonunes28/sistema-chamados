# Sistema de Chamados com React

No diretório do projeto, você pode executar:

### `yarn start`

Executa o aplicativo no modo de desenvolvimento.
Abra http://localhost:3000 para visualizá-lo em seu navegador.

**Ultimos updates**
- [x] Site responsivo
- [x] Implementação de styled-components
- [x] Hooks próprios

**Exemplo de codigo - Hooks próprios**
```js
export const useSignin = () =>{

  const [loginUser, setLoginUser] = useState({
    email: '',
    password: '',
  });

  const navigate = useNavigate();

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
```
**Tela Login**

![image](https://user-images.githubusercontent.com/87386896/167027072-1415f643-533e-4a1f-a706-164375bc09a2.png)

...
