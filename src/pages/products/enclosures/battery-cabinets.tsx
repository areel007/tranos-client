import { Strip } from "../../../components/Strip"
import StripImg from "../../../assets/images/enclosures-banner.jpg"
import { ProductTabStrip } from "../../../components/ProductTabStrip"
import { Link } from "react-router-dom"
import { ProductTitle } from "../../../components/ProductTitle"

import BatteryCabinetsImg from "../../../assets/images/battery-banner.jpg"
import BatteryCabinetsTwo from "../../../assets/images/battery-cabinet-2.jpg"
import BatteryCabinetsThree from "../../../assets/images/battery-cabinet-3.jpg"

export const BatteryCabinets = () => {
    return (
        <main>
            <div className="h-[50px] lg:h-[70px]"></div>
            <Strip img={StripImg} title="Enclosures" />
            <ProductTabStrip tabs={<p>
                <Link to="/products/enclosures/electrical" className={`${location.pathname === "/products/enclosures/electrical" ? 'text-tranos-primary' : 'text-zinc-700'}`}>Electrical</Link> | <Link to="/products/enclosures/mechanical" className={`${location.pathname === "/products/enclosures/mechanical" ? 'text-tranos-primary' : 'text-zinc-700'}`}>Mechanical</Link> | <Link to="/products/enclosures/servers" className={`${location.pathname === "/products/enclosures/servers" ? 'text-tranos-primary' : 'text-zinc-700'}`}>Servers & Datacenter Racks</Link> | <Link to="/products/enclosures/battery" className={`${location.pathname === "/products/enclosures/battery" ? 'text-tranos-primary' : 'text-zinc-700'}`}>Battery Cabinets & Racks</Link> | <Link to="/products/enclosures/heavy-duty" className={`${location.pathname === "/products/enclosures/heavy-duty" ? 'text-tranos-primary' : 'text-zinc-700'}`}>Heavy Duty</Link> | <Link to="/products/enclosures/customised" className={`${location.pathname === "/products/enclosures/customised" ? 'text-tranos-primary' : 'text-zinc-700'}`}>Customised</Link> | <Link to="/products/enclosures/atex-junction-boxes" className={`${location.pathname === "/products/enclosures/atex-junction-boxes" ? 'text-tranos-primary' : 'text-zinc-700'}`}>ATEX Junction Boxes</Link> | <Link to="/products/enclosures/meter-boxes" className={`${location.pathname === "/products/enclosures/meter-boxes" ? 'text-tranos-primary' : 'text-zinc-700'}`}>Meter Boxes</Link>
            </p>} />

            <div className="max-w-[1100px] w-[90%] mx-auto py-[30px] md:py-[40px] lg:py-[60px]">
                <ProductTitle title="Battery Cabinets & Racks" customStyles="border-blue-400 text-[18px] md:text-[20px] lg:text-[22px] mb-[20px]" />

                <img src={BatteryCabinetsImg} alt="tranos enclosure" className="w-full block mb-[40px]" />

                <div className="max-w-[900px] w-[100%] mx-auto">
                    <p className="text-zinc-800 text-[14px] md:text-[16px] leading-[1.8] font-[300]">
                        <span className="text-[18px] md:text-[20px] lg:text-[22px] font-[300] block mb-[20px]">
                            With more than a decade-long experience in the design and manufacturing of electrical enclosures, our standard battery cabinets are specially built to suit your applications.
                        </span>

                        They are built with high-strength steel materials, designed for indoor and outdoor applications, manufactured with high precision, and furnished with textured finished powder. We have off-the-shelf standard products, and we can also customize the cabinets to suit your unique requirements. <br /><br />

                        All Tranos' encase products are built following the NEMA and IEC standards, dedicated to protecting your electrical systems.
                    </p>
                </div>
            </div>

            <div className="bg-white">
                <div className="max-w-[900px] w-[90%] mx-auto py-[30px] md:py-[40px] lg:py-[60px] grid grid-cols-1 md:grid-cols-2 gap-[30px] md:gap-[40px] lg:gap-[60px]">

                    <img src={BatteryCabinetsTwo} alt="tranos enclosures" className="w-full" />
                    <img src={BatteryCabinetsThree} alt="tranos enclosures" className="w-full" />
                </div>
            </div>
        </main>
    )
}