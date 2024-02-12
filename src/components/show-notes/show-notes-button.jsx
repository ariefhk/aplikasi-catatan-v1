import Button from '../button';
import { MdOutlineArchive, MdOutlineUnarchive } from 'react-icons/md';
import { FiTrash } from 'react-icons/fi';
import PropTypes from 'prop-types';

const ShowNotesButton = ({
    isShowButton,
    isArchive,
    isLoadingDelete,
    isLoadingArchive,
    onClickArchive,
    onClickDelete,
}) => {
    if (isShowButton) {
        return (
            <section className='absolute bottom-[32px] right-[32px] flex items-center gap-x-[16px]'>
                <Button
                    disabled={isLoadingArchive}
                    onClick={onClickArchive}
                    className='flex h-[50px] w-[50px] items-center justify-center rounded-full bg-baseBlack p-0 dark:border-baseWhite dark:bg-baseWhite'>
                    {isArchive ? (
                        <MdOutlineArchive className='h-[32px] w-[32px] text-baseWhite dark:text-baseBlack' />
                    ) : (
                        <MdOutlineUnarchive className='h-[32px] w-[32px] text-baseWhite dark:text-baseBlack' />
                    )}
                </Button>
                <Button
                    disabled={isLoadingDelete}
                    onClick={onClickDelete}
                    className='flex h-[50px]  w-[50px] items-center justify-center rounded-full bg-baseBlack p-0 dark:border-baseWhite dark:bg-baseWhite'>
                    <FiTrash className='h-[32px] w-[32px] text-baseWhite dark:text-baseBlack ' />
                </Button>
            </section>
        );
    }

    return false;
};

export default ShowNotesButton;

ShowNotesButton.propTypes = {
    isShowButton: PropTypes.bool,
    isArchive: PropTypes.bool,
    isLoadingDelete: PropTypes.bool,
    isLoadingArchive: PropTypes.bool,
    onClickArchive: PropTypes.func,
    onClickDelete: PropTypes.func,
};
