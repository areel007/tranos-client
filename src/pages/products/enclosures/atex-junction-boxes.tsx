import { Strip } from "../../../components/Strip"
import StripImg from "../../../assets/images/enclosures-banner.jpg"
import { ProductTabStrip } from "../../../components/ProductTabStrip"
import { Link } from "react-router-dom"
import { ProductTitle } from "../../../components/ProductTitle"
import { ATEXJUNCTIONBOXES } from "../../../utils/products"

export const ATEXJunctionBoxes = () => {
    return <main>
        <div className="h-[50px] lg:h-[70px]"></div>
        <Strip img={StripImg} title="Enclosures" />
        <ProductTabStrip tabs={<p>
            <Link to="/products/enclosures/electrical" className={`${location.pathname === "/products/enclosures/electrical" ? 'text-tranos-primary' : 'text-zinc-700'}`}>Electrical</Link> | <Link to="/products/enclosures/mechanical" className={`${location.pathname === "/products/enclosures/mechanical" ? 'text-tranos-primary' : 'text-zinc-700'}`}>Mechanical</Link> | <Link to="/products/enclosures/servers" className={`${location.pathname === "/products/enclosures/servers" ? 'text-tranos-primary' : 'text-zinc-700'}`}>Servers & Datacenter Racks</Link> | <Link to="/products/enclosures/battery" className={`${location.pathname === "/products/enclosures/battery" ? 'text-tranos-primary' : 'text-zinc-700'}`}>Battery Cabinets & Racks</Link> | <Link to="/products/enclosures/heavy-duty" className={`${location.pathname === "/products/enclosures/heavy-duty" ? 'text-tranos-primary' : 'text-zinc-700'}`}>Heavy Duty</Link> | <Link to="/products/enclosures/customised" className={`${location.pathname === "/products/enclosures/customised" ? 'text-tranos-primary' : 'text-zinc-700'}`}>Customised</Link> | <Link to="/products/enclosures/atex-junction-boxes" className={`${location.pathname === "/products/enclosures/atex-junction-boxes" ? 'text-tranos-primary' : 'text-zinc-700'}`}>ATEX Junction Boxes</Link> | <Link to="/products/enclosures/meter-boxes" className={`${location.pathname === "/products/enclosures/meter-boxes" ? 'text-tranos-primary' : 'text-zinc-700'}`}>Meter Boxes</Link>
        </p>} />

        <div className="max-w-[1100px] w-[90%] mx-auto py-[30px] md:py-[40px] lg:py-[60px]">
            <ProductTitle title="ATEX Junction Boxes" customStyles="border-blue-400 text-[18px] md:text-[20px] lg:text-[22px] mb-[20px]" />

            <div>
                {ATEXJUNCTIONBOXES.map((item, i) => <div key={i} className="grid grid-cols-1 md:grid-cols-[300px_1fr] gap-[20px] md:gap-[100px] items-center border-b border-zinc-400 last:border-none py-[40px]">
                    <img src={item.img} alt="tranos nigeria" className="w-full" />

                    <div>
                        <span className="capitalize font-[600] inline-block mb-[20px]">{item.title}</span>
                        <ul className="text-zinc-800 list-disc ml-[20px] leading-[1.6] font-[300]">
                            {item.features.map((feature, i) => <li key={i}>{feature}</li>)}
                        </ul>
                    </div>
                </div>)}
            </div>
        </div>
    </main>
}