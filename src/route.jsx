import { Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Login from "./pages/login";
import Register from "./pages/register";
import ProtectedRoutes from "./components/protected-routes";
import Anonymous from "./components/anonymous";

const AppRoute = () => {
    return (
        <Routes>
            <Route path="*" element={<h1>Page not found!</h1>} />
            <Route element={<Anonymous />}>
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
            </Route>
            <Route element={<ProtectedRoutes />}>
                <Route path="/" element={<Home />} />
            </Route>
        </Routes>
    );
};

export default AppRoute;
