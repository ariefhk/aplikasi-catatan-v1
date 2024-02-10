import React from 'react';
import DefaultLayout from '../layouts/default-layout';
import Navbar from '../components/navbar/navbar';
import { Input } from '../components/input';
import ContentLayout from '../layouts/content-layout';
import { useForm } from 'react-hook-form';
import Button from '../components/button';
import { MdCheck } from 'react-icons/md';
import { cn } from '../utils/tailwind-merge';
import { useCreateNote } from '../networks/note';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
import Loader from '../components/loader';
import { useLocale } from '../contexts/locale-context';
import { createNoteLocale } from '../utils/locale-data';

const CreateNotes = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        mode: 'onChange',
    });

    const navigate = useNavigate();
    const { locale } = useLocale();

    const { mutate: createNote, isPending: loadingCreateNote } = useCreateNote({
        onSuccess: (data) => {
            Swal.fire({
                icon: 'success',
                title: 'Berhasil Membuat',
                text: `Selamat Anda berhasil membuat catatan!`,
                timerProgressBar: true,
                timer: 1300,
            });
            navigate('/');
        },
        onError: (error) => {
            Swal.fire({
                icon: 'error',
                title: 'Gagal Membuat',
                text: `Maaf, Anda gagal untuk membuat catatan!`,
                timerProgressBar: true,
                timer: 1300,
            });
        },
    });

    const handleCreateNote = async (data) => {
        const formData = {
            title: data?.title,
            body: data?.body,
        };

        // console.log(formData);
        createNote(formData);
    };

    return (
        <DefaultLayout className={'relative overflow-y-hidden'}>
            <Navbar />
            <ContentLayout>
                <form className='flex h-full w-full flex-col gap-y-[8px]' onSubmit={handleSubmit(handleCreateNote)}>
                    <section>
                        <Input
                            disabled={loadingCreateNote}
                            placeholder={createNoteLocale[locale]?.title}
                            className={cn(
                                'h-auto rounded-[8px] border-none px-0 py-[8px] text-[64px] font-bold placeholder:text-[#333333] placeholder:text-opacity-60 dark:bg-black dark:text-baseWhite dark:placeholder:text-baseWhite',
                                {
                                    'outline-red-500': errors?.title?.message,
                                },
                            )}
                            {...register('title', {
                                required: `${createNoteLocale[locale].error?.titleField?.required}`,
                            })}
                        />
                        {errors?.title?.message ? (
                            <p className='text-red-500'>{errors?.title?.message}</p>
                        ) : (
                            <div className='invisible block h-[24px]'></div>
                        )}
                    </section>
                    <section className='flex h-full w-full flex-col'>
                        <textarea
                            disabled={loadingCreateNote}
                            name=''
                            placeholder={createNoteLocale[locale]?.body}
                            {...register('body', {
                                required: `${createNoteLocale[locale].error?.bodyField?.required}`,
                            })}
                            className={cn(
                                'flex-grow bg-baseWhite py-[8px] text-[24px] leading-normal placeholder:text-[#333333] placeholder:text-opacity-60 dark:bg-black dark:text-baseWhite dark:placeholder:text-baseWhite',
                                {
                                    'outline-red-500': errors?.body?.message,
                                },
                            )}></textarea>
                        {errors?.body?.message ? (
                            <p className='text-red-500'>{errors?.body?.message}</p>
                        ) : (
                            <div className='invisible block h-[24px]'></div>
                        )}
                    </section>
                    <Button
                        disabled={loadingCreateNote}
                        type='submit'
                        className='absolute bottom-[32px] right-[32px] h-[50px] w-[50px] rounded-full p-0 dark:border-baseWhite dark:bg-baseWhite'>
                        {loadingCreateNote ? (
                            <Loader className='h-[32px] w-[32px] text-baseWhite dark:text-baseBlack' />
                        ) : (
                            <MdCheck className='h-[32px] w-[32px] text-baseWhite dark:text-baseBlack' />
                        )}
                    </Button>
                </form>
            </ContentLayout>
        </DefaultLayout>
    );
};

export default CreateNotes;
