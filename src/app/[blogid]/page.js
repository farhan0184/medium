import BlogDetail from "@/components/blogdetail"
import BlogNavbar from "@/components/blognavbar"
import { blogs } from "@/components/data"
import LikeComment from "@/components/likecomment"
import ListenShare from "@/components/listenshare"
import Image from "next/image"
import { BsFillStarFill } from 'react-icons/bs'
import { HiOutlineHandRaised } from 'react-icons/hi2'
import { MdOutlineBookmarkAdd } from 'react-icons/md'

export default function Page({ params }) {
    const blog = blogs.find(item => item.id == params.blogid)
    const { id, person, member, img, from, logo, title, date, time, dayleft, comment, like, banner, details } = blog
    return (
        <div>
            {/* navbar */}
            <BlogNavbar />
            {/* blog section */}
            <div className="2xl:w-[50%] xl:w-[60%] lg:w-[70%] md:w-[90%] w-[85%]  mx-auto py-8">
                {/* blog header section */}
                <div>
                    {/* member or not */}
                    <p className={`text-[12px] ${member ? 'block' : 'hidden'} flex items-center gap-1`}><BsFillStarFill className='text-[#ffc017]' /> <span>Member-only story</span></p>
                    {/* title */}
                    <h1 className="md:text-5xl text-3xl font-semibold mt-5 mb-3">{title}</h1>
                    <p className="md:text-xl text-xl text-[#5d5f61]">{details}</p>
                    {/* user section */}
                    <div className="flex my-5 gap-4">
                        {/* left section user image and company logo */}
                        <div className="relative">
                            <div>
                                <div className="border-[2px] p-2 rounded-[30px]">
                                    <Image src={img} alt={person} className="w-9 rounded-[30px]" />
                                </div>
                                <div className="border-[2px] p-1  rounded-[30px] absolute -right-2 md:bottom-1 bottom-5 bg-gray-300">
                                    <Image
                                        src={logo}
                                        alt={from}
                                        className="w-4 rounded-[30px] bg-gray-300"
                                    />
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="flex gap-2">
                                <h3 className="text-[16px]">{person}</h3>
                                .
                                <button className="text-blue-800">Follow</button>
                            </div>
                            {/* user name, company name, time & date */}
                            <div className="flex md:flex-none flex-wrap gap-2 md:text-[14px] text-[12px] my-2 text-[#515157]">
                                <p><span>Published in </span><span className="text-black">{from}</span></p>
                                .
                                <p>{date}</p>
                                .
                                <p>{time}</p>
                            </div>

                        </div>
                    </div>

                    {/* follower, like, comment, video  */}
                    <div className="border-t-[1px]  border-b-[1px] py-4 px-5 text-[#939599] text-[14px]">
                        <div className="flex justify-between w-full">
                            {/* left section */}
                            <div className="md:flex gap-8 hidden">
                                <LikeComment isLike={true} item={like} />
                                <LikeComment isLike={false} item={comment} />
                            </div>
                            {/* right section */}
                            <div className="flex gap-8 items-center">
                                <MdOutlineBookmarkAdd className='text-2xl md:block hidden' />
                                <div className="flex gap-8">
                                    <ListenShare isListen={true} item={'Listen'} />
                                    <ListenShare isListen={false} item={'Share'} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                {/* blog details section */}
                <div >
                    <div className="my-16">
                        <Image
                            src={banner}
                            alt={`banner-${id}`}
                        />
                        <p className="text-[14px] text-center">Lorem ipsum dolor sit amet by {person}</p>
                    </div>
                    <BlogDetail />
                </div>
            </div>


        </div>
    )
}