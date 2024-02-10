import { useForm } from 'react-hook-form';
import { useRegister } from '../../networks/auth';
import { useNavigate } from 'react-router-dom';
import { InputField } from '../input';
import Button from '../button';
import Loader from '../loader';

const RegisForm = () => {
    const navigate = useNavigate();
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        mode: 'onChange',
    });

    const { isPending: loadingRegis, mutate: regis } = useRegister({
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
                        required: 'Nama tidak boleh kosong!',
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
            </section>
            <section className='w-full'>
                <InputField
                    disabled={loadingRegis}
                    passwordField
                    label='Password'
                    name='password'
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
            <section className='w-full'>
                <InputField
                    disabled={loadingRegis}
                    passwordField
                    label='Confirm Password'
                    name='konfirmasi_password'
                    {...register('confirm_password', {
                        required: 'Password tidak boleh kosong!',
                        minLength: {
                            value: 8,
                            message: 'Jumlah Karaktek tidak boleh kurang dari 8!',
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
                {loadingRegis && <Loader />} <span className='pl-[8px]'>Register</span>
            </Button>
        </form>
    );
};

export default RegisForm;
