import { Strip } from "../../../components/Strip"
import StripImg from "../../../assets/images/enclosures-banner.jpg"
import { ProductTabStrip } from "../../../components/ProductTabStrip"
import { Link } from "react-router-dom"
import { ProductTitle } from "../../../components/ProductTitle"

import CustomisedImg from "../../../assets/images/custom-banner.jpg"
import CustomGridImg from "../../../assets/images/custom-grid-image.jpg"

export const Customised = () => {
    return (
        <main>
            <div className="h-[50px] lg:h-[70px]"></div>
            <Strip img={StripImg} title="Enclosures" />
            <ProductTabStrip tabs={<p>
                <Link to="/products/enclosures/electrical" className={`${location.pathname === "/products/enclosures/electrical" ? 'text-tranos-primary' : 'text-zinc-700'}`}>Electrical</Link> | <Link to="/products/enclosures/mechanical" className={`${location.pathname === "/products/enclosures/mechanical" ? 'text-tranos-primary' : 'text-zinc-700'}`}>Mechanical</Link> | <Link to="/products/enclosures/servers" className={`${location.pathname === "/products/enclosures/servers" ? 'text-tranos-primary' : 'text-zinc-700'}`}>Servers & Datacenter Racks</Link> | <Link to="/products/enclosures/battery" className={`${location.pathname === "/products/enclosures/battery" ? 'text-tranos-primary' : 'text-zinc-700'}`}>Battery Cabinets & Racks</Link> | <Link to="/products/enclosures/heavy-duty" className={`${location.pathname === "/products/enclosures/heavy-duty" ? 'text-tranos-primary' : 'text-zinc-700'}`}>Heavy Duty</Link> | <Link to="/products/enclosures/customised" className={`${location.pathname === "/products/enclosures/customised" ? 'text-tranos-primary' : 'text-zinc-700'}`}>Customised</Link> | <Link to="/products/enclosures/atex-junction-boxes" className={`${location.pathname === "/products/enclosures/atex-junction-boxes" ? 'text-tranos-primary' : 'text-zinc-700'}`}>ATEX Junction Boxes</Link> | <Link to="/products/enclosures/meter-boxes" className={`${location.pathname === "/products/enclosures/meter-boxes" ? 'text-tranos-primary' : 'text-zinc-700'}`}>Meter Boxes</Link>
            </p>} />

            <div className="max-w-[1100px] w-[90%] mx-auto py-[30px] md:py-[40px] lg:py-[60px]">
                <ProductTitle title="Customised Enclosures" customStyles="border-blue-400 text-[18px] md:text-[20px] lg:text-[22px] mb-[20px]" />

                <img src={CustomisedImg} alt="tranos enclosure" className="w-full block mb-[40px]" />

                <div className="max-w-[1100px] w-[100%] mx-auto grid grid-cols-1 md:grid-cols-2">
                    <p className="text-zinc-800 text-[14px] md:text-[16px] leading-[1.8] font-[300]">
                        <span className="text-[18px] md:text-[20px] lg:text-[22px] font-[300] block mb-[20px]">
                            At Tranos, we have built hundreds of thousands of enclosures for various applications and customers. With the extensive experience of our engineers, we are able to listen to customers’ requirements, ideate and come up with ideal solutions for unique requirements.
                        </span>

                        To speak with our application engineers about your enclosure requirements, <Link to="/contacts" className="text-tranos-primary">click here.</Link>
                    </p>

                    <img src={CustomGridImg} alt="tranos enclosure" />
                </div>
            </div>
        </main>
    )
}