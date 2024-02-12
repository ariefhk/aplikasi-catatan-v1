import { Navbar } from '../components/navbar';
import LoginForm from '../components/login/login-form';
import DefaultLayout from '../layouts/default-layout';
import ContentLayout from '../layouts/content-layout';
import HaveAccount from '../components/have-account';
import TitlePage from '../components/title-page';

const Login = () => {
    return (
        <DefaultLayout>
            <Navbar />
            <ContentLayout className=' mx-auto mt-[60px] h-max max-w-screen-lg flex-none py-[32px] pb-0'>
                <TitlePage pageTitle={'login'} />
                <LoginForm className='my-[32px]' />
                <HaveAccount isLogin />
            </ContentLayout>
        </DefaultLayout>
    );
};

export default Login;
