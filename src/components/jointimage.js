import Image from 'next/image';
import React from 'react';

const JointImage = ({img,person,logo,from}) => {
    return (
        <div className="relative">
            <div>
                <div className="border-[2px] p-2 rounded-[30px]">
                    <Image src={img} alt={person} className="w-9 h-9 rounded-[30px]" />
                </div>
                <div className="border-[2px] p-1  rounded-[30px] absolute -right-2 bottom-1  bg-gray-300">
                    <Image
                        src={logo}
                        alt={from}
                        className="w-4 h-4 rounded-[30px] bg-gray-300"
                    />
                </div>
            </div>
        </div>
    );
};

export default JointImage;