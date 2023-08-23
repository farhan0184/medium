import Link from "next/link";


const NavSignLinks = () => {
    return (
        <div className="lg:text-[15px] text-[12px]">
            <Link href={'#'} className="text-white bg-green-600 lg:me-3 lg:py-2 lg:px-3 me-2 py-1 px-2 rounded-[30px]">Sign Up</Link>
            <Link href={'#'}>Sign In</Link>
        </div>
    );
};

export default NavSignLinks;