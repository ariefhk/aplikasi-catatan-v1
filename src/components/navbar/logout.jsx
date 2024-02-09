import { IoLogOutOutline } from 'react-icons/io5';
import { useAuth } from '../../contexts/auth-context';

const Logout = () => {
    const { deleteToken, token } = useAuth();

    if (token) {
        return <IoLogOutOutline className='h-[30px] w-[30px] cursor-pointer' onClick={() => deleteToken()} />;
    }

    return false;
};

export default Logout;
