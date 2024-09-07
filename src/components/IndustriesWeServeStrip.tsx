interface IIndustriesWeServeStrip {
    img?: string;
    text: string;
    background?: string;
}

export const IndustriesWeServeStrip = ({ img, text, background }: IIndustriesWeServeStrip) => {
    return <div className={`relative flex items-center h-[200px] ${img ? 'before:absolute before:inset-0 before:bg-tranos-primary before:opacity-[.5] before:z-[1]' : ''}`} style={{
        backgroundColor: `${background ? background : ''}`
    }}>
        {img && <img src={img} alt={text} className="w-full h-full object-cover absolute inset-0" />}
        <div className="max-w-[1100px] w-[90%] mx-auto relative z-[2]">
            <span className="capitalize text-white text-[18px] md:text-[22px] lg:text-[24px]">{text}</span>
        </div>
    </div>
}