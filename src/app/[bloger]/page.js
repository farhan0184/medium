'use client'
import { blogs, footerLinks } from '@/components/data';
import FollowMassage from '@/components/followmassage';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import { MdOutlineBookmarkAdd } from 'react-icons/md';

const Page = () => {
    const [fix, setFix] = useState(false)
    const setFixedSidebar = () => {
        if (window.scrollY >= 52) {
            setFix(true)
        }
        else {
            setFix(false)
        }
    }
    useEffect(() => {
        if (typeof window !== "undefined") {
            window.addEventListener('scroll', setFixedSidebar)
        }
    }, [fix])
    const pathname = usePathname()
    const [active, setActive] = useState(true)
    const blog = blogs.find(item => item.userName == pathname.slice(2,))
    const { person, userName, img, like, details } = blog
    const links = [
        {
            id: 1,
            title: 'Home',
            link: '/@' + userName,
            isActive: active
        },
        {
            id: 2,
            title: 'About',
            link: '/@' + userName + '/about',
            isActive: !active
        },
    ]
    return (
        <section className='flex  2xl:w-[50%]  lg:w-full w-[90%] mx-auto relative'>
            {/* left section */}
            <section className='lg:w-[70%] w-full'>
                <div className='xl:w-[80%] lg:w-[80%] mx-auto mt-12'>
                    {/* header  section*/}
                    <div>
                        <div className='md:flex justify-between items-center'>
                            <h1 className='text-3xl font-bold'>{person}</h1>
                            <div className='lg:hidden md:block'>
                                <FollowMassage />
                            </div>
                        </div>

                        <div className={`flex gap-1 mt-14 border-b-[1px]`}>
                            {
                                links.map(item =>
                                    <div key={item.id} className={`me-4 pb-3 ${pathname === item.link || item.isActive ? 'border-b-[1px] border-black text-black' : 'text-gray-600'}`}>
                                        <Link onClick={() => active ? '' : setActive(!active)} href={item.link} className={`text-[14px] `}>{item.title}</Link>
                                    </div>
                                )
                            }
                        </div>
                    </div>
                    {/* lists of blog */}
                    <div className=''>
                        {
                            blogs.filter(item => item.userName === pathname.slice(2,)).map(item =>
                                <div key={item.id} className='my-16 flex'>
                                    <div className='w-[70%] pe-5'>
                                        {/* header section */}
                                        <div>
                                            <p className='sm:text-[14px] text-[12px] text-[#949090]'>{item.date}</p>
                                            <h1 className='sm:text-xl text-[16px]  font-bold sm:my-4 my-2'>{item.title}</h1>
                                            <p className='sm:text-[16px] text-[14px]'>{item.details}</p>
                                        </div>
                                        {/* footer section */}
                                        <div className='mt-5 flex justify-between '>
                                            <div className='text-[14px] flex gap-4 items-center'>
                                                <p className=' px-2 py-1 rounded-[30px] bg-slate-200'>{item.from}</p>
                                                <p>{item.time}</p>
                                            </div>
                                            <MdOutlineBookmarkAdd className='sm:text-2xl text-[18px]' />

                                        </div>

                                    </div>
                                    {/* item image section */}
                                    <div className='w-[30%]'>
                                        <Image
                                            src={item.banner}
                                            alt={item.person}
                                            className='h-[80%]'
                                        />
                                    </div>
                                </div>
                            )
                        }
                    </div>
                </div>
            </section>
            {/* right section */}
            <section className={`w-[30%] h-[100vh] lg:block hidden pt-10 md:px-10 xl:px-5  border-l-[1px]  ${fix && 'sticky right-0 top-0  w-[30%]   '}`}>
                <div className='w-full  relative h-full'>
                    {/* header section */}

                    <Image
                        src={img}
                        alt={person}
                        className='w-16 h-16 p-2 border-[1px] rounded-[30px]'
                    />
                    <div className='mt-5'>
                        <h1 className='text-[18px] font-bold'>{person}</h1>
                        <div className='text-[16px] text-[#999595]'>
                            <p className='my-3 '>{like} follower</p>
                            <p>{details}</p>
                        </div>
                        <FollowMassage />
                    </div>

                    {/* footer section */}
                    <div className='flex flex-wrap fixed gap-2  bottom-0 md:w-[23%] xl:w-[27%] 2xl:w-[13.4%]  py-2  '>
                        {
                            footerLinks.flatMap((item, idx) =>
                                <Link href={'#'} key={idx} className='text-[13px] text-[#656566] hover:text-slate-900'>{item}</Link>
                            )
                        }
                    </div>
                </div>
            </section>
        </section>
    );
};

export default Page;