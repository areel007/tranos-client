type TBanner = {
    img: string;
}

export const ProductBanner = ({ img }: TBanner) => {
    return (
        <img src={img} alt="tranos nigeria" className="w-full" />
    )
}