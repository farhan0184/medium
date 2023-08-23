import { HiOutlineHandRaised } from 'react-icons/hi2'
import { FaRegComment } from 'react-icons/fa'

const LikeComment = ({ isLike, item }) => {
    return (

        <div className="flex gap-1 items-center">
            {isLike ? <HiOutlineHandRaised className="text-xl" /> : <FaRegComment className="text-xl" />}
            <p className="">{item}</p>
        </div>

    );
};

export default LikeComment;