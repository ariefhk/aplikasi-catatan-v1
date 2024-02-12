import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { useLocale } from '../../contexts/locale-context';
import { useRegister } from '../../networks/auth';
import { registerLocale } from '../../utils/locale-data';
import { InputField } from '../input';
import Button from '../button';
import Loader from '../loader';
import Swal from 'sweetalert2';

const RegisForm = () => {
    const navigate = useNavigate();
    const { locale } = useLocale();
    const {
        register,
        handleSubmit,
        formState: { errors },
        setError,
    } = useForm({
        mode: 'onChange',
    });

    const { isPending: loadingRegis, mutate: regis } = useRegister({
        onSuccess: (dataRegis) => {
            Swal.fire({
                icon: 'success',
                title: 'Berhasil Mendaftar',
                text: `Selamat Anda berhasil mendaftar!`,
                timerProgressBar: true,
                timer: 1300,
            });
            navigate('/login', { replace: true });
        },
        onError: (errorRegis) => {
            Swal.fire({
                icon: 'error',
                title: 'Gagal Mendaftar',
                text: `Maaf, Anda gagal untuk mendaftar!`,
                timerProgressBar: true,
                timer: 1300,
            });
        },
    });

    const handleRegisterAccount = async (data) => {
        if (data?.password !== data?.confirm_password) {
            setError('password', {
                type: 'same_password',
                message:
                    locale === 'en'
                        ? 'The password must be the same as the confirmation password'
                        : 'Password harus sama dengan konfirmasi password',
            });
            setError('confirm_password', {
                type: 'same_password',
                message:
                    locale === 'en'
                        ? 'The confirmation password must be the same as the password'
                        : 'Konfirmasi Password harus sama dengan password',
            });
            return;
        }
        const formData = {
            name: data?.name,
            email: data?.email,
            password: data?.password,
        };

        regis(formData);
    };

    return (
        <form
            className='mt-[32px] flex h-full w-full flex-col gap-y-[8px]'
            onSubmit={handleSubmit(handleRegisterAccount)}>
            <section className='w-full'>
                <InputField
                    disabled={loadingRegis}
                    label='Name'
                    type='text'
                    name='name'
                    {...register('name', {
                        required: registerLocale[locale]?.error?.nameField?.required,
                    })}
                />
                {errors?.name?.message ? (
                    <p className='text-red-500'>{errors?.name?.message}</p>
                ) : (
                    <div className='invisible block h-[24px]'></div>
                )}
            </section>
            <section className='w-full'>
                <InputField
                    disabled={loadingRegis}
                    label='Email'
                    type='email'
                    name='email'
                    {...register('email', {
                        required: registerLocale[locale]?.error?.emailField?.required,
                        pattern: {
                            value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                            message: registerLocale[locale]?.error?.emailField?.pattern,
                        },
                    })}
                />
                {errors?.email?.message ? (
                    <p className='text-red-500'>{errors?.email?.message}</p>
                ) : (
                    <div className='invisible block h-[24px]'></div>
                )}
            </section>
            <section className='w-full'>
                <InputField
                    disabled={loadingRegis}
                    passwordField
                    label='Password'
                    name='password'
                    {...register('password', {
                        required: registerLocale[locale]?.error?.passwordField?.required,
                        minLength: {
                            value: 8,
                            message: registerLocale[locale]?.error?.passwordField?.minLength,
                        },
                    })}
                />
                {errors?.password?.message ? (
                    <p className='text-red-500'>{errors?.password?.message}</p>
                ) : (
                    <div className='invisible block h-[24px]'></div>
                )}
            </section>
            <section className='w-full'>
                <InputField
                    disabled={loadingRegis}
                    passwordField
                    label={locale === 'en' ? 'Confirm Password' : 'Konfirmasi Password'}
                    name='konfirmasi_password'
                    {...register('confirm_password', {
                        required: registerLocale[locale]?.error?.confirmPasswordField?.required,
                        minLength: {
                            value: 8,
                            message: registerLocale[locale]?.error?.confirmPasswordField?.minLength,
                        },
                    })}
                />
                {errors?.confirm_password?.message ? (
                    <p className='text-red-500'>{errors?.confirm_password?.message}</p>
                ) : (
                    <div className='invisible block h-[24px]'></div>
                )}
            </section>

            <Button disabled={loadingRegis}>
                {loadingRegis && <Loader />} <span className='pl-[8px]'>{registerLocale[locale]?.button}</span>
            </Button>
        </form>
    );
};

export default RegisForm;
