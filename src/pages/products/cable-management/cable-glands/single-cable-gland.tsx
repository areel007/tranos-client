import { Strip } from "../../../../components/Strip";
import Banner from "../../../../assets/images/cable-inner-banner.jpg"
import { ProductTabStrip } from "../../../../components/ProductTabStrip";
import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";

export const SingleCableGland = () => {
    const location = useLocation()
    const { item } = location.state || {}

    useEffect(() => {
        window.scrollTo(0, 0)
    })

    return (

        <main>
            <div className="h-[50px] lg:h-[70px]"></div>
            <Strip img={Banner} title="Cable Management & Support System" />
            <ProductTabStrip tabs={<p>
                <Link to="/products/cable-management/trac" className={`${location.pathname === "/products/cable-management/trac" ? 'text-tranos-primary' : 'text-zinc-700'}`}>Tranos Trac</Link> | <Link to="/products/cable-management/eris" className={`${location.pathname === "/products/cable-management/eris" ? 'text-tranos-primary' : 'text-zinc-700'}`}>Tranos Eris</Link> | <Link to="/products/cable-management/ellis" className={`${location.pathname === "/products/cable-management/ellis" ? 'text-tranos-primary' : 'text-zinc-700'}`}>Tranos Ellis</Link> | <Link to="/products/cable-management/cable-glands" className={`${location.pathname === "/products/cable-management/cable-glands" ? 'text-tranos-primary' : 'text-zinc-700'}`}>Cable Glands</Link>
            </p>} />

            <div className="py-[30px] md:py-[40px] lg:py-[60px] max-w-[1100px] w-[90%] mx-auto">
                <span className="block text-[18px] md:text-[22px] lg:text-[26px] font-[600] text-zinc-800 mb-[20px]">{item.name}</span>

                <div className="grid grid-cols-1 lg:grid-cols-[400px_1fr] gap-[20px]">
                    <img src={item.img} alt="tranos nigeria" className="w-full" />

                    <div>
                        <p className="font-[300] leading-[1.8] mb-[40px] text-zinc-700">
                            {item.description.desc}
                        </p>

                        <div className="w-full border border-zinc-300 rounded overflow-hidden max-w-[450px]">
                            <div className="grid grid-cols-[3fr_1fr] p-[20px] bg-gray-200">
                                <div className="text-zinc-700">
                                    PRODUCT
                                </div>

                                <div className="text-zinc-700">
                                    CODE
                                </div>
                            </div>

                            {item.description.features.map((product: any, i: number) => <div key={i} className="grid grid-cols-[3fr_1fr] gap-[20px] p-[20px] border-b border-gray-300">
                                <div className="text-zinc-700 font-[500]">
                                    {product.product}
                                </div>

                                <div className="text-zinc-700">
                                    {product.code}
                                </div>
                            </div>)}
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}