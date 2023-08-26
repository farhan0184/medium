import React from 'react';
import { BsFillEnvelopePlusFill } from 'react-icons/bs';

const FollowMassage = () => {
    return (
        <div className='flex md:justify-normal justify-between gap-4 mt-5 text-white'>
            <button className="bg-green-600 px-4 py-2 rounded-[30px]">Follow</button>
            <div className="w-10 h-10 bg-green-600  rounded-[30px] flex items-center justify-center">
                <BsFillEnvelopePlusFill className="text-xl " />
            </div>
        </div>
    );
};

export default FollowMassage;