import { Link } from "react-router-dom";
import Navbar from "../components/navbar";
import { useForm } from "react-hook-form";

const Register = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        mode: "onChange",
    });

    const handleRegisterAccount = async (data) => {
        console.log(data);
    };

    return (
        <main className="overflow-x-hidden">
            <Navbar />
            <section className="max-w-screen-lg mx-auto  mt-[60px] py-[32px]">
                <h1 className="font-bold text-[24px] leading-normal">Isi form untuk mendaftar akun</h1>
                <form
                    className="w-full flex h-full flex-col gap-y-[8px] my-[32px]"
                    onSubmit={handleSubmit(handleRegisterAccount)}
                >
                    <div className="w-full">
                        <div className="w-full flex flex-col gap-y-[4px]">
                            <label htmlFor="name" className="text-[24px] leading-normal font-light">
                                Name
                            </label>
                            <input
                                id="name"
                                type="text"
                                name="name"
                                {...register("name", {
                                    required: "Nama tidak boleh kosong!",
                                })}
                                className=" text-[18px] border-2 h-[43px]  rounded-[8px] px-[8px] font-semibold "
                            />
                        </div>
                        {errors?.name?.message ? (
                            <p className="text-red-500">{errors?.name?.message}</p>
                        ) : (
                            <div className="block invisible h-[24px]"></div>
                        )}
                    </div>
                    <div className="w-full">
                        <div className="w-full flex flex-col gap-y-[8px]">
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
                        <div className=" w-full flex flex-col gap-y-[8px]">
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
                    <div className="w-full">
                        <div className="w-full flex flex-col gap-y-[8px]">
                            <label htmlFor="confirm_password" className="text-[24px] leading-normal font-light">
                                Confirm Password
                            </label>
                            <input
                                id="confirm_password"
                                type="password"
                                name="confirm_password"
                                {...register("confirm_password", {
                                    required: "Password tidak boleh kosong!",
                                    minLength: {
                                        value: 8,
                                        message: "Jumlah Karaktek tidak boleh kurang dari 8!",
                                    },
                                })}
                                className="text-[18px] border-2 h-[43px] rounded-[8px] px-[8px] font-semibold"
                            />
                        </div>
                        {errors?.confirm_password?.message ? (
                            <p className="text-red-500">{errors?.confirm_password?.message}</p>
                        ) : (
                            <div className="block invisible h-[24px]"></div>
                        )}
                    </div>
                    <button
                        type="submit"
                        className="h-[53px] mt-[10px] border-2 border-violet-700  flex justify-center items-center font-bold text-[24px] bg-violet-700 rounded-[8px] text-white w-full p-[12px] leading-normal hover:border-violet-700 hover:text-violet-700 hover:bg-white"
                    >
                        Register
                    </button>
                </form>
                <p className="text-[16px] leading-normal">
                    Sudah punya akun?
                    <Link to={"/login"} className="underline pl-[8px] hover:font-bold">
                        Login di sini
                    </Link>
                </p>
            </section>
        </main>
    );
};

export default Register;
