import ListArchivedNotes from '../components/archived-notes/list-archived-notes';
import { InputQuery } from '../components/input';
import { Navbar } from '../components/navbar';
import DefaultLayout from '../layouts/default-layout';
import ContentLayout from '../layouts/content-layout';
import TitlePage from '../components/title-page';

const ArchivedNotes = () => {
    return (
        <DefaultLayout className={'relative overflow-y-hidden'}>
            <Navbar />
            <ContentLayout>
                <TitlePage pageTitle={'archived'} />
                <InputQuery query={'keyword'} className={'py-[10px]'} />
                <ListArchivedNotes />
            </ContentLayout>
        </DefaultLayout>
    );
};

export default ArchivedNotes;
