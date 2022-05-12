import { Routes, Route } from "react-router-dom";
import RouteWrapper from "./Route";

import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";
import Dashboard from "../pages/DashBoard";

export default function Router() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <RouteWrapper
            loggedComponent={<Dashboard />}
            defaultComponent={<SignIn />}
          />
        }
      />{" "}
  
      <Route
        path="/dashboard"
        element={
          <RouteWrapper
            loggedComponent={<Dashboard />}
            defaultComponent={<SignIn />}
            isPrivate
          />
        }
      />
      <Route
        path="/register"
        element={
          <RouteWrapper
            loggedComponent={<Dashboard />}
            defaultComponent={<SignUp />}
          />
        }
      />
    </Routes>
  );
}
