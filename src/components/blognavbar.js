import Image from "next/image";
import Medium from '../../public/assets/images/medium.png'
import { LuSearch } from 'react-icons/lu'
import { BsPencilSquare } from 'react-icons/bs'
import { BsPersonCircle } from 'react-icons/bs'
import { FiChevronDown } from 'react-icons/fi'
import Link from "next/link";
import NavSignLinks from "./navsignlinks";
const BlogNavbar = () => {
    return (
        <nav className="">
            {/* upper bar  */}
            <div className="lg:hidden">
                <div className="py-2 px-4 flex justify-end ">
                    <NavSignLinks />
                </div>
            </div>
            {/* main navbar */}
            <div className="border-[1px]">
                <div className="md:w-[96%] w-[85%] mx-auto py-3 flex gap-3 items-center ">
                    {/* medium img */}
                    <div>
                        <Image
                            src={Medium}
                            alt="medium"
                            width={45}
                        />
                    </div>
                    <div className="sm:block flex justify-end  w-full">
                        <div className="flex sm:justify-between items-center sm:gap-0 gap-3  sm:w-full ">
                            {/* input section & search bar */}
                            <div className="flex gap-2 items-center sm:border-[1px] px-2 rounded-[30px] sm;bg-[#d3d2d223]">
                                <LuSearch className="text-2xl" />
                                <input type="text" placeholder="Search Medium" className="w-40 py-1 rounded-e-[30px] bg-[#d3d2d200] placeholder:text-[13px] sm:block hidden" />
                            </div>
                            {/* link section */}
                            <div className="flex gap-7">
                                {/* write icon & link */}
                                <div className=" sm:block hidden">
                                    <div className="flex gap-1">
                                        <BsPencilSquare className="text-2xl" />
                                        <p className="text-[15px]">Write</p>
                                    </div>
                                </div>
                                {/* sing Up & in */}
                                <div className="lg:block hidden">
                                    <NavSignLinks />
                                </div>
                                {/* person section */}
                                <div>
                                    <button className="flex items-center">
                                        <BsPersonCircle className="text-2xl" />
                                        <FiChevronDown />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default BlogNavbar;