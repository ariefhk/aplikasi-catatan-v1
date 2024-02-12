import ListNotes from '../components/home/list-notes';
import { Navbar } from '../components/navbar';
import DefaultLayout from '../layouts/default-layout';
import { InputQuery } from '../components/input';
import AddNoteButton from '../components/home/add-note-button';
import ContentLayout from '../layouts/content-layout';
import TitlePage from '../components/title-page';

function Home() {
    return (
        <DefaultLayout className={'relative overflow-y-hidden'}>
            <Navbar />
            <ContentLayout>
                <TitlePage pageTitle={'home'} />
                <InputQuery query={'keyword'} className={'py-[10px]'} />
                <ListNotes />
            </ContentLayout>
            <AddNoteButton />
        </DefaultLayout>
    );
}

export default Home;
