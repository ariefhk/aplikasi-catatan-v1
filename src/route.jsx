import { Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Login from "./pages/login";
import Register from "./pages/register";
import RequiredAuthProvider from "./providers/required-auth-provider";

const AppRoute = () => {
    return (
        <Routes>
            <Route path="*" element={<h1>Page not found!</h1>} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route element={<RequiredAuthProvider />}>
                <Route path="/" element={<Home />} />
            </Route>
        </Routes>
    );
};

export default AppRoute;
