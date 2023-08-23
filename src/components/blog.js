import Image from "next/image";
import Link from "next/link";
import { MdOutlineBookmarkAdd } from 'react-icons/md';
import BlogDateSection from "./blogdatesection";


export default function Blog({item}) {
    return (
        <div className='grid grid-cols-3 mb-10 '>
            {/* blog left section */}
            <div className='col-span-2 w-[95%] '>
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
                    <Link href={`/${item.id}`} className='sm:text-xl text-[16px] font-bold pe-2 cursor-pointer'>{item.title}</Link>
                    <p className='text-[12px] sm:text-[14px]'>{item.details}</p>
                </div>
                {/* blog like, comment & add icon */}
                <div className='flex justify-between items-center'>
                    <BlogDateSection item={item} />
                    <MdOutlineBookmarkAdd className='sm:text-2xl text-[18px]' />
                </div>
            </div>
            <div>
                <Image
                    src={item.banner}
                    alt={`banner ${item.id}`}
                    className='h-full'
                />
            </div>
        </div>
    )
}