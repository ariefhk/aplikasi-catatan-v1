import Navbar from '../components/navbar/navbar';
import { Link } from 'react-router-dom';
import LoginForm from '../components/login/login-form';
import DefaultLayout from '../layouts/default-layout';

const Login = () => {
    return (
        <DefaultLayout>
            <Navbar />
            <section className='mx-auto mt-[60px] max-w-screen-lg py-[32px]'>
                <h1 className='text-[24px] font-bold leading-normal'>Yuk, login untuk menggunakan aplikasi</h1>
                <LoginForm className='my-[32px]' />
                <p className='text-[16px] leading-normal'>
                    Belum punya akun?
                    <Link to={'/register'} className='pl-[8px] underline hover:font-bold'>
                        Daftar di sini
                    </Link>
                </p>
            </section>
        </DefaultLayout>
    );
};

export default Login;
