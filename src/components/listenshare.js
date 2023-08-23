import { BsPlayCircle } from 'react-icons/bs';
import { MdOutlineIosShare } from 'react-icons/md';

const ListenShare = ({isListen, item}) => {
    return (
        <div className='flex items-center gap-2 md:border-0 border-[1px] border-[#939599] md:rounded-0 rounded-[30px] md:px-0 md:py-0 px-3 py-2'>
            {isListen ? <BsPlayCircle className="text-xl" /> : <MdOutlineIosShare className="text-xl" />}
            <p className='md:hidden block'>{item}</p>
        </div>
    );
};

export default ListenShare;