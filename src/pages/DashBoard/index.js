import { useDashBoard } from "./useDashBoard"


export default function Dashboard(){
    const {logout}=useDashBoard()
    return(
        <>
        <h1>DashBoard</h1>
        <button onClick={logout}>Deslogar</button>
        </>
    )
}