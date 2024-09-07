import { Strip } from "../../../components/Strip"
import StripImg from "../../../assets/images/enclosures-banner.jpg"
import { ProductTabStrip } from "../../../components/ProductTabStrip"
import { Link } from "react-router-dom"
import { ProductTitle } from "../../../components/ProductTitle"

import MeterOne from "../../../assets/images/METER-1.jpg"
import MeterTwo from "../../../assets/images/METER-2.jpg"

export const MeterBoxes = () => {
    return (
        <main>
            <div className="h-[50px] lg:h-[70px]"></div>
            <Strip img={StripImg} title="Enclosures" />
            <ProductTabStrip tabs={<p>
                <Link to="/products/enclosures/electrical" className={`${location.pathname === "/products/enclosures/electrical" ? 'text-tranos-primary' : 'text-zinc-700'}`}>Electrical</Link> | <Link to="/products/enclosures/mechanical" className={`${location.pathname === "/products/enclosures/mechanical" ? 'text-tranos-primary' : 'text-zinc-700'}`}>Mechanical</Link> | <Link to="/products/enclosures/servers" className={`${location.pathname === "/products/enclosures/servers" ? 'text-tranos-primary' : 'text-zinc-700'}`}>Servers & Datacenter Racks</Link> | <Link to="/products/enclosures/battery" className={`${location.pathname === "/products/enclosures/battery" ? 'text-tranos-primary' : 'text-zinc-700'}`}>Battery Cabinets & Racks</Link> | <Link to="/products/enclosures/heavy-duty" className={`${location.pathname === "/products/enclosures/heavy-duty" ? 'text-tranos-primary' : 'text-zinc-700'}`}>Heavy Duty</Link> | <Link to="/products/enclosures/customised" className={`${location.pathname === "/products/enclosures/customised" ? 'text-tranos-primary' : 'text-zinc-700'}`}>Customised</Link> | <Link to="/products/enclosures/atex-junction-boxes" className={`${location.pathname === "/products/enclosures/atex-junction-boxes" ? 'text-tranos-primary' : 'text-zinc-700'}`}>ATEX Junction Boxes</Link> | <Link to="/products/enclosures/meter-boxes" className={`${location.pathname === "/products/enclosures/meter-boxes" ? 'text-tranos-primary' : 'text-zinc-700'}`}>Meter Boxes</Link>
            </p>} />

            <div className="max-w-[1100px] w-[90%] mx-auto py-[30px] md:py-[40px] lg:py-[60px]">
                <ProductTitle title="Meter Boxes" customStyles="border-blue-400 text-[18px] md:text-[20px] lg:text-[22px] mb-[20px]" />

                <div className="max-w-[1100px] w-[100%] mx-auto grid grid-cols-1 md:grid-cols-[1fr_400px] gap-[30px] md:gap-[60px]">
                    <p className="text-zinc-800 text-[14px] md:text-[16px] leading-[1.8] font-[300]">
                        <span className="text-[18px] md:text-[20px] font-[600] text-zinc-800 leading-[1.4] block mb-[20px]">Quality range of meter mounting equipment to meet your needs.</span>
                        <span className="text-[18px] md:text-[20px] lg:text-[22px] font-[300] block mb-[20px]">
                            Developed in strict tandem with the set industry standards, the Tranos Single and Three Phase Meter Boxes are widely used at homes and offices for their unmatched quality and flawless finish.
                        </span>

                        Produced from durable thermoplastic materials to provide robust protection for electricity meters with high UV stability and flame retardation. These enclosures provide ingress protection of IP54 and impact protection of IK09 making them suitable for both indoor and outdoor applications. <br /><br />

                        For technical information and specifications on the product line click below.

                        <a href="https://drive.google.com/file/d/1WpK95CaegWcqrV3T33zcyjQv8WZyHRZk/view" target="_blank" className="p-[10px_20px] bg-tranos-primary text-white text-[14px] font-[300] block w-[min-content] whitespace-nowrap mt-[10px]">Learn more</a>
                    </p>

                    <div>
                        <img src={MeterTwo} alt="tranos enclosure" className="w-full" />
                        <img src={MeterOne} alt="tranos enclosure" className="w-full" />
                    </div>

                </div>
            </div>
        </main>
    )
}