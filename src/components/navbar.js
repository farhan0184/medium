
import Image from "next/image";
import Logo from '../../public/assets/images/logo.png'
import Link from "next/link";
import Script from "next/script";


export default function Navbar() {
    return (
        <div className="">
            
            <header className="bg-[#ffc017] border-b-[1px] border-black fixed top-0 left-0 w-full z-50">
                <div className="flex py-4 w-[90%] 2xl:w-[50%] mx-auto  ">
                    <div className="flex items-center xsm:w-[40%] w-[60%]">
                        <Image
                            src={Logo}
                            alt="Logo"
                            className="sm:w-[60%] w-full"
                            priority={true}
                        />
                    </div>
                    <div className="flex  justify-end items-center text-[14px] w-full">
                        <ul className="hidden md:flex gap-5 ">
                            <li><Link href={'#'}>Our story</Link></li>
                            <li><Link href={'#'}>Membership</Link></li>
                            <li><Link href={'#'}>Write</Link></li>
                        </ul>
                        <div className="flex">
                            <button className="hidden xsm:block py-2 mx-5">Sign In</button>
                            <button className="text-white bg-black py-2 px-3 rounded-[30px]">Get started</button>
                        </div>
                    </div>
                </div>
            </header>
        </div>
    )
}