import ListNotes from '../components/home/list-notes';
import Navbar from '../components/navbar/navbar';
import DefaultLayout from '../layouts/default-layout';
import { InputQuery } from '../components/input';
import AddNoteButton from '../components/home/add-note-button';

function Home() {
    console.log('render home');
    return (
        <DefaultLayout className={'relative overflow-y-hidden'}>
            <Navbar />
            <section
                className={
                    'mx-auto mt-[60px] flex h-full max-w-screen-lg flex-col gap-y-[20px] px-[20px] pb-[80px]  pt-[40px] md:px-0'
                }>
                <h1 className=' text-3xl font-bold '>Catatan Aktif</h1>
                <InputQuery query={'keyword'} className={'py-[10px]'} />

                <ListNotes />
            </section>
            <AddNoteButton />
        </DefaultLayout>
    );
}

export default Home;
