import Image from "next/image";

export default function PlayStore({ img, subtitle, title }) {
    return (
        <div className='flex gap-3 border-[1px] rounded-xl p-2'>
            <Image
                src={img}
                alt='google paly store'
                width={20}
            />
            <div className='text-white'>
                <p className='text-[10px]'>{subtitle}</p>
                <h1 className='text-[16px] font-bold'>{title}</h1>
            </div>
        </div>
    )
}