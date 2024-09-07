import { Link } from "react-router-dom"

type TProductCard = {
    menu: string
    image: string
    to: string
}

export const ProductCard = ({ menu, image, to }: TProductCard) => {
    return (
        <Link to={to} className="w-full xl:w-[270px] h-[270px] p-[20px] block relative group">
            <div className="bg-black group-hover:bg-tranos-primary absolute inset-0 opacity-[.7] z-[1] group-hover:opacity-[.7]"></div>
            <img src={image} alt="tranos, thinking further" className="absolute inset-0 w-full h-full object-cover" />
            <div className="relative z-[2]">
                <span className="text-[16px] md:text-[18px] capitalize text-white leading-[1] font-[200]" dangerouslySetInnerHTML={{ __html: menu }} />
            </div>
        </Link>
    )
}