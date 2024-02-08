import ListNotes from "../components/home/list-notes";
import Navbar from "../components/navbar";
import DefaultLayout from "../layouts/default-layout";
import InputQuery from "../components/input-query";
// import { InputQuery } from "../components/input";

function Home() {
    console.log("render home");
    return (
        <DefaultLayout>
            <Navbar />
            <section
                className={
                    "h-full pb-[80px] pt-[40px] flex flex-col px-[20px] md:px-0 gap-y-[20px] mt-[60px]  max-w-screen-lg mx-auto"
                }
            >
                <h1 className=" font-bold text-3xl ">Catatan Aktif</h1>
                <InputQuery query={"keyword"} className={"py-[10px]"} />

                <ListNotes />
            </section>
        </DefaultLayout>
    );
}

export default Home;
