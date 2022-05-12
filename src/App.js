import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./contexts/auth";
import Router from "./routes";
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    /**
     * AuthProvider envolvendo toda nossas rotas, para verificar se usuario esta lugado
     * As unicas rotas que podem ser acessadas sem login é apenas de login e cadastro. 
     * 
     * 
     */
    <AuthProvider>
      <BrowserRouter>
      <ToastContainer autoClose={3000}/>
        <Router />
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
