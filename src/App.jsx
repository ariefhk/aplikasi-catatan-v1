import { useRegister, useGetUserLogged } from "./network/auth";
import { useState } from "react";

function App() {
    const { mutate } = useRegister((_, err) => {
        console.log(err);
    });

    const { data, error } = useGetUserLogged();

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
    });

    const handleChange = (e) => {
        const name = e?.target?.name;
        const value = e?.target?.value;
        switch (name) {
            case "name":
                return setFormData({ ...formData, name: value });
            case "email":
                return setFormData({ ...formData, email: value });
            case "password":
                return setFormData({ ...formData, password: value });
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        mutate({
            name: formData.name,
            email: formData.email,
            password: formData.password,
        });
    };

    if (error) {
        console.log({ data, error });
    }

    return (
        <div className=" bg-violet-500 h-screen w-screen flex justify-center items-center">
            <div className="w-[500px] h-max bg-white rounded-md p-[20px]">
                <form className="flex flex-col gap-y-[20px]" onSubmit={handleSubmit}>
                    <div className=" flex flex-col">
                        <label htmlFor="name">Nama</label>
                        <input
                            name="name"
                            id="name"
                            type="text"
                            className="border"
                            onChange={handleChange}
                            value={formData?.name}
                        />
                    </div>
                    <div className=" flex flex-col">
                        <label htmlFor="email">Email</label>
                        <input
                            name="email"
                            id="email"
                            type="email"
                            className="border"
                            onChange={handleChange}
                            value={formData?.email}
                        />
                    </div>
                    <div className=" flex flex-col">
                        <label htmlFor="password">Password</label>
                        <input
                            name="password"
                            id="password"
                            type="password"
                            className="border"
                            onChange={handleChange}
                            value={formData?.password}
                        />
                    </div>
                    <button type="submit" className="bg-violet-500  text-white px-5 py-3 rounded-md ">
                        Daftar
                    </button>
                </form>
            </div>
        </div>
    );
}

export default App;
