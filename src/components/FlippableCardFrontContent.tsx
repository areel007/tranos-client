interface IFlippableCardFrontContent {
    img: string;
}

export const FlippableCardFrontContent = ({ img }: IFlippableCardFrontContent) => {
    return <img src={img} alt="tranos nigeria" className="w-full h-full" />
}