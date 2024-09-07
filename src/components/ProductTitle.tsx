interface IProductTitle {
    title: string;
    customStyles?: string;
}

export const ProductTitle = ({ title, customStyles }: IProductTitle) => {
    return <span className={`font-[600] border-l-[2px] pl-[10px] capitalize block mb-[20px] ${customStyles}`}>{title}</span>
}