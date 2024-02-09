import { Link } from 'react-router-dom';
import Navbar from '../components/navbar/navbar';
import RegisForm from '../components/register/regis-form';

const Register = () => {
    return (
        <main className='overflow-x-hidden'>
            <Navbar />
            <section className='mx-auto mt-[60px]  max-w-screen-lg py-[32px]'>
                <h1 className='text-[24px] font-bold leading-normal'>Isi form untuk mendaftar akun</h1>
                <RegisForm />
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
