type TStrip = {
    img: string;
    title: string;
}

export const Strip = ({ img, title }: TStrip) => {
    return (
        <div className="h-[200px] relative before:absolute before:inset-0 before:bg-tranos-primary before:opacity-[.6] before:z-[2] flex items-center">
            <img src={img} alt="tranos nigeria" className="absolute z-[1] w-full h-full object-cover" />
            <div className="max-w-[1100px] w-[90%] mx-auto relative z-[3]">
                <span className="text-white text-[20px] md:text-[28px]">{title}</span>
            </div>
        </div>
    )
}