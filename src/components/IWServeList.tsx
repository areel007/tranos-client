import { Link } from "react-router-dom";

interface ICategory {
    categoryName: string;
    products: {
        productName: string;
        productUrl: string;
    }[];
}

interface IIndustry {
    industry: {
        name: string;
        to: string;
    }
    categories: ICategory[]
}

interface IIWServeList {
    industries: IIndustry[]
}

export const IWServeList = ({ industries }: IIWServeList) => {
    return <div className="grid grid-cols-1 md:grid-cols-2 gap-[20px] md:gap-[20px_100px]">
        {industries.map((item, i) => <div key={i}>
            <p className="font-[600] border-b border-tranos-primary text-tranos-primary text-[16px] md:text-[18px] pb-[5px] mb-[20px]">
                <Link to={item.industry.to}>{item.industry.name}</Link>
            </p>

            {item.categories.map((category, i) => <div key={i} className="mb-[20px]">
                <span className="font-[600] text-[14px] md:text-[16px] text-zinc-800">{category.categoryName}</span>

                <ul className="ml-[20px] list-disc font-[300] leading-[1.8] text-[14px] md:text-[16px] text-zinc-800">
                    {category.products.map((product, i) => <li key={i}>
                        <Link to={product.productUrl} className="hover:underline">{product.productName}</Link>
                    </li>)}
                </ul>
            </div>)}
        </div>)}
    </div>
}