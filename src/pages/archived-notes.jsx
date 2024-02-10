import ListArchivedNotes from '../components/archived-notes/list-archived-notes';
import { InputQuery } from '../components/input';
import Navbar from '../components/navbar/navbar';
import DefaultLayout from '../layouts/default-layout';
import ContentLayout from '../layouts/content-layout';
import { useLocale } from '../contexts/locale-context';
import { archivedLocale } from '../utils/locale-data';

const ArchivedNotes = () => {
    const { locale } = useLocale();
    return (
        <DefaultLayout className={'relative overflow-y-hidden'}>
            <Navbar />
            <ContentLayout>
                <h1 className=' text-3xl font-bold text-baseBlack dark:text-baseWhite'>
                    {archivedLocale[locale]?.title}
                </h1>
                <InputQuery query={'keyword'} className={'py-[10px]'} />
                <ListArchivedNotes />
            </ContentLayout>
        </DefaultLayout>
    );
};

export default ArchivedNotes;
