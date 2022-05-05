import styled from "styled-components";

export const Container = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #121212;
`;

export const Login = styled.div`
  background: #eaeaec;
  width: 600px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const LoginArea = styled.div`
  display: flex;
  justify-content: center;
  background-color: #181c2e;
  width: 100%;

  img {
    padding: 20px;
    width: 170px;
    height: 130px;
  }
`;

export const FormLogin = styled.form`
  margin-top: 1.5em;
  width: 90%;
  display: flex;
  flex-direction: column;

  h1 {
    text-align: center;
    margin-bottom: 0.5em;
    color: #181c2e;
  }

  input {
    margin-bottom: 0.5em;
    height: 35px;
    border: 0;
    border-radius: 7px;
    padding: 10px;
    font-size: 15px;
    background-color: #fff;
  }

  button {
    height: 35px;
    border: 0;
    border-radius: 7px;
    background-color: #181c2e;
    color: #fff;
    font-size: 1.3em;
  }
`;

export const Link = styled.a`
  margin: 1.5em 0;
  color: #000;
  cursor: pointer;
`;

// .login a {
//   margin: 1.5em 0;
//   color: #000;
//   cursor: pointer;
// } */
