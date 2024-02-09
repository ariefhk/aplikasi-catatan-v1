import { useForm } from 'react-hook-form';
import { useLogin } from '../../networks/auth';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../contexts/auth-context';
import { InputField } from '../../components/input';
import Button from '../../components/button';
import Swal from 'sweetalert2';
import Loader from '../../components/loader';
import { cn } from '../../utils/tailwind-merge';
import PropTypes from 'prop-types';

const LoginForm = ({ className }) => {
    const { setToken } = useAuth();
    const navigate = useNavigate();
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        mode: 'onChange',
    });

    const { isPending: isLoadingLogin, mutate: login } = useLogin({
        onSuccess: (dataLogin) => {
            // console.log('Login Data: ', dataLogin);
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
            // console.log('Error Login: ', errorLogin);
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

        // console.log('Form Data: ', data);

        login(formData);
    };

    return (
        <form
            className={cn('flex h-full w-full flex-col gap-y-[8px]', className)}
            onSubmit={handleSubmit(handleLoginAccount)}>
            <div className='w-full'>
                <InputField
                    label='Email'
                    name='email'
                    type='email '
                    disabled={isLoadingLogin}
                    {...register('email', {
                        required: 'Email tidak boleh kosong!',
                        pattern: {
                            value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                            message: 'Format email tidak sesuai!',
                        },
                    })}
                />
                {errors?.email?.message ? (
                    <p className='text-red-500'>{errors?.email?.message}</p>
                ) : (
                    <div className='invisible block h-[24px]'></div>
                )}
            </div>
            <section className='w-full'>
                <InputField
                    passwordField
                    label='Password'
                    name='password'
                    disabled={isLoadingLogin}
                    {...register('password', {
                        required: 'Password tidak boleh kosong!',
                        minLength: {
                            value: 8,
                            message: 'Jumlah Karaktek tidak boleh kurang dari 8!',
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
                {isLoadingLogin && <Loader />} <span className='pl-[8px]'>Login</span>
            </Button>
        </form>
    );
};

LoginForm.propTypes = {
    className: PropTypes.string,
};

export default LoginForm;
