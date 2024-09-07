import { Strip } from "../../../components/Strip"
import StripImg from "../../../assets/images/enclosures-banner.jpg"
import { ProductTabStrip } from "../../../components/ProductTabStrip"
import { Link } from "react-router-dom"
import { ProductTitle } from "../../../components/ProductTitle"

import DataCenterEnclosure from "../../../assets/images/datacentre-banner.jpg"
import CustomIT from "../../../assets/images/custom-IT.jpg"

export const Servers = () => {
    return (
        <main>
            <div className="h-[50px] lg:h-[70px]"></div>
            <Strip img={StripImg} title="Enclosures" />
            <ProductTabStrip tabs={<p>
                <Link to="/products/enclosures/electrical" className={`${location.pathname === "/products/enclosures/electrical" ? 'text-tranos-primary' : 'text-zinc-700'}`}>Electrical</Link> | <Link to="/products/enclosures/mechanical" className={`${location.pathname === "/products/enclosures/mechanical" ? 'text-tranos-primary' : 'text-zinc-700'}`}>Mechanical</Link> | <Link to="/products/enclosures/servers" className={`${location.pathname === "/products/enclosures/servers" ? 'text-tranos-primary' : 'text-zinc-700'}`}>Servers & Datacenter Racks</Link> | <Link to="/products/enclosures/battery" className={`${location.pathname === "/products/enclosures/battery" ? 'text-tranos-primary' : 'text-zinc-700'}`}>Battery Cabinets & Racks</Link> | <Link to="/products/enclosures/heavy-duty" className={`${location.pathname === "/products/enclosures/heavy-duty" ? 'text-tranos-primary' : 'text-zinc-700'}`}>Heavy Duty</Link> | <Link to="/products/enclosures/customised" className={`${location.pathname === "/products/enclosures/customised" ? 'text-tranos-primary' : 'text-zinc-700'}`}>Customised</Link> | <Link to="/products/enclosures/atex-junction-boxes" className={`${location.pathname === "/products/enclosures/atex-junction-boxes" ? 'text-tranos-primary' : 'text-zinc-700'}`}>ATEX Junction Boxes</Link> | <Link to="/products/enclosures/meter-boxes" className={`${location.pathname === "/products/enclosures/meter-boxes" ? 'text-tranos-primary' : 'text-zinc-700'}`}>Meter Boxes</Link>
            </p>} />

            <div className="max-w-[1100px] w-[90%] mx-auto py-[30px] md:py-[40px] lg:py-[60px]">
                <ProductTitle title="Servers & Datacenter Racks" customStyles="border-blue-400 text-[18px] md:text-[20px] lg:text-[22px] mb-[20px]" />

                <img src={DataCenterEnclosure} alt="tranos enclosure" className="w-full block mb-[40px]" />

                <div className="max-w-[900px] w-[100%] mx-auto">
                    <p className="text-zinc-800 text-[14px] md:text-[16px] leading-[1.8] font-[300]">
                        <span className="text-[18px] md:text-[20px] lg:text-[22px] font-[300] block mb-[20px]">
                            These enclosures are designed to house data and telecommunication equipment indoors and outdoors. They provide protection from rain, sunlight, physical damage and theft/vandalization.
                        </span>

                        Data Centers centralize an organization’s shared IT operations and equipment for the purposes of storing, processing, disseminating data and applications. As they house an organization’s most critical and proprietary assets, data centers are vital to the continuity of daily operations. The valuable information stored within requires the most durable enclosures that allow for proper airflow and cable organisation. <br /><br />

                        We offer standard and customized data enclosures for IT equipment such as servers, switches, routers, UPS systems, A/V equipment and more.
                    </p>
                </div>
            </div>

            <div className="bg-zinc-100">
                <div className="max-w-[900px] w-[90%] mx-auto py-[30px] md:py-[40px] lg:py-[60px] grid grid-cols-1 md:grid-cols-2 gap-[30px] md:gap-[40px] lg:gap-[60px]">
                    <div>
                        <div className="mb-[20px] md:mb-[40px]">
                            <span className="text-zinc-800 font-[600] text-[18px] md:text-[20px] lg:text-[22px] block mb-[10px]">Customised IT Enclosures</span>

                            <p className="text-zinc-800 font-[300] leading-[1.8] mb-[20px]">
                                We design and build customized enclosures for data centers in line with the client’s specifications. Our data cabinets are designed for maximum performance, convenience, flexibility and safety in high density IT room environments. They are easy to install and to maintain.
                            </p>
                        </div>

                        <div>
                            <span className="text-zinc-800 font-[600] text-[18px] md:text-[20px] lg:text-[22px] block mb-[10px]">Standard IT Enclosures</span>

                            <p className="text-zinc-800 font-[300] leading-[1.8] mb-[20px]">
                                We manufacture standard data enclosures for IT equipment such as servers, switches, routers, UPS systems, A/V equipment and more. Our data enclosures allow for proper airflow and cable organisation.
                            </p>
                        </div>

                    </div>
                    <img src={CustomIT} alt="tranos enclosures" className="w-full" />
                </div>
            </div>
        </main>
    )
}