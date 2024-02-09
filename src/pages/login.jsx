import Navbar from '../components/navbar';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useLogin } from '../networks/auth';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/auth-context';
import { PasswordInput } from '../components/input';
import Label from '../components/label';

const Login = () => {
    const { setToken } = useAuth();

    const navigate = useNavigate();
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        mode: 'onChange',
    });

    const {
        // data: loginData,
        // isPending: isLoadingLogin,
        mutate: login,
    } = useLogin({
        onSuccess: (dataLogin) => {
            alert('SUCCESS LOGIN');
            console.log('Login Data: ', dataLogin);
            const token = dataLogin?.data?.accessToken;
            setToken(token);
            navigate('/', { replace: true });
        },
        onError: (errorLogin) => {
            alert('ERROR LOGIN');
            console.log('Error Login: ', errorLogin);
        },
    });

    const handleLoginAccount = async (data) => {
        console.log(data);

        const formData = {
            email: data?.email,
            password: data?.password,
        };

        login(formData);
    };

    return (
        <main className='overflow-x-hidden'>
            <Navbar />
            <section className='mx-auto mt-[60px] max-w-screen-lg py-[32px]'>
                <h1 className='text-[24px] font-bold leading-normal'>Yuk, login untuk menggunakan aplikasi</h1>
                <form className='my-[32px] flex h-full w-full flex-col gap-y-[8px]' onSubmit={handleSubmit(handleLoginAccount)}>
                    <div className='w-full '>
                        <div className='flex w-full flex-col gap-y-[4px]'>
                            <Label htmlFor='email'>Email</Label>
                            <PasswordInput
                                name='email'
                                type='email'
                                {...register('email', {
                                    required: 'Email tidak boleh kosong!',
                                    pattern: {
                                        value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                                        message: 'Format email tidak sesuai!',
                                    },
                                })}
                            />
                        </div>
                        {errors?.email?.message ? (
                            <p className='text-red-500'>{errors?.email?.message}</p>
                        ) : (
                            <div className='invisible block h-[24px]'></div>
                        )}
                    </div>
                    <section className='w-full'>
                        <div className='flex w-full flex-col gap-y-[4px]'>
                            <Label htmlFor='password'>Password</Label>
                            <PasswordInput
                                {...register('password', {
                                    required: 'Password tidak boleh kosong!',
                                    minLength: {
                                        value: 8,
                                        message: 'Jumlah Karaktek tidak boleh kurang dari 8!',
                                    },
                                })}
                            />
                        </div>
                        {errors?.password?.message ? (
                            <p className='text-red-500'>{errors?.password?.message}</p>
                        ) : (
                            <div className='invisible block h-[24px]'></div>
                        )}
                    </section>
                    {/* <Select label='Age' {...register('Age')} /> */}
                    <button
                        type='submit'
                        className='mt-[10px] flex h-[53px] w-full  items-center justify-center rounded-[8px] border-2 border-violet-700 bg-violet-700 p-[12px] text-[24px] font-bold leading-normal text-white hover:border-violet-700 hover:bg-white hover:text-violet-700'>
                        Login
                    </button>
                </form>
                <p className='text-[16px] leading-normal'>
                    Belum punya akun?
                    <Link to={'/register'} className='pl-[8px] underline hover:font-bold'>
                        Daftar di sini
                    </Link>
                </p>
            </section>
        </main>
    );
};

export default Login;
