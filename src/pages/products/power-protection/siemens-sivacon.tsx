import { Strip } from "../../../components/Strip"
import { ProductTabStrip } from "../../../components/ProductTabStrip"
import { Link } from "react-router-dom"
import Banner from "../../../assets/images/LV-Panel-Banner.jpg"
import SiemensLogo from "../../../assets/images/Siemens-logo.svg"
import SivaconImg from "../../../assets/images/sivacon8_1.jpg"
import SivaconGridImg from "../../../assets/images/sivacon8-update.jpg"

export const SiemensSivacon = () => {
    return (
        <main>
            <div className="h-[50px] lg:h-[70px]"></div>
            <Strip img={Banner} title="Low Voltage Power Protection & Distribution" />
            <ProductTabStrip tabs={<p>
                <Link to="/products/power-protection-and-distribution/tranos-elite-range" className={`${location.pathname === "/products/power-protection-and-distribution/tranos-elite-range" ? 'text-tranos-primary' : 'text-zinc-700'}`}>Tranos Elite Range</Link> | <Link to="/products/power-protection-and-distribution/siemens-sivacon" className={`${location.pathname === "/products/power-protection-and-distribution/siemens-sivacon" ? 'text-tranos-primary' : 'text-zinc-700'}`}>Siemens SIVACON S8</Link> | <Link to="/products/power-protection-and-distribution/atex-power-panels" className={`${location.pathname === "/products/power-protection-and-distribution/atex-power-panels" ? 'text-tranos-primary' : 'text-zinc-700'}`}>ATEX Power Panels</Link>
            </p>} />

            <div className="max-w-[1100px] w-[90%] mx-auto py-[30px] md:py-[40px] lg:py-[60px]">
                <div className="flex items-center mb-[20px]">
                    <img src={SiemensLogo} alt="tranos nigeria" className="w-[100px]" />
                    <span className="font-[700] text-[18px] text-zinc-700">SIVACON S8</span>
                </div>

                <div>
                    <img src={SivaconImg} alt="tranos nigeria" />

                    <div className="mt-[30px] md:my-[40px] lg:my-[40px] max-w-[900px] w-full">
                        <span className="capitalize text-zinc-800 text-[20px] md:text-[22px] lg:text-[26px] inline-block mb-[5px] md:mb-[10px]">intelligent power distribution</span>

                        <p className="text-[18px] md:text-[22px] font-[200]">
                            Tranos is the licensed technology partner for Siemens SIVACON S8 in Nigeria. We are the only Level-1 technology partner for the low voltage switchgear range in Nigeria. This means that we are licensed to produce the SIVACON S8 switchboards under the Siemens brand. <br /><br />
                        </p>
                        <p className="text-zinc-600 font-[300] leading-[1.6]">
                            We have combined Siemens’ years of technology leadership along with our world-class sheet metal designing and manufacturing capability to produce switchgear that can be relied upon by our numerous customers. <br /><br />

                            With SIVACON S8, we produce type-approved low voltage panels up to 7,000A and motor control centers up to 3,600A with the best safety features and digital connectivity.
                        </p>
                    </div>
                </div>
            </div>

            <div className="bg-zinc-100">
                <div className="max-w-[1100px] w-[90%] mx-auto py-[30px] md:py-[40px] lg:py-[60px] grid grid-cols-1 md:grid-cols-[400px_1fr] gap-[30px] md:gap-[40px] lg:gap-[60px]">
                    <img src={SivaconGridImg} alt="tranos nigeria" />
                    <div>
                        <span className="text-[16px] md:text-[20px] lg:text-[22px] font-[600] inline-block mb-[10px]">SIVACON S8 low-voltage switchboard</span>

                        <p className="text-[14px] md:text-[16px] leading-[1.6] font-[300] text-zinc-800 mb-[20px]">
                            The SIVACON S8 low-voltage power distribution boards and SENTRON components are tried-and-true and perfectly compatible for safe, flexible, and efficient implementation of power distribution planning, design, and operation required in industrial plants, buildings, and infrastructure. <br /><br />

                            This not only helps to significantly reduce investment costs and risks: It also increases plant availability throughout the entire period of use. <br /><br />

                            The SIVACON S8 low-voltage power distribution board ensures a high level of personal and plant safety. Continuous testing to IEC 61641 and VDE 0660 Part 500-2 guarantees safety in the event of an arcing fault. Many well-thought-out details, including a reduced use of plastic parts and insulated main busbars, guarantee maximum safety and plant availability, resulting in low liability risk. <br /><br />

                            Over 404,000 switching boards have already been launched on the market by SIVACON Technology Partners – proof that technologically sophisticated solutions can be efficiently implemented with the SIVACON S8 low-voltage power distribution board. Power distribution is easy to plan, and the distribution board can be quickly configured using the SIMARIS software tools. The result: time savings and planning reliability throughout the entire process.
                        </p>

                        <a href="" target="_blank" className="p-[10px_20px] bg-tranos-primary text-white inline-block text-[14px] font-[300]">
                            Download Catalogue
                        </a>
                    </div>
                </div>
            </div>
        </main>
    )
}