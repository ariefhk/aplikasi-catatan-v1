import { Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Login from "./pages/login";
import RequiredAuthProvider from "./providers/required-auth-provider";

const AppRoute = () => {
    return (
        <Routes>
            <Route path="*" element={<h1>Page not found!</h1>} />
            <Route path="/login" element={<Login />} />
            <Route element={<RequiredAuthProvider />}>
                <Route path="/" element={<Home />} />
            </Route>
        </Routes>
    );
};

export default AppRoute;
