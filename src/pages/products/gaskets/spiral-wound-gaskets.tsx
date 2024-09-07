import { Strip } from "../../../components/Strip"
import StripImg from "../../../assets/images/gasket-banner-rev.jpg"
import { ProductTabStrip } from "../../../components/ProductTabStrip"
import { Link } from "react-router-dom"
import { ProductTitle } from "../../../components/ProductTitle"

import SpiralBanner from "../../../assets/images/spiral-banner.jpg"
import SWG1 from "../../../assets/images/SWG1.jpg"
import SWG2 from "../../../assets/images/SWG2.jpg"
import SWG3 from "../../../assets/images/SWG3.jpg"
import SWG4 from "../../../assets/images/SWG4.jpg"

export const SpiralWound = () => {
    return <main>
        <div className="h-[50px] lg:h-[70px]"></div>
        <Strip img={StripImg} title="Gaskets" />
        <ProductTabStrip tabs={<p>
            <Link to="/products/gaskets/spiral-wound-gaskets" className={`${location.pathname === "/products/gaskets/spiral-wound-gaskets" ? 'text-tranos-primary' : 'text-zinc-700'}`}>Spiral Wound Gaskets</Link> | <Link to="/products/gaskets/soft-cut-gaskets" className={`${location.pathname === "/products/gaskets/soft-cut-gaskets" ? 'text-tranos-primary' : 'text-zinc-700'}`}>Soft-Cut Gaskets</Link> | <Link to="/products/gaskets/kammprofile" className={`${location.pathname === "/products/gaskets/kammprofile" ? 'text-tranos-primary' : 'text-zinc-700'}`}>Kammprofile Gaskets</Link>
        </p>} />

        <div className="max-w-[1100px] w-[90%] mx-auto py-[30px] md:py-[40px] lg:py-[60px]">
            <ProductTitle title="Spiral Wound Gaskets" customStyles="border-blue-400 text-[18px] md:text-[20px] lg:text-[22px] font-[700] text-zinc-800 mb-[20px]" />

            <img src={SpiralBanner} alt="tranos spiral wound gaskets" className="w-full block mb-[20px] md:mb-[40px]" />

            <p className="font-[300] leading-[2] text-[14px] md:text-[16px]">
                <span className="text-[18px] md:text-[20px] lg:text-[22px] block mb-[10px] leading-[1.6]">
                    Our spiral wound gaskets are produced by winding metallic strips with soft non-metallic filler material. The metal windings provide strength and resilience, while the non-metallic filler portion conforms to the irregularities of the flanges aiding in the joint seal. Due to this combination of materials the spiral wound gasket is suitable for sealing under severely fluctuating temperature and pressure conditions. Depending on the application the spiral wound gasket can be specified with outer and/or inner rings.
                </span>

                Our spiral wound gaskets have been successfully type-tested in accordance with the following codes: <br />

                &bull; ASME B16.20 <br />
                &bull; MESC 85/300 <br />
                &bull; API 6FB Fire Tested (Flexible Graphite)
            </p>
        </div>

        <div className="bg-gray-100">
            <div className="max-w-[1100px] w-[90%] mx-auto py-[30px] md:py-[40px] lg:py-[60px] grid grid-cols-1 md:grid-cols-2">
                <div className="text-[14px] md:text-[16px] font-[300] leading-[1.8]">
                    <span className="font-[700]">
                        Metallic Strip Materials
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

            <span className="font-[700] text-[14px] md:text-[16px] leading-[1.8]">
                Applications
            </span>

            <ul className="text-[14px] md:text-[16px] font-[300] leading-[1.8] mb-[20px] md:mb-[40px]">
                <li>High Pressure/Temperature</li>
                <li>Flanges (ASME/ANSI)</li>
                <li>Heat Exchangers</li>
                <li>Steam System Application</li>
                <li>Other Equipment</li>
            </ul>

            <div className="mb-[20px]">
                <span className="font-[700] text-[14px] md:text-[16px] leading-[1.8] block mb-[10px]">
                    Spiral Wound Gasket Types
                </span>

                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-[10px]">
                    <div>
                        <img src={SWG1} alt="tranos spiral wound gaskets" className="w-full block mb-[10px] border" />
                        <span className="text-[14px] md:text-[16px] font-[300] text-zinc-800">Gasket without Inner Ring and Outer Ring</span>
                    </div>

                    <div>
                        <img src={SWG2} alt="tranos spiral wound gaskets" className="w-full block mb-[10px] border" />
                        <span className="text-[14px] md:text-[16px] font-[300] text-zinc-800">Gasket with Inner Ring only</span>
                    </div>

                    <div>
                        <img src={SWG3} alt="tranos spiral wound gaskets" className="w-full block mb-[10px] border" />
                        <span className="text-[14px] md:text-[16px] font-[300] text-zinc-800">Gasket with Outer Ring only</span>
                    </div>

                    <div>
                        <img src={SWG4} alt="tranos spiral wound gaskets" className="w-full block mb-[10px] border" />
                        <span className="text-[14px] md:text-[16px] font-[300] text-zinc-800">Gasket with Inner Ring and Outer Ring</span>
                    </div>
                </div>
            </div>

            <p className="text-[14px] text-zinc-600">For further enquiries: <br />
                Call +234 1 271 7120 or send us an email at <span className="text-tranos-primary">sales@tranos.ng</span></p>
        </div>
    </main>
}