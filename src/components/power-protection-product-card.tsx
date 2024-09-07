import { Link } from "react-router-dom";

type TProductCard = {
    title: string;
    img: string;
    to: string;
}

export const PowerProtectionProductCard = ({ title, img, to }: TProductCard) => {
    return <Link to={to}>
        <div className="w-full h-auto mb-[10px]">
            <img src={img} alt="tranos nigeria" className="w-full h-full object-cover" />
        </div>
        <span className="capitalize text-zinc-800 font-[500]">{title}</span>
    </Link>
}