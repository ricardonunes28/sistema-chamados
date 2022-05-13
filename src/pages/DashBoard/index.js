import { Header } from "../../components/Header"
import { useDashBoard } from "./useDashBoard"


export default function Dashboard(){
    const {logout}=useDashBoard()
    return(
        <>
        <Header/>
        <button onClick={logout}>Deslogar</button>
        </>
    )
}