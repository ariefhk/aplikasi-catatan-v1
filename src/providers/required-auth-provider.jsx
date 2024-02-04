import { useNavigate, Outlet } from "react-router-dom";
import { useGetUserLogged } from "../networks/auth";

const RequiredAuthProvider = () => {
    const navigate = useNavigate();
    const { data: userData, isSuccess } = useGetUserLogged((err) => {
        if (Object.keys(err)?.length !== 0) {
            navigate("/login", { replace: true });
            // console.log(err);
        }
    });

    if (isSuccess) {
        console.log(userData);
    }

    return isSuccess ? <Outlet /> : false;
};

export default RequiredAuthProvider;
