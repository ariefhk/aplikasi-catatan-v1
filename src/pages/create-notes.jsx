import DefaultLayout from '../layouts/default-layout';
import { Navbar } from '../components/navbar';
import ContentLayout from '../layouts/content-layout';
import CreateNoteForm from '../components/create-notes/create-note-form';

const CreateNotes = () => {
    return (
        <DefaultLayout className={'relative overflow-y-hidden'}>
            <Navbar />
            <ContentLayout>
                <CreateNoteForm />
            </ContentLayout>
        </DefaultLayout>
    );
};

export default CreateNotes;
