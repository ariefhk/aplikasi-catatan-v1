import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../../contexts/auth-context";

const Anonymous = () => {
    const { token } = useAuth();

    // Check if the user is authenticated
    if (!token) {
        // If not authenticated, render the child routes
        return <Outlet />;
    }
    // If authenticated, redirect to the home page
    return <Navigate to="/" replace />;
};

export default Anonymous;
