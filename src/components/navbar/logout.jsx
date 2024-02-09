import { IoLogOutOutline } from 'react-icons/io5';
import { useNavigate } from 'react-router-dom';
import { deleteStorageData, getStorageData } from '../../utils/local-storage';
import { cn } from '../../utils/tailwind-merge';
import PropTypes from 'prop-types';
import Button from '../button';
import { useEffect } from 'react';
import { useAuth } from '../../contexts/auth-context';

const Logout = ({ className }) => {
    const { deleteToken, token } = useAuth();

    if (token) {
        return (
            <button className={cn(className)} onClick={() => deleteToken()}>
                <IoLogOutOutline className='h-[30px] w-[30px] cursor-pointer' />
            </button>
        );
    }

    return false;
};

Logout.propTypes = {
    className: PropTypes.string,
};

export default Logout;
