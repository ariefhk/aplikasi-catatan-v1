import { useContext } from "react";
import { ThemeContext } from "../contexts/theme-context";
import Button from "../components/button";
import { cn } from "../utils/tailwind-merge";

const Login = () => {
    const { theme, changeTheme } = useContext(ThemeContext);

    console.log("theme: ", theme);

    return (
        <div>
            <h1>Login Page</h1>
            <Button
                onClick={() => changeTheme()}
                className={cn("bg-violet-600 text-white px-5 py-2", {
                    "bg-slate-600": theme === "dark",
                })}
            >
                Change Theme
            </Button>
        </div>
    );
};

export default Login;
