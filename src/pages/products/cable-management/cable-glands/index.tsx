import { Strip } from "../../../../components/Strip";
import Banner from "../../../../assets/images/cable-inner-banner.jpg"
import { ProductTabStrip } from "../../../../components/ProductTabStrip";
import { Link } from "react-router-dom";
import { CABLEGLANDS } from "../../../../utils/products";


export const CableGlands = () => <main>
    <div className="h-[50px] lg:h-[70px]"></div>
    <Strip img={Banner} title="Cable Management & Support System" />
    <ProductTabStrip tabs={<p>
        <Link to="/products/cable-management/trac" className={`${location.pathname === "/products/cable-management/trac" ? 'text-tranos-primary' : 'text-zinc-700'}`}>Tranos Trac</Link> | <Link to="/products/cable-management/eris" className={`${location.pathname === "/products/cable-management/eris" ? 'text-tranos-primary' : 'text-zinc-700'}`}>Tranos Eris</Link> | <Link to="/products/cable-management/ellis" className={`${location.pathname === "/products/cable-management/ellis" ? 'text-tranos-primary' : 'text-zinc-700'}`}>Tranos Ellis</Link> | <Link to="/products/cable-management/cable-glands" className={`${location.pathname === "/products/cable-management/cable-glands" ? 'text-tranos-primary' : 'text-zinc-700'}`}>Cable Glands</Link>
    </p>} />

    <div className="py-[30px] md:py-[40px] lg:py-[60px] max-w-[1100px] w-[90%] mx-auto">
        <span className="block text-[18px] md:text-[22px] lg:text-[26px] font-[600] text-zinc-800 mb-[20px]">Cable Glands</span>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-[40px]">
            {
                CABLEGLANDS.map((item, i) => <Link to={`/products/cable-management/cable-glands/${item.to}`} key={i} className="flex flex-col items-center" state={{ item }}>
                    <img src={item.img} alt="tranos nigeria" className="w-full" />
                    <span className="text-[14px] md:text-[16px] text-zinc-800">{item.name}</span>
                </Link>)
            }
        </div>
    </div>
</main>