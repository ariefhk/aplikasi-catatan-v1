import Navbar from '../components/navbar/navbar';
import RegisForm from '../components/register/regis-form';
import DefaultLayout from '../layouts/default-layout';
import ContentLayout from '../layouts/content-layout';
import HaveAccount from '../components/have-account';
import TitlePage from '../components/title-page';

const Register = () => {
    return (
        <DefaultLayout className='overflow-y-auto'>
            <Navbar />
            <ContentLayout className='mx-auto h-max max-w-screen-lg pb-[32px]'>
                <TitlePage pageTitle={'register'} />
                <RegisForm />
                <HaveAccount />
            </ContentLayout>
        </DefaultLayout>
    );
};

export default Register;
