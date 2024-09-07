import { Link } from "react-router-dom"

type TIndustryCard = {
    image: string,
    name: string,
    to: string
}

export const IndustryCard = ({ image, name, to }: TIndustryCard) => {
    return (
        <Link to={to} className="w-full h-[306px] relative group overflow-hidden rounded block">
            <div className="absolute inset-0 w-[212px] bg-black opacity-[0] group-hover:opacity-[.4] z-[1] rounded"></div>
            <img src={image} alt="tranos nigeria" className="w-[196px] less1100:w-[200px} less1200:w-[212px] h-full relative object-cover rounded industry__card__image" />
            <div className="absolute inset-0 z-[2] flex flex-col justify-between items-start p-[20px]">
                <span className="text-white font-[200] capitalize leading-[1.2]" dangerouslySetInnerHTML={{ __html: name }} />

                <button className="p-[3px_10px] bg-white text-tranos-primary text-[14px] font-[400]">Learn more</button>
            </div>
        </Link>
    )
}