import { Link } from 'react-router-dom';
import Navbar from '../components/navbar/navbar';
import { useForm } from 'react-hook-form';
import { useRegister } from '../networks/auth';
import { useNavigate } from 'react-router-dom';

const Register = () => {
    const navigate = useNavigate();
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        mode: 'onChange',
    });

    const { mutate: regis } = useRegister({
        onSuccess: (dataRegis) => {
            alert('SUCCESS REGIS');
            console.log('Regis Data: ', dataRegis);
            navigate('/login', { replace: true });
        },
        onError: (errorRegis) => {
            alert('ERROR REGIS');
            console.log('Error Regis: ', errorRegis);
        },
    });

    const handleRegisterAccount = async (data) => {
        console.log(data);

        const formData = {
            name: data?.name,
            email: data?.email,
            password: data?.password,
        };

        regis(formData);
    };

    return (
        <main className='overflow-x-hidden'>
            <Navbar />
            <section className='mx-auto mt-[60px]  max-w-screen-lg py-[32px]'>
                <h1 className='text-[24px] font-bold leading-normal'>Isi form untuk mendaftar akun</h1>
                <form
                    className='my-[32px] flex h-full w-full flex-col gap-y-[8px]'
                    onSubmit={handleSubmit(handleRegisterAccount)}>
                    <div className='w-full'>
                        <div className='flex w-full flex-col gap-y-[4px]'>
                            <label htmlFor='name' className='text-[24px] font-light leading-normal'>
                                Name
                            </label>
                            <input
                                id='name'
                                type='text'
                                name='name'
                                {...register('name', {
                                    required: 'Nama tidak boleh kosong!',
                                })}
                                className=' h-[43px] rounded-[8px] border-2  px-[8px] text-[18px] font-semibold '
                            />
                        </div>
                        {errors?.name?.message ? (
                            <p className='text-red-500'>{errors?.name?.message}</p>
                        ) : (
                            <div className='invisible block h-[24px]'></div>
                        )}
                    </div>
                    <div className='w-full'>
                        <div className='flex w-full flex-col gap-y-[8px]'>
                            <label htmlFor='email' className='text-[24px] font-light leading-normal'>
                                Email
                            </label>
                            <input
                                id='email'
                                type='email'
                                name='email'
                                {...register('email', {
                                    required: 'Email tidak boleh kosong!',
                                    pattern: {
                                        value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                                        message: 'Format email tidak sesuai!',
                                    },
                                })}
                                className=' h-[43px] rounded-[8px] border-2  px-[8px] text-[18px] font-semibold '
                            />
                        </div>
                        {errors?.email?.message ? (
                            <p className='text-red-500'>{errors?.email?.message}</p>
                        ) : (
                            <div className='invisible block h-[24px]'></div>
                        )}
                    </div>
                    <div className='w-full'>
                        <div className=' flex w-full flex-col gap-y-[8px]'>
                            <label htmlFor='password' className='text-[24px] font-light leading-normal'>
                                Password
                            </label>
                            <input
                                id='password'
                                type='password'
                                name='password'
                                {...register('password', {
                                    required: 'Password tidak boleh kosong!',
                                    minLength: {
                                        value: 8,
                                        message: 'Jumlah Karaktek tidak boleh kurang dari 8!',
                                    },
                                })}
                                className='h-[43px] rounded-[8px] border-2 px-[8px] text-[18px] font-semibold'
                            />
                        </div>
                        {errors?.password?.message ? (
                            <p className='text-red-500'>{errors?.password?.message}</p>
                        ) : (
                            <div className='invisible block h-[24px]'></div>
                        )}
                    </div>
                    <div className='w-full'>
                        <div className='flex w-full flex-col gap-y-[8px]'>
                            <label htmlFor='confirm_password' className='text-[24px] font-light leading-normal'>
                                Confirm Password
                            </label>
                            <input
                                id='confirm_password'
                                type='password'
                                name='confirm_password'
                                {...register('confirm_password', {
                                    required: 'Password tidak boleh kosong!',
                                    minLength: {
                                        value: 8,
                                        message: 'Jumlah Karaktek tidak boleh kurang dari 8!',
                                    },
                                })}
                                className='h-[43px] rounded-[8px] border-2 px-[8px] text-[18px] font-semibold'
                            />
                        </div>
                        {errors?.confirm_password?.message ? (
                            <p className='text-red-500'>{errors?.confirm_password?.message}</p>
                        ) : (
                            <div className='invisible block h-[24px]'></div>
                        )}
                    </div>
                    <button
                        type='submit'
                        className='mt-[10px] flex h-[53px] w-full  items-center justify-center rounded-[8px] border-2 border-violet-700 bg-violet-700 p-[12px] text-[24px] font-bold leading-normal text-white hover:border-violet-700 hover:bg-white hover:text-violet-700'>
                        Register
                    </button>
                </form>
                <p className='text-[16px] leading-normal'>
                    Sudah punya akun?
                    <Link to={'/login'} className='pl-[8px] underline hover:font-bold'>
                        Login di sini
                    </Link>
                </p>
            </section>
        </main>
    );
};

export default Register;
