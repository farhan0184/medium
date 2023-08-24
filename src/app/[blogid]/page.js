import BlogDetail from "@/components/blogdetail"
import BlogNavbar from "@/components/blognavbar"
import { blogs } from "@/components/data"
import JointImage from "@/components/jointimage"
import LikeComment from "@/components/likecomment"
import ListenShare from "@/components/listenshare"
import Image from "next/image"
import { BsFillStarFill } from 'react-icons/bs'
import { MdOutlineBookmarkAdd } from 'react-icons/md'
import { BsFillEnvelopePlusFill } from 'react-icons/bs'

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
                        <JointImage img={img} person={person} logo={logo} from={from} />
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

            {/* footer section */}
            <div className='bg-[#f9f9f9]'>
                <div className='2xl:w-[50%] xl:w-[60%] lg:w-[70%] md:w-[90%] w-[85%]  mx-auto py-8'>
                    {/* header */}
                    <div className=" border-b-[1px] pb-10">
                        {/* image */}
                        <div className=" h-[60px] w-[60px]">
                            <JointImage img={img} person={person} logo={logo} from={from} />
                        </div>
                        {/* details */}
                        <div className="md:my-5 my-3 md:flex md:justify-between  md:static relative">
                            <div>
                                <h1 className="text-2xl font-bold ">{person}</h1>
                                <p className="text-[14px] ">{like} Followers <span className="text-gray-400">· Editor for</span> {from}.</p>
                            </div>
                            <div className="text-white flex items-center justify-end gap-4 md:w-[20%] w-[140px] md:static absolute -top-16 right-0">
                                <button className="bg-gray-600 px-4 py-2 rounded-[30px]">Follow</button>
                                <div className="w-10 h-10 bg-gray-600  rounded-[30px] flex items-center justify-center">
                                    <BsFillEnvelopePlusFill className="text-xl " />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* this person another blog */}
                    <p className="text-[16px] font-semibold my-10">More from Marlon Weems and The Journeyman.</p>
                    <div className="grid sm:grid-cols-2 grid-cols-1 gap-10">
                        {
                            blogs.filter(item => item.person === person).map(item =>
                                <div key={item.id} className="">
                                    <div>
                                        <Image
                                            src={item.banner}
                                            alt={item.person}
                                            className="h-[200px]"
                                        />
                                    </div>
                                    <div className="my-3 relative h-[240px]">
                                        <div>
                                            <div className="flex gap-2 items-center">
                                                <div className="bg-slate-300 w-7 h-7 flex items-center justify-center rounded-[30px]"><Image src={item.img} alt={item.person} className="w-5 h-5 rounded-[30px]" /></div>
                                                <p className="text-[14px]">{item.person} <span className=""> in </span> {item.from}</p>
                                            </div>
                                            <div className="my-4">
                                                <h1 className="text-2xl font-bold mb-2">{item.title}</h1>
                                                <p className="text-[16px] text-[#b3afaf] text-justify">{item.details.slice(0, 80)}...</p>
                                            </div>
                                        </div>
                                        <div className="absolute bottom-0 w-full">
                                            <div className="text-[12px] my-3 flex items-center">
                                                <BsFillStarFill className='text-[#ffc017]' />
                                                <p className="text-[#c4c0c0]"> . {time} . {date}</p>
                                            </div>
                                            <div className="flex justify-between items-center">
                                                <div className="flex gap-4 ">
                                                    <LikeComment isLike={true} item={item.like} />
                                                    <LikeComment isLike={false} item={item.comment} />
                                                </div>
                                                <MdOutlineBookmarkAdd className='text-2xl' />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        }
                    </div>

                </div>

            </div>
        </div>
    )
}