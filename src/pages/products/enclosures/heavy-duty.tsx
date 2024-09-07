import { Strip } from "../../../components/Strip"
import StripImg from "../../../assets/images/enclosures-banner.jpg"
import { ProductTabStrip } from "../../../components/ProductTabStrip"
import { Link } from "react-router-dom"
import { ProductTitle } from "../../../components/ProductTitle"

import HeavyDutyImg from "../../../assets/images/heavyduty-banner.jpg"
import Extreme from "../../../assets/images/extreme.png"
import HeavyDutyOne from "../../../assets/images/heavyduty-1.png"
import Trimage from "../../../assets/images/trimage--1.jpg"
import Shelter from "../../../assets/images/shelter.jpg"
import Container from "../../../assets/images/container--3.jpg"

export const HeavyDuty = () => {
    return (
        <main>
            <div className="h-[50px] lg:h-[70px]"></div>
            <Strip img={StripImg} title="Enclosures" />
            <ProductTabStrip tabs={<p>
                <Link to="/products/enclosures/electrical" className={`${location.pathname === "/products/enclosures/electrical" ? 'text-tranos-primary' : 'text-zinc-700'}`}>Electrical</Link> | <Link to="/products/enclosures/mechanical" className={`${location.pathname === "/products/enclosures/mechanical" ? 'text-tranos-primary' : 'text-zinc-700'}`}>Mechanical</Link> | <Link to="/products/enclosures/servers" className={`${location.pathname === "/products/enclosures/servers" ? 'text-tranos-primary' : 'text-zinc-700'}`}>Servers & Datacenter Racks</Link> | <Link to="/products/enclosures/battery" className={`${location.pathname === "/products/enclosures/battery" ? 'text-tranos-primary' : 'text-zinc-700'}`}>Battery Cabinets & Racks</Link> | <Link to="/products/enclosures/heavy-duty" className={`${location.pathname === "/products/enclosures/heavy-duty" ? 'text-tranos-primary' : 'text-zinc-700'}`}>Heavy Duty</Link> | <Link to="/products/enclosures/customised" className={`${location.pathname === "/products/enclosures/customised" ? 'text-tranos-primary' : 'text-zinc-700'}`}>Customised</Link> | <Link to="/products/enclosures/atex-junction-boxes" className={`${location.pathname === "/products/enclosures/atex-junction-boxes" ? 'text-tranos-primary' : 'text-zinc-700'}`}>ATEX Junction Boxes</Link> | <Link to="/products/enclosures/meter-boxes" className={`${location.pathname === "/products/enclosures/meter-boxes" ? 'text-tranos-primary' : 'text-zinc-700'}`}>Meter Boxes</Link>
            </p>} />

            <div className="max-w-[1100px] w-[90%] mx-auto py-[30px] md:py-[40px] lg:py-[60px]">
                <div className="mb-[20px]">
                    <ProductTitle title="Heavy Duty Enclosures" customStyles="border-blue-400 text-[18px] md:text-[20px] lg:text-[22px] mb-0" />
                    <p className="text-zinc-700">Large Electrical, Mechanical & Process Enclosures & Skids</p>
                </div>

                <img src={HeavyDutyImg} alt="tranos enclosure" className="w-full block mb-[40px]" />

                <div className="">
                    <div className="mb-[20px] md:mb-[40px]">
                        <img src={Extreme} alt="tranos enclosure" className="w-[250px]" />
                        <p className="text-[18px] md:text-[20px] lg:text-[22px] font-[700] text-zinc-800">Engineered for External Applications</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 mb-[20px] md:mb-[40px]">
                        <div>
                            <p className="text-[18px] md:text-[20px] lg:text-[22px] font-[300] text-zinc-800 mb-[10px]">
                                Our heavy duty enclosures are designed and built for critical applications in extreme environments. These enclosures weigh from 10,000kg to as much as 40,000kg. <br /><br />

                                Some applications include:
                            </p>
                            <ul className="ml-[20px] list-disc text-[14px] md:text-[16px] text-zinc-800">
                                <li>Power plants</li>
                                <li>E-Houses</li>
                                <li>Pre-fabricated Substations.</li>
                            </ul>
                        </div>

                        <img src={HeavyDutyOne} alt="tranos enclosures" className="w-full" />

                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-[10px] md:gap-[20px]">
                        <img src={Trimage} alt="tranos enclosures" className="w-full" />
                        <img src={Shelter} alt="tranos enclosures" className="w-full" />
                        <img src={Container} alt="tranos enclosures" className="w-full" />
                    </div>
                </div>
            </div>
        </main>
    )
}