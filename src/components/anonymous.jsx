import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../contexts/auth-context";

const Anonymous = () => {
    const { token } = useAuth();

    return token ? <Navigate to="/" replace /> : <Outlet />;
};

export default Anonymous;
