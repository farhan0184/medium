'use client'
import Navbar from '@/components/navbar'
import Medium from '../../public/assets/images/medium.png'
import Image from 'next/image'
import { BiTrendingUp } from 'react-icons/bi';
import { blogs, discovers, footerLinks } from '@/components/data';
import TrendBlog from '@/components/trendblogs';
import DiscoverItem from '@/components/discoveritems';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import BlogDateSection from '@/components/blogdatesection';



export default function Home() {
  const [fix, setFix] = useState(false)

  const setFixedSidebar = () => {
    if (window.scrollY >= 1000) {
      setFix(true)
    }
    else {
      setFix(false)
    }
  }

  useEffect(()=>{
    if (typeof window !== "undefined"){
      window.addEventListener('scroll', setFixedSidebar)
    }
  },[fix])

  return (
    <div>
      {/* navbar section */}
      <Navbar />
      {/* header section  */}
      <section className='bg-[#ffc017] 2xl:h-[25vw] xl:h-[85vh] md:h-[50vh]  lg:h-[65vh]  sm:h-[100vh] xsm:h-[95vh] h-[105vh]  border-b-[1px] border-black'>
        <div className='w-[90%] 2xl:w-[50%] mx-auto md:grid md:grid-cols-2 sm:flex  h-full'>
          <div className='h-full flex items-center '>
            <div >
              <h1 className='2xl:text-[4vw] xl:text-[5.6rem] lg:text-7xl md:text-[3.50rem] sm:text-[3.33rem] text-6xl mb-7'>Stay curious.</h1>
              <p className='2xl:text-[1.3vw]  xl:text-2xl lg:text-[1.16rem] md:text-[0.9rem] sm:text-[0.85rem] 2xl:w-[90%]  md:w-[80%] sm:w-[65%] 2xl:leading-[36px]'>Discover stories, thinking, and expertise from writers on any topic.</p>
              <button className='mt-7 px-16 py-3 bg-black text-white rounded-[30px] text-xl'>Start reading</button>
            </div>
          </div>
          <div className='h-full sm:block hidden'>
            <div className='w-full h-full flex items-center justify-center'>
              <Image
                src={Medium}
                alt='medium'
                className='md:w-[60%] sm:w-[90%]'
              />
            </div>
          </div>
        </div>
      </section>

      {/* trending blogs section */}
      <section className='  mt-20 border-b-[1px] border-[#d9d9dc]'>
        <div className='w-[90%] 2xl:w-[50%] mx-auto'>
          <div className='flex gap-3 items-center'>
            <div className='w-7 h-7 border-[1px]  border-black flex items-end rounded-[30px]'>
              <BiTrendingUp className='text-xl' />
            </div>
            <h1 className='text-[18px] font-semibold'>Trending on Medium</h1>
          </div>
          <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 my-8'>
            {
              blogs.filter(blog => blog.trend === true).map((trendBlog, idx) => (
                <TrendBlog key={idx} idx={idx} trendBlog={trendBlog} />
              ))
            }
          </div>
        </div>
      </section>

      {/* all blog section */}
      <section className='w-[90%] mx-auto 2xl:w-[50%]'>
        <div className='md:grid md:grid-cols-3 relative -z-50'>
          {/* blog section */}
          <div className='col-span-2 my-16'>
            <div className='md:w-[90%]'>
              {
                blogs.map(item => (
                  <div key={item.id} className='grid grid-cols-3 mb-10'>
                    {/* blog left section */}
                    <div className='col-span-2'>
                      {/* blog user section */}
                      <div className='flex gap-2 items-center'>
                         <Image
                            src={item.img}
                            alt={item.person}
                            width={20}

                         />
                         <p className='text-[12px] '><span className='font-bold'>{item.person}</span> in <span className='font-bold'>{item.from}</span></p>
                      </div>
                      {/* blog title and details */}
                      <div className='my-2'>
                         <h1 className='text-2xl font-bold pe-2'>{item.title}</h1>
                         <p>{item.details}</p>
                      </div>
                      {/* blog like, comment & add icon */}
                      <BlogDateSection item={item}/>
                    </div>
                    <div>
                      <Image
                        src={item.banner}
                        alt={`banner ${item.id}`}
                        className='h-full'
                      />
                    </div>
                  </div>
                ))
              }
            </div>
          </div>
          {/* discover more section */}
          <div className={`md:block hidden  my-16  ${fix ? 'fixed 2xl:top-[5%] top-[5%] w-[30%] 2xl:w-[17%] right-[5%] 2xl:right-[25%] ' : ''}`}>
            <div className='pb-5 border-b-[1px] border-[#d9d9dc] mb-7'>
              <h1 className='text-[18px] font-bold mb-4 '>Discover more of what matters to you</h1>
              <div className='flex gap-3 flex-wrap mb-4'>
                {
                  discovers.flatMap((item, idx) => (
                    <DiscoverItem key={idx} item={item} />
                  ))
                }
              </div>
              <Link href={'#'}><p className='text-green-700'>See more topics</p></Link>
            </div>
            <div className='flex flex-wrap gap-x-5 gap-y-2'>
              {
                footerLinks.flatMap((item, idx) =>
                  <p key={idx} className='text-[#656566] '>{item}</p>
                )
              }
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
