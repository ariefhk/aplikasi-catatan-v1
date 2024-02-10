import ListArchivedNotes from '../components/archived-notes/list-archived-notes';
import { InputQuery } from '../components/input';
import Navbar from '../components/navbar/navbar';
import DefaultLayout from '../layouts/default-layout';
import ContentLayout from '../layouts/content-layout';

const ArchivedNotes = () => {
    return (
        <DefaultLayout className={'relative overflow-y-hidden'}>
            <Navbar />
            <ContentLayout>
                <h1 className=' text-3xl font-bold text-baseBlack dark:text-baseWhite'>Catatan Arsip</h1>
                <InputQuery query={'keyword'} className={'py-[10px]'} />
                <ListArchivedNotes />
            </ContentLayout>
        </DefaultLayout>
    );
};

export default ArchivedNotes;
