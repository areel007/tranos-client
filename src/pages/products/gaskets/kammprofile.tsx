import { Strip } from "../../../components/Strip"
import StripImg from "../../../assets/images/gasket-banner-rev.jpg"
import { ProductTabStrip } from "../../../components/ProductTabStrip"
import { Link } from "react-router-dom"
import { ProductTitle } from "../../../components/ProductTitle"

import KammprofileImg from "../../../assets/images/kammprofile-big.jpg"
import KPG1 from "../../../assets/images/KPG1.jpg"
import KPG2 from "../../../assets/images/KPG2.jpg"
import KPG3 from "../../../assets/images/KPG3.jpg"

export const Kammprofile = () => {
    return <main>
        <div className="h-[50px] lg:h-[70px]"></div>
        <Strip img={StripImg} title="Gaskets" />
        <ProductTabStrip tabs={<p>
            <Link to="/products/gaskets/spiral-wound-gaskets" className={`${location.pathname === "/products/gaskets/spiral-wound-gaskets" ? 'text-tranos-primary' : 'text-zinc-700'}`}>Spiral Wound Gaskets</Link> | <Link to="/products/gaskets/soft-cut-gaskets" className={`${location.pathname === "/products/gaskets/soft-cut-gaskets" ? 'text-tranos-primary' : 'text-zinc-700'}`}>Soft-Cut Gaskets</Link> | <Link to="/products/gaskets/kammprofile" className={`${location.pathname === "/products/gaskets/kammprofile" ? 'text-tranos-primary' : 'text-zinc-700'}`}>Kammprofile Gaskets</Link>
        </p>} />

        <div className="max-w-[1100px] w-[90%] mx-auto py-[30px] md:py-[40px] lg:py-[60px]">
            <ProductTitle title="Kammprofile Gaskets" customStyles="border-blue-400 text-[18px] md:text-[20px] lg:text-[22px] font-[700] text-zinc-800 mb-[20px]" />

            <img src={KammprofileImg} alt="tranos spiral wound gaskets" className="w-full block mb-[20px] md:mb-[40px]" />

            <p className="font-[300] leading-[2] text-[14px] md:text-[16px]">
                <span className="text-[18px] md:text-[20px] lg:text-[22px] block mb-[10px] leading-[1.6]">
                    Our Kammprofile gaskets consist of a solid metal ring with grooved faces and a soft facing material on the grooved faces to improve sealability. When the gasket is compressed, the serrated faces create concentric rings of high stress, enhancing the sealing capabilities of the gasket.
                </span>
            </p>
        </div>

        <div className="bg-gray-100">
            <div className="max-w-[1100px] w-[90%] mx-auto py-[30px] md:py-[40px] lg:py-[60px] grid grid-cols-1 md:grid-cols-2">
                <div className="text-[14px] md:text-[16px] font-[300] leading-[1.8]">
                    <span className="font-[700]">
                        Solid Metal Ring
                    </span>
                    <ul>
                        <li>Stainless steel 304</li>
                        <li>Stainless steel 316L</li>
                        <li>Other materials are available on request</li>
                    </ul>

                </div>

                <div className="text-[14px] md:text-[16px] font-[300] leading-[1.8]">
                    <span className="font-[700]">
                        Filler Materials
                    </span>
                    <ul>
                        <li>Flexible Graphite</li>
                        <li>PTFE</li>
                        <li>Mica</li>
                        <li>Other materials are available on request</li>
                    </ul>

                </div>
            </div>
        </div>

        <div className="max-w-[1100px] w-[90%] mx-auto py-[30px] md:py-[40px] lg:py-[60px]">

            <div className="grid gri-cols-1 md:grid-cols-2 gap-[20px] md:gap-[40px]">
                <div>
                    <span className="font-[700] text-[14px] md:text-[16px] leading-[1.8]">
                        Applications
                    </span>

                    <ul className="text-[14px] md:text-[16px] font-[300] leading-[1.8] mb-[20px] md:mb-[40px] list-disc ml-[20px]">
                        <li>Our Kammprofile gaskets are suitable for the following applications:</li>
                        <li>High Pressure/Temperature Applications</li>
                        <li>Pipeline Systems and Heat Exchangers</li>
                        <li>Steam System Application</li>
                        <li>Petrochemical and Chemical Applications</li>
                        <li>Power Plants</li>
                        <li>Other Equipments</li>
                    </ul>
                </div>

                <div>
                    <span className="font-[700] text-[14px] md:text-[16px] leading-[1.8]">
                        Key Advantages
                    </span>

                    <ul className="text-[14px] md:text-[16px] font-[300] leading-[1.8] mb-[20px] md:mb-[40px] list-disc ml-[20px]">
                        <li>Suitable for a high temperature and pressure applications</li>
                        <li>Soft facing material prevents damage to the flange</li>
                        <li>Undamaged metal core can be reused. Soft facing material only can be replaced to reduce maintenance costs</li>
                        <li>They offer a flexible seal due to their complete stability</li>
                        <li>They are resistant to hazardous chemicals</li>
                    </ul>
                </div>
            </div>

            <div className="mb-[20px]">
                <span className="font-[700] text-[14px] md:text-[16px] leading-[1.8] block mb-[10px]">
                    Spiral Wound Gasket Types
                </span>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-[10px]">
                    <div>
                        <img src={KPG1} alt="tranos spiral wound gaskets" className="w-full block mb-[10px] border" />
                        <span className="text-[14px] md:text-[16px] font-[300] text-zinc-800">Gasket with Core and Facing material Only</span>
                    </div>

                    <div>
                        <img src={KPG2} alt="tranos spiral wound gaskets" className="w-full block mb-[10px] border" />
                        <span className="text-[14px] md:text-[16px] font-[300] text-zinc-800">Gasket with Core, Facing material and Loose outer Ring</span>
                    </div>

                    <div>
                        <img src={KPG3} alt="tranos spiral wound gaskets" className="w-full block mb-[10px] border" />
                        <span className="text-[14px] md:text-[16px] font-[300] text-zinc-800">Gasket with Core, Facing material and Integral Outer Ring
                        </span>
                    </div>

                </div>
            </div>

            <p className="text-[14px] text-zinc-600">For further enquiries: <br />
                Call +234 1 271 7120 or send us an email at <span className="text-tranos-primary">info@tranos.ng</span></p>
        </div>
    </main>
}