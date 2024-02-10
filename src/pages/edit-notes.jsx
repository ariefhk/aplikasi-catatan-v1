import { useParams, useNavigate } from 'react-router-dom';
import DefaultLayout from '../layouts/default-layout';
import Navbar from '../components/navbar/navbar';
import { useGetNote, usePostArchiveNote, useDeleteNote, usePostUnArchiveNote } from '../networks/note';
import { reformatDate } from '../utils/format-date';
import { useLocale } from '../contexts/locale-context';
import Swal from 'sweetalert2';

//
import { MdOutlineArchive, MdOutlineUnarchive } from 'react-icons/md';
import { FiTrash } from 'react-icons/fi';
import Button from '../components/button';
import ContentLayout from '../layouts/content-layout';

const EditNote = () => {
    const { id: noteId } = useParams();
    const { locale } = useLocale();
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
                {isLoading && (
                    <h1 className=' text-[64px] font-bold leading-normal text-baseBlack'>Sedang memuat catatan...</h1>
                )}
                {isError && (
                    <h1 className=' text-[64px] font-bold leading-normal text-baseBlack'>Gagal memuat catatan</h1>
                )}
                {isSuccess && (
                    <div className='flex-grow overflow-y-auto'>
                        <h2 className=' text-[64px] font-bold leading-normal text-baseBlack dark:text-baseWhite'>
                            {note?.title}
                        </h2>
                        <p className='  text-[16px] leading-normal text-[#6d6d6d] dark:text-baseWhite'>
                            {reformatDate(note?.createdAt, locale)}
                        </p>
                        <p className='pt-[36px] text-[18px] leading-[27px] text-baseBlack dark:text-baseWhite'>
                            {note?.body}
                        </p>
                    </div>
                )}
            </ContentLayout>
            {isSuccess && (
                <section className='absolute bottom-[32px] right-[32px] flex items-center gap-x-[16px]'>
                    <Button
                        disabled={loadingArchivingNote}
                        onClick={() => handleArchive(noteId)}
                        className='flex h-[50px] w-[50px] items-center justify-center rounded-full bg-baseBlack p-0 dark:border-baseWhite dark:bg-baseWhite'>
                        {note?.archived ? (
                            <MdOutlineArchive className='h-[32px] w-[32px] text-baseWhite dark:text-baseBlack' />
                        ) : (
                            <MdOutlineUnarchive className='h-[32px] w-[32px] text-baseWhite dark:text-baseBlack' />
                        )}
                    </Button>
                    <Button
                        disabled={loadingDeletingNote}
                        onClick={() => handleDeletingNote(noteId)}
                        className='flex h-[50px]  w-[50px] items-center justify-center rounded-full bg-baseBlack p-0 dark:border-baseWhite dark:bg-baseWhite'>
                        <FiTrash className='h-[32px] w-[32px] text-baseWhite dark:text-baseBlack ' />
                    </Button>
                </section>
            )}
        </DefaultLayout>
    );
};

export default EditNote;
