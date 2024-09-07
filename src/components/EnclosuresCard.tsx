import { Link } from "react-router-dom";
import "../assets/custom-css/EnclosuresCard.css"

interface IEnclosuresCard {
    img: string;
    title: string;
    to: string;
}

export const EnclosuresCard = ({ img, title, to }: IEnclosuresCard) => {
    return (
        <Link to={to} className="w-full relative block before:absolute before:inset-0 before:bg-tranos-primary before:opacity-[.6] before:z-[1] enclosures__card">
            <img src={img} alt="tranos enclosures" className="absolute inset-0 w-full" />
            <div className="relative z-[2] p-[20px]">
                <span dangerouslySetInnerHTML={{ __html: title }} className="text-white text-[14px] md:text-[16px] leading-[1] font-[200] block" />
            </div>
        </Link>
    )
}