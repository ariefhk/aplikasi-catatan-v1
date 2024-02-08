import { MdGTranslate } from "react-icons/md";
import { IoMdMoon } from "react-icons/io";

const Navbar = () => {
    console.log("render navbar");
    return (
        <div className="w-screen h-[60px] border-b border-black fixed top-0 z-20 bg-white ">
            <nav className="max-w-screen-xl flex items-center h-full  mx-auto justify-between">
                <h1 className="text-3xl font-semibold underline">Aplikasi Catatan</h1>
                <div className="flex items-center  gap-x-[30px]">
                    <MdGTranslate className="w-[30px] h-[30px] cursor-pointer" />
                    <IoMdMoon className="w-[30px] h-[30px] cursor-pointer" />
                </div>
            </nav>
        </div>
    );
};

export default Navbar;
