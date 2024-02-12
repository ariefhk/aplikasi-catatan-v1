import React from 'react';
import { registerLocale, loginLocale } from '../utils/locale-data';
import { useLocale } from '../contexts/locale-context';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const HaveAccount = ({ isLogin }) => {
    const { locale } = useLocale();

    if (isLogin) {
        return (
            <p className='mt-[32px] text-[16px] leading-normal text-baseBlack dark:text-baseWhite'>
                {loginLocale[locale]?.notHaveAccount?.prefix}
                <Link to={'/register'} className='pl-[8px] underline hover:font-bold'>
                    {loginLocale[locale]?.notHaveAccount?.endfix}
                </Link>
            </p>
        );
    }

    return (
        <p className='mt-[32px] text-[16px] leading-normal text-baseBlack dark:text-baseWhite'>
            {registerLocale[locale]?.notHaveAccount?.prefix}
            <Link to={'/login'} className='pl-[8px] underline hover:font-bold'>
                {isLogin ? loginLocale[locale]?.notHaveAccount?.endfix : registerLocale[locale]?.notHaveAccount?.endfix}
            </Link>
        </p>
    );
};

export default HaveAccount;

HaveAccount.propTypes = {
    isLogin: PropTypes?.bool,
};
