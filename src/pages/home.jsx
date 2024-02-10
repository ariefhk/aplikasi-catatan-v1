import ListNotes from '../components/home/list-notes';
import Navbar from '../components/navbar/navbar';
import DefaultLayout from '../layouts/default-layout';
import { InputQuery } from '../components/input';
import AddNoteButton from '../components/home/add-note-button';
import ContentLayout from '../layouts/content-layout';

function Home() {
    console.log('render home');
    return (
        <DefaultLayout className={'relative overflow-y-hidden'}>
            <Navbar />
            <ContentLayout>
                <h1 className=' text-3xl font-bold text-baseBlack dark:text-baseWhite'>Catatan Aktif</h1>
                <InputQuery query={'keyword'} className={'py-[10px]'} />
                <ListNotes />
            </ContentLayout>
            <AddNoteButton />
        </DefaultLayout>
    );
}

export default Home;
