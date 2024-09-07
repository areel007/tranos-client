interface IFlippableCardBackontent {
    img: string;
}

export const FlippableCardBackContent = ({ img }: IFlippableCardBackontent) => {
    return <div className="w-full h-full flex justify-center items-center relative">
        <img src={img} alt="tranos nigeria" className="absolute inset-0 w-full h-full" />

        <button className="bg-white p-[10px_20px] text-[14px] relative text-tranos-primary">Read more</button>
    </div>
}