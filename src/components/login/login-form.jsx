import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useForm } from 'react-hook-form';
import { useAuth } from '../../contexts/auth-context';
import { useLocale } from '../../contexts/locale-context';
import { useLogin } from '../../networks/auth';
import { cn } from '../../utils/tailwind-merge';
import { loginLocale } from '../../utils/locale-data';
import { InputField } from '../../components/input';
import Button from '../../components/button';
import Loader from '../../components/loader';

const LoginForm = ({ className }) => {
    const { setToken } = useAuth();
    const navigate = useNavigate();
    const { locale } = useLocale();
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        mode: 'onChange',
    });

    const { isPending: isLoadingLogin, mutate: login } = useLogin({
        onSuccess: (dataLogin) => {
            const tokenFromAPI = dataLogin?.data?.accessToken;
            setToken(tokenFromAPI);
            Swal.fire({
                icon: 'success',
                title: 'Berhasil Login',
                text: `Selamat Anda berhasil login!`,
                timerProgressBar: true,
                timer: 1300,
            });
            navigate('/', { replace: true });
        },
        onError: (errorLogin) => {
            Swal.fire({
                icon: 'error',
                title: 'Gagal Login',
                text: `Maaf, Anda gagal untuk login!`,
                timerProgressBar: true,
                timer: 1300,
            });
        },
    });

    const handleLoginAccount = async (data) => {
        const formData = {
            email: data?.email,
            password: data?.password,
        };

        login(formData);
    };

    return (
        <form
            className={cn('flex h-full w-full flex-col gap-y-[8px]', className)}
            onSubmit={handleSubmit(handleLoginAccount)}>
            <section className='w-full'>
                <InputField
                    label='Email'
                    name='email'
                    type='email '
                    disabled={isLoadingLogin}
                    {...register('email', {
                        required: loginLocale[locale]?.error?.emailField?.required,
                        pattern: {
                            value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                            message: loginLocale[locale]?.error?.emailField?.pattern,
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
                    passwordField
                    label='Password'
                    name='password'
                    disabled={isLoadingLogin}
                    {...register('password', {
                        required: loginLocale[locale]?.error?.passwordField?.required,
                        minLength: {
                            value: 8,
                            message: loginLocale[locale]?.error?.passwordField?.minLength,
                        },
                    })}
                />
                {errors?.password?.message ? (
                    <p className='text-red-500'>{errors?.password?.message}</p>
                ) : (
                    <div className='invisible block h-[24px]'></div>
                )}
            </section>
            <Button disabled={isLoadingLogin} type='submit'>
                {isLoadingLogin && <Loader />} <span className='pl-[8px]'>{loginLocale[locale]?.button}</span>
            </Button>
        </form>
    );
};

LoginForm.propTypes = {
    className: PropTypes.string,
};

export default LoginForm;
