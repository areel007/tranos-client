import { Strip } from "../../../components/Strip"
import StripImg from "../../../assets/images/enclosures-banner.jpg"
import { ProductTabStrip } from "../../../components/ProductTabStrip"
import { Link } from "react-router-dom"
import { ProductTitle } from "../../../components/ProductTitle"

import ElectricalEnclosure from "../../../assets/images/ELECTRICAL-ENCLOSURE__banner.jpg"
import WallMouted from "../../../assets/images/wall-mounted.jpg"
import FreeStanding from "../../../assets/images/free-standing.jpg"
import FlushMounted from "../../../assets/images/flush-mounted.jpg"

export const ElectricalEnclosures = () => {
    return <main>
        <div className="h-[50px] lg:h-[70px]"></div>
        <Strip img={StripImg} title="Enclosures" />
        <ProductTabStrip tabs={<p>
            <Link to="/products/enclosures/electrical" className={`${location.pathname === "/products/enclosures/electrical" ? 'text-tranos-primary' : 'text-zinc-700'}`}>Electrical</Link> | <Link to="/products/enclosures/mechanical" className={`${location.pathname === "/products/enclosures/mechanical" ? 'text-tranos-primary' : 'text-zinc-700'}`}>Mechanical</Link> | <Link to="/products/enclosures/servers" className={`${location.pathname === "/products/enclosures/servers" ? 'text-tranos-primary' : 'text-zinc-700'}`}>Servers & Datacenter Racks</Link> | <Link to="/products/enclosures/battery" className={`${location.pathname === "/products/enclosures/battery" ? 'text-tranos-primary' : 'text-zinc-700'}`}>Battery Cabinets & Racks</Link> | <Link to="/products/enclosures/heavy-duty" className={`${location.pathname === "/products/enclosures/heavy-duty" ? 'text-tranos-primary' : 'text-zinc-700'}`}>Heavy Duty</Link> | <Link to="/products/enclosures/customised" className={`${location.pathname === "/products/enclosures/customised" ? 'text-tranos-primary' : 'text-zinc-700'}`}>Customised</Link> | <Link to="/products/enclosures/atex-junction-boxes" className={`${location.pathname === "/products/enclosures/atex-junction-boxes" ? 'text-tranos-primary' : 'text-zinc-700'}`}>ATEX Junction Boxes</Link> | <Link to="/products/enclosures/meter-boxes" className={`${location.pathname === "/products/enclosures/meter-boxes" ? 'text-tranos-primary' : 'text-zinc-700'}`}>Meter Boxes</Link>
        </p>} />

        <div className="max-w-[1100px] w-[90%] mx-auto py-[30px] md:py-[40px] lg:py-[60px]">
            <ProductTitle title="Electrical Enclosures" customStyles="border-blue-400 text-[18px] md:text-[20px] lg:text-[22px] mb-[20px]" />

            <img src={ElectricalEnclosure} alt="tranos enclosure" className="w-full block mb-[40px]" />

            <div className="max-w-[900px] w-[100%] mx-auto">
                <p className="text-zinc-800 text-[14px] md:text-[16px] leading-[1.8] font-[300]">
                    <span className="text-[18px] md:text-[20px] lg:text-[22px] font-[300] block mb-[20px]">
                        These enclosures are deployed specifically for housing and protecting electrical components, devices, and other electrical equipment
                    </span>

                    Our standard electrical enclosure solutions are designed and fabricated using only the best grade steel, and as a quality-driven steel fabrication company, our enclosures are versatile and highly adaptable, offering a vast range of sizes and various accessories to cater to your specific needs, whether as electrical enclosures or as industrial enclosures. <br /><br />

                    Designed, tested, and compliant with the highest industry operating standards, our enclosures are equipped with control systems that maintain temperatures within the specified operating range of internally mounted equipment. Each enclosure offers flexible thermal management solutions based on open and/or closed-loop design to enable convenient matching to load and environmental factors. <br /><br />

                    We design and build the following types of electrical enclosures:

                </p>

                <ul className="text-zinc-800 text-[14px] md:text-[16px] leading-[1.8] font-[300] list-disc ml-[20px]">
                    <li>Wall Mounted Enclosures</li>
                    <li>Free Standing Enclosures</li>
                    <li>Flush-mounted Enclosures</li>
                </ul>
            </div>
        </div>

        <div className="bg-zinc-100">
            <div className="max-w-[900px] w-[90%] mx-auto py-[30px] md:py-[40px] lg:py-[60px] grid grid-cols-1 md:grid-cols-2 gap-[30px] md:gap-[40px] lg:gap-[60px]">
                <div>
                    <span className="text-zinc-800 font-[600] text-[18px] md:text-[20px] lg:text-[22px] block mb-[20px]">Wall-Mounted Enclosures</span>

                    <p className="text-zinc-800 font-[300] leading-[1.8] mb-[20px]">
                        The wall-mounted enclosures are specifically designed to protect your electrical and electronic components from harsh environmental impact. We provide different material options - Aluminium, Stainless Steel, Powder Coated, and Mild Steel. They come in various designs for outdoor and indoor applications.
                    </p>

                    <div>
                        <a href="https://drive.google.com/file/d/1gxGdDi8opMiyl4KOeXpbOklA7XKAdaVj/view" target="_blank" className="bg-tranos-primary p-[10px_20px] inline-block text-white mb-[10px] text-[14px] font-[300]">Download Catalogue</a>
                        <p className="text-[14px] md:text-[16px] font-[300]">Download our catalogues and brochures to find all the information you need</p>
                    </div>

                </div>
                <img src={WallMouted} alt="tranos enclosures" className="w-full" />
            </div>
        </div>

        <div className="bg-white">
            <div className="max-w-[900px] w-[90%] mx-auto py-[30px] md:py-[40px] lg:py-[60px] grid grid-cols-1 md:grid-cols-2 gap-[30px] md:gap-[40px] lg:gap-[60px]">
                <img src={FreeStanding} alt="tranos enclosures" className="w-full" />

                <div>
                    <span className="text-zinc-800 font-[600] text-[18px] md:text-[20px] lg:text-[22px] block mb-[20px]">Free Standing Enclosures</span>



                    <p className="text-zinc-800 font-[300] leading-[1.8] mb-[20px]">
                        Our free-standing enclosures are designed to meet International Electrotechnical Commission Standards (IEC). They provide protection of IP55 and internal segregation ranging from form 1 to form 4.

                        These enclosures come in different heights, widths, and depths to meet your various needs. They are suitable for use in diverse industries including Oil and Gas, Manufacturing, Building, Healthcare, Energy, etc.
                    </p>

                    <div>
                        <a href="https://drive.google.com/file/d/1gxGdDi8opMiyl4KOeXpbOklA7XKAdaVj/view" target="_blank" className="bg-tranos-primary p-[10px_20px] inline-block text-white mb-[10px] text-[14px] font-[300]">Download Catalogue</a>
                        <p className="text-[14px] md:text-[16px] font-[300]">Download our catalogues and brochures to find all the information you need</p>
                    </div>

                </div>

            </div>
        </div>

        <div className="bg-gray-100">
            <div className="max-w-[900px] w-[90%] mx-auto py-[30px] md:py-[40px] lg:py-[60px] grid grid-cols-1 md:grid-cols-2 gap-[30px] md:gap-[40px] lg:gap-[60px]">

                <div>
                    <span className="text-zinc-800 font-[600] text-[18px] md:text-[20px] lg:text-[22px] block mb-[20px]">Flush-mounted Enclosures</span>



                    <p className="text-zinc-800 font-[300] leading-[1.8] mb-[20px]">
                        Our Flush-mounted enclosures are ideal for fitting inside the wall to house electrical controls, terminals, and instruments. These enclosures are durable and easy to install. They come in various sizes (Heights and widths) for indoor applications and are designed according to the IEC & NEMA Standards, with an Ingress Protection of IP 55 and Impact protection of IK 10.
                    </p>

                </div>

                <img src={FlushMounted} alt="tranos enclosures" className="w-full" />

            </div>
        </div>

    </main>
}