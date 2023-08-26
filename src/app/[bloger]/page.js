'use client'
import { blogs } from '@/components/data';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useState } from 'react';
import { BsFillEnvelopePlusFill } from 'react-icons/bs';
import { MdOutlineBookmarkAdd } from 'react-icons/md';

const Page = () => {
    const pathname = usePathname()
    const [active, setActive] = useState(true)
    const blog = blogs.find(item => item.userName == pathname.slice(2,))
    const { id, person, userName, member, img, from, logo, title, date, time, comment, like, banner, details, typeOfCom } = blog
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
        <section className='flex  2xl:w-[50%]  lg:w-full w-[90%] mx-auto'>
            {/* left section */}
            <section className='lg:w-[70%] w-full'>
                <div className='xl:w-[80%] lg:w-[80%] mx-auto mt-12'>
                    {/* header  section*/}
                    <div>
                        <h1 className='text-3xl font-bold'>{person}</h1>
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
                                            <p className='text-[14px] text-[#949090]'>{item.date}</p>
                                            <h1 className='text-xl font-bold my-4'>{item.title}</h1>
                                            <p className='text-[16px]'>{item.details}</p>
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

                                        />
                                    </div>
                                </div>
                            )
                        }
                    </div>
                </div>
            </section>
            {/* right section */}
            <section className='w-[30%] lg:block hidden pt-10 px-10 border-l-[1px]'>
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
                    <div className='flex gap-4 mt-5 text-white'>
                        <button className="bg-green-600 px-4 py-2 rounded-[30px]">Follow</button>
                        <div className="w-10 h-10 bg-green-600  rounded-[30px] flex items-center justify-center">
                            <BsFillEnvelopePlusFill className="text-xl " />
                        </div>
                    </div>
                </div>
            </section>
        </section>
    );
};

export default Page;