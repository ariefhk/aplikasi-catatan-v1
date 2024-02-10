import { Link } from 'react-router-dom';
import { MdAdd } from 'react-icons/md';

const AddNoteButton = () => {
    return (
        <Link
            to={'/note/new'}
            className='absolute bottom-[32px] right-[32px] flex h-[50px] w-[50px] items-center justify-center rounded-full bg-baseBlack text-baseWhite dark:border-baseWhite dark:bg-baseWhite'>
            <MdAdd className='h-[32px] w-[32px] text-baseWhite dark:text-baseBlack' />
        </Link>
    );
};

export default AddNoteButton;
