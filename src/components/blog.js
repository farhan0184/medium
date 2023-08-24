import { MdOutlineBookmarkAdd } from "react-icons/md";
import LikeComment from "./likecomment";
import { BsFillStarFill } from "react-icons/bs";
import Image from "next/image";


const Blog = ({item}) => {
    return (
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
                        <p className="text-[#c4c0c0]"> . {item.time} . {item.date}</p>
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
    );
};

export default Blog;