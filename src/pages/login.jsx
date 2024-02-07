import Navbar from "../components/navbar";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useLogin } from "../networks/auth";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/auth-context";

const Login = () => {
    const { setToken } = useAuth();
    const navigate = useNavigate();
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        mode: "onChange",
    });

    const {
        // data: loginData,
        // isPending: isLoadingLogin,
        mutate: login,
    } = useLogin({
        onSuccess: (dataLogin) => {
            alert("SUCCESS LOGIN");
            console.log("Login Data: ", dataLogin);
            const token = dataLogin?.data?.accessToken;
            setToken(token);
            navigate("/", { replace: true });
        },
        onError: (errorLogin) => {
            alert("ERROR LOGIN");
            console.log("Error Login: ", errorLogin);
        },
    });

    const handleLoginAccount = async (data) => {
        console.log(data);

        const formData = {
            email: data?.email,
            password: data?.password,
        };

        login(formData);
    };

    return (
        <main className="overflow-x-hidden">
            <Navbar />
            <section className="max-w-screen-lg mx-auto mt-[60px] py-[32px]">
                <h1 className="font-bold text-[24px] leading-normal">Yuk, login untuk menggunakan aplikasi</h1>
                <form className="w-full flex h-full flex-col gap-y-[8px] my-[32px]" onSubmit={handleSubmit(handleLoginAccount)}>
                    <div className="w-full ">
                        <div className="w-full flex flex-col gap-y-[4px]">
                            <label htmlFor="email" className="text-[24px] leading-normal font-light">
                                Email
                            </label>
                            <input
                                id="email"
                                type="email"
                                name="email"
                                {...register("email", {
                                    required: "Email tidak boleh kosong!",
                                    pattern: {
                                        value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                                        message: "Format email tidak sesuai!",
                                    },
                                })}
                                className=" text-[18px] border-2 h-[43px]  rounded-[8px] px-[8px] font-semibold "
                            />
                        </div>
                        {errors?.email?.message ? (
                            <p className="text-red-500">{errors?.email?.message}</p>
                        ) : (
                            <div className="block invisible h-[24px]"></div>
                        )}
                    </div>
                    <div className="w-full">
                        <div className="w-full flex flex-col gap-y-[4px]">
                            <label htmlFor="password" className="text-[24px] leading-normal font-light">
                                Password
                            </label>
                            <input
                                id="password"
                                type="password"
                                name="password"
                                {...register("password", {
                                    required: "Password tidak boleh kosong!",
                                    minLength: {
                                        value: 8,
                                        message: "Jumlah Karaktek tidak boleh kurang dari 8!",
                                    },
                                })}
                                className="text-[18px] border-2 h-[43px] rounded-[8px] px-[8px] font-semibold"
                            />
                        </div>
                        {errors?.password?.message ? (
                            <p className="text-red-500">{errors?.password?.message}</p>
                        ) : (
                            <div className="block invisible h-[24px]"></div>
                        )}
                    </div>
                    <button
                        type="submit"
                        className="h-[53px] border-2 mt-[10px] border-violet-700  flex justify-center items-center font-bold text-[24px] bg-violet-700 rounded-[8px] text-white w-full p-[12px] leading-normal hover:border-violet-700 hover:text-violet-700 hover:bg-white"
                    >
                        Login
                    </button>
                </form>
                <p className="text-[16px] leading-normal">
                    Belum punya akun?
                    <Link to={"/register"} className="underline pl-[8px] hover:font-bold">
                        Daftar di sini
                    </Link>
                </p>
            </section>
        </main>
    );
};

export default Login;
