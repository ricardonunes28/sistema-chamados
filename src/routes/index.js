import { Routes,Route } from 'react-router-dom';
import RouteWrapper from './Route';
 
import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
import Dashboard from '../pages/DashBoard';

 
export default function Router(){
    return(
        <Routes>
            <Route exact path="/" element={<RouteWrapper isPrivate={false}/>}>
                <Route exact path="/" element={<SignIn/>}/>
            </Route>
            <Route exact path="/register" element={<RouteWrapper isPrivate={false}/>}>
                <Route exact path="/register" element={<SignUp/>}/>
            </Route>   
            <Route exact path="/dashboard" element={<RouteWrapper isPrivate={false}/>}>
                <Route exact path="/dashboard" element={<Dashboard/>}/>
            </Route>          
        </Routes>
    )
}
