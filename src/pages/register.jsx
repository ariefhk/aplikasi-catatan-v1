import { Link } from 'react-router-dom';
import Navbar from '../components/navbar/navbar';
import RegisForm from '../components/register/regis-form';
import DefaultLayout from '../layouts/default-layout';
import ContentLayout from '../layouts/content-layout';
import { useLocale } from '../contexts/locale-context';
import { registerLocale } from '../utils/locale-data';

const Register = () => {
    const { locale } = useLocale();

    return (
        <DefaultLayout className='overflow-y-auto'>
            <Navbar />
            <ContentLayout className='mx-auto h-max max-w-screen-lg pb-[32px]'>
                <h1 className='text-[26px] font-bold leading-normal text-baseBlack dark:text-baseWhite'>
                    {registerLocale[locale]?.title}
                </h1>
                <RegisForm />
                <p className='mt-[32px] text-[16px] leading-normal text-baseBlack dark:text-baseWhite'>
                    {registerLocale[locale]?.notHaveAccount?.prefix}
                    <Link to={'/login'} className='pl-[8px] underline hover:font-bold'>
                        {registerLocale[locale]?.notHaveAccount?.endfix}
                    </Link>
                </p>
            </ContentLayout>
        </DefaultLayout>
    );
};

export default Register;
