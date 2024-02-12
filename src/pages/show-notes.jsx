// networks
import { useGetNote, usePostArchiveNote, useDeleteNote, usePostUnArchiveNote } from '../networks/note';
import Swal from 'sweetalert2';
import { useParams, useNavigate } from 'react-router-dom';
import { Navbar } from '../components/navbar';
import ShowNotesButton from '../components/show-notes/show-notes-button';
import { ErrorNote, LoadingNote, SuccessNote } from '../components/note';
import DefaultLayout from '../layouts/default-layout';
import ContentLayout from '../layouts/content-layout';

const ShowNotes = () => {
    const { id: noteId } = useParams();
    const navigate = useNavigate();

    const { data: note, isSuccess, isLoading, isError } = useGetNote(noteId);

    const { mutate: archivingNote, isPending: loadingArchivingNote } = usePostArchiveNote({
        onSuccess: (data) => {
            Swal.fire({
                icon: 'success',
                title: 'Berhasil Mengarsipkan',
                text: `Selamat Anda berhasil mengarsipkan catatan!`,
                timerProgressBar: true,
                timer: 1300,
            });
            navigate('/');
        },
        onError: (error) => {
            Swal.fire({
                icon: 'error',
                title: 'Gagal Mengarsipkan',
                text: `Maaf, Anda gagal untuk mengarsipkan catatan!`,
                timerProgressBar: true,
                timer: 1300,
            });
        },
    });

    const { mutate: unArchivingNote, isPending: loadingUnArchivingNote } = usePostUnArchiveNote({
        onSuccess: (data) => {
            Swal.fire({
                icon: 'success',
                title: 'Berhasil Mengembalikan',
                text: `Selamat Anda berhasil mengembalikan catatan!`,
                timerProgressBar: true,
                timer: 1300,
            });
            navigate('/');
        },
        onError: (error) => {
            Swal.fire({
                icon: 'error',
                title: 'Gagal Mengembalikan',
                text: `Maaf, Anda gagal untuk mengembalikan catatan!`,
                timerProgressBar: true,
                timer: 1300,
            });
        },
    });

    const { mutate: deletingNote, isPending: loadingDeletingNote } = useDeleteNote({
        onSuccess: (data) => {
            Swal.fire({
                icon: 'success',
                title: 'Berhasil Menghapus',
                text: `Selamat Anda berhasil menghapus catatan!`,
                timerProgressBar: true,
                timer: 1300,
            });
            navigate('/');
        },
        onError: (error) => {
            Swal.fire({
                icon: 'error',
                title: 'Gagal Menghapus',
                text: `Maaf, Anda gagal untuk menghapus catatan!`,
                timerProgressBar: true,
                timer: 1300,
            });
        },
    });

    const handleArchive = (id) => {
        const formData = {
            id,
        };

        if (!note?.archived) {
            archivingNote(formData);
            return;
        }
        unArchivingNote(formData);
    };

    const handleDeletingNote = (id) => {
        const formData = {
            id,
        };
        deletingNote(formData);
    };

    return (
        <DefaultLayout className={'relative overflow-y-hidden'}>
            <Navbar />
            <ContentLayout>
                {isLoading && <LoadingNote />}
                {isError && <ErrorNote />}
                {isSuccess && <SuccessNote title={note?.title} createdAt={note?.createdAt} body={note?.body} />}
            </ContentLayout>
            <ShowNotesButton
                isShowButton={isSuccess}
                isArchive={note?.archived}
                isLoadingArchive={loadingArchivingNote || loadingUnArchivingNote}
                isLoadingDelete={loadingDeletingNote}
                onClickArchive={() => handleArchive(noteId)}
                onClickDelete={() => handleDeletingNote(noteId)}
            />
        </DefaultLayout>
    );
};

export default ShowNotes;
