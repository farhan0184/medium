import Image from "next/image";

import BlogDateSection from "./blogdatesection";

export default function TrendBlog({ trendBlog, idx }) {
  return (
    <div className='flex gap-3 lg:mb-2 mb-5'>
      <div>
        <h1 className='text-3xl text-[#d9d9dc]'>0{idx + 1}</h1>
      </div>
      <div className=''>
        <div className='flex gap-1 items-center mb-3'>
          <Image
            src={trendBlog.logo}
            alt={trendBlog.from}
            width={30}
          />
          <p className="text-[12px]"><span className="font-bold">{trendBlog.person}</span> in <span className="font-bold">{trendBlog.from}</span></p>

        </div>
        <h1 className='text-xl font-bold mb-3'>{trendBlog.title}</h1>
        <BlogDateSection item={trendBlog} />
      </div>
    </div>
  )
}