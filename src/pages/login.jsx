import Navbar from '../components/navbar/navbar';
import { Link } from 'react-router-dom';
import LoginForm from '../components/login/login-form';
import DefaultLayout from '../layouts/default-layout';
import ContentLayout from '../layouts/content-layout';
import { useLocale } from '../contexts/locale-context';
import { loginLocale } from '../utils/locale-data';

const Login = () => {
    const { locale } = useLocale();
    return (
        <DefaultLayout>
            <Navbar />
            <ContentLayout className=' mx-auto mt-[60px] h-max max-w-screen-lg flex-none py-[32px] pb-0'>
                <h1 className='text-[26px] font-bold leading-normal text-baseBlack dark:text-baseWhite'>
                    {loginLocale[locale]?.title}
                </h1>
                <LoginForm className='my-[32px]' />
                <p className='text-[16px] leading-normal text-baseBlack dark:text-baseWhite'>
                    {loginLocale[locale]?.notHaveAccount?.prefix}
                    <Link to={'/register'} className='pl-[8px] underline hover:font-bold'>
                        {loginLocale[locale]?.notHaveAccount?.endfix}
                    </Link>
                </p>
            </ContentLayout>
        </DefaultLayout>
    );
};

export default Login;
