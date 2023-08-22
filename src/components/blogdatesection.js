import { BsFillStarFill } from 'react-icons/bs';
export default function BlogDateSection({item}) {
    return (
        <div className='flex gap-1 items-center text-[14px]'>
            <p>{item.date}</p>.
            <p>{item.time}</p>
            {
                item.member && <BsFillStarFill className='text-[#ffc017]' />
            }
        </div>
    )
}