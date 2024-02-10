import { useGetUserLogged } from '../../networks/auth';
import { useAuth } from '../../contexts/auth-context';

const LoggedUser = () => {
    const { token } = useAuth();
    const { data, isLoading } = useGetUserLogged(token);

    if (token) {
        if (isLoading) {
            return (
                <h1 className='text-[18px] font-medium leading-normal text-baseBlack dark:text-baseWhite'>
                    Sedang Memuat User...
                </h1>
            );
        }

        return (
            <h1 className='text-[18px] font-medium leading-normal text-baseBlack dark:text-baseWhite'>
                {data?.data?.name}
            </h1>
        );
    }

    return false;
};

export default LoggedUser;
