interface IIWServeTitle {
    text: string;
}

export const IWServeTitle = ({ text }: IIWServeTitle) => {
    return <p className="border-l-[3px] border-blue-400 text-[18px] md:text-[20px] lg:text-[22px] text-zinc-800 font-[600] pl-[10px] leading-[1] mb-[10px]">{text}</p>
}