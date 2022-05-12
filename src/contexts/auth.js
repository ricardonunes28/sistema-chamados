import { createContext, useState, useEffect } from "react";
import firebase from "../services/firebaseConnection";
import { toast } from "react-toastify";

export const AuthContext = createContext({});

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [loadingAuth, setLoadingAuth] = useState(false);
  const [isLoading, setIsloading] = useState(true);

  useEffect(() => {
    function loadStorage() {
      const storageUser = localStorage.getItem("SistemaUser");
      if (storageUser) {
        setUser(JSON.parse(storageUser));
        setIsloading(false);
      }

      setIsloading(false);
    }

    loadStorage();
  }, []);

  /**
   * Fazendo Login
   * @param {*} data
   */

  async function signIn(email, password) {
    setLoadingAuth(true);

    await firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(async (value) => {
        let uid = value.user.uid;

        const userProfile = await firebase
          .firestore()
          .collection("users")
          .doc(uid)
          .get();

        let data = {
          uid: uid,
          name: userProfile.data().name,
          avatarUrl: userProfile.data().avatarUrl,
          email: value.user.email,
        };

        setUser(data);
        storageUser(data);
        setLoadingAuth(false);
        toast.success('Bem vindo de volta!')
      })
      .catch((error) => {
        console.log(error);
        setLoadingAuth(false);
        toast.error('Algo deu errado!')
      });
  }

  /**
   * Cadastro
   * @param {*} email
   * @param {*} password
   * @param {*} name
   */

  async function signUp(email, password, name) {
    setLoadingAuth(true);
    await firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(async (value) => {
        let uid = value.user.uid;

        await firebase
          .firestore()
          .collection("users")
          .doc(uid)
          .set({
            name: name,
            avatarUrl: null,
          })
          .then(() => {
            let data = {
              uid: uid,
              name: name,
              email: value.user.email,
              avatarUrl: null,
            };

            setUser(data);
            storageUser(data);
            setLoadingAuth(false);
            toast.success('Bem vindo a plataforma!')
          })
          .catch((error) => {
            console.log(error);
            setLoadingAuth(false);
            toast.error('Algo deu errado!')
          });
      });
  }

  /**
   * Deslogando usuario
   */
  async function signOut() {
    await firebase.auth().signOut();
    localStorage.removeItem("SistemaUser");
    setUser(null);
  }

  /**
   * Função para mudar nosso localStorage
   * @param {*} data
   */
  function storageUser(data) {
    localStorage.setItem("SistemaUser", JSON.stringify(data));
  }

  return (
    <AuthContext.Provider
      value={{
        signed: !!user,
        user,
        isLoading,
        signUp,
        signOut,
        signIn,
        name,
        setName,
        email,
        setEmail,
        password,
        setPassword,
        loadingAuth
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
