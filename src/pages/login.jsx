import Navbar from '../components/navbar/navbar';
import { Link } from 'react-router-dom';
import LoginForm from '../components/login/login-form';
import DefaultLayout from '../layouts/default-layout';
import ContentLayout from '../layouts/content-layout';

const Login = () => {
    return (
        <DefaultLayout>
            <Navbar />
            <ContentLayout className=' mx-auto mt-[60px] h-max max-w-screen-lg flex-none py-[32px] pb-0'>
                <h1 className='text-[26px] font-bold leading-normal text-baseBlack dark:text-baseWhite'>
                    Yuk, login untuk menggunakan aplikasi
                </h1>
                <LoginForm className='my-[32px]' />
                <p className='text-[16px] leading-normal text-baseBlack dark:text-baseWhite'>
                    Belum punya akun?
                    <Link to={'/register'} className='pl-[8px] underline hover:font-bold'>
                        Daftar di sini
                    </Link>
                </p>
            </ContentLayout>
        </DefaultLayout>
    );
};

export default Login;
