import { Strip } from "../../../components/Strip"
import GasPoweredGeneratorImg from "../../../assets/images/generator-&-power-backup-innber-banner.jpg"
import { ProductTabStrip } from "../../../components/ProductTabStrip"
import { Link } from "react-router-dom"
import { ProductTitle } from "../../../components/ProductTitle"

import Thunderbolt from "../../../assets/images/thunder-bolt.svg"
import TG1000 from "../../../assets/images/TG1000.png"
import TG1200 from "../../../assets/images/TG1200.png"
import TG1800 from "../../../assets/images/TG1800.png"
import TG2000 from "../../../assets/images/TG2000.png"

export const GasPoweredGenerators = () => {
    return <main>
        <div className="h-[50px] lg:h-[70px]"></div>
        <Strip img={GasPoweredGeneratorImg} title="Power Generation & Backup" />
        <ProductTabStrip tabs={<p>
            <Link to="/products/power-generation/gas-powered-generators" className={`${location.pathname === "/products/power-generation/gas-powered-generators" ? 'text-tranos-primary' : 'text-zinc-700'}`}>Gas-Powered Generator</Link> | <Link to="/products/power-generation/ups-backup-system" className={`${location.pathname === "/products/power-generation/ups-backup-system" ? 'text-tranos-primary' : 'text-zinc-700'}`}>UPS Backup System</Link>
        </p>} />

        <div className="py-[30px] md:py-[40px] lg:py-[60px] max-w-[1100px] w-[90%] mx-auto">
            <ProductTitle title="Gas-Powered Generators" customStyles="mb-[5px] border-blue-400 text-[18px] md:text-[20px] lg:text-[22px]" />
            <span className="block text-zinc-700 text-[14px] mb-[20px]">TG: 1000 | TG: 1200 | TG: 1800 | TG: 2000</span>

            <div className="mb-[40px]">
                <p className="text-[14px] md:text-[16px] leading-[1.8] font-[300] text-zinc-800">
                    <span className="text-[18px] md:text-[20px] lg:text-[22px] block mb-[10px]">Tranos research, design, and manufacture power systems for critical industries and service sectors. We are also the only company in Nigeria with dedicated focus and facility for developing and supporting telecoms power.</span>

                    <span className="mb-[10px] block">With over 13 years of experience and proven expertise across a network of distributors, our in-depth understanding of the major industries terrain, their service requirements, and operational dynamics position us as a key resource and partner in solving the most critical power-related challenges faced by most industrial and services sectors. We have a long list of major global operators who already work with us to supply a broad range of high specification engineering solutions.</span>

                    Our generators work at variable speed for high fuel efficiency and are specifically integrated and calibrated to supply uninterrupted power to critical infrastructures (e.g telecom towers) even in remote locations.
                </p>
            </div>

            <div>
                <img src={Thunderbolt} alt="tranos power generation" className="block mb-[20px]" />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-[20px] md:gap-[40px]">
                    <img src={TG1000} alt="tranos power generation" className="w-full hover:scale-[.8] transition" />

                    <div>
                        <span className="block text-tranos-primary font-[600] mb-[20px]">TG:1000</span>

                        <p className="leading-[1.8] text-[14px] md:text-[16px] font-[300]">
                            The TG – 1000 is an environmentally friendly Gas generator, rated 7.5kVA, 400VAC with improved operating flexibility. The generator runs at a speed of 1500 rpm with very low sound and vibrations. It comes with an automatically controlled system that monitors the generator operations and safety and provides 99.87% availability and reliability performance.
                        </p>
                    </div>
                </div>
            </div>
        </div>

        <div className="bg-gray-100">
            <div className="max-w-[1100px] w-[90%] mx-auto  grid grid-cols-1 md:grid-cols-2 gap-[20px] md:gap-[40px] py-[30px] md:py-[40px] lg:py-[60px">
                <div>
                    <span className="block text-tranos-primary font-[600] mb-[20px]">TG:1200</span>

                    <p className="leading-[1.8] text-[14px] md:text-[16px] font-[300]">
                        The TG - 1200 is a 12kVA, 46-54VDC Gas generator. It is a more environmentally friendly power solution with very low emissions to the atmosphere. <br /><br />

                        The TG-1200 also comes with an automatically controlled system that monitors the generator operations and safety with 99.87% availability and reliability. Its operational speed flexibility is from 1500rpm to 2200rpm according to load demand and efficient fuel management. <br />br


                        This generator also has low noise and vibration.
                    </p>
                </div>

                <img src={TG1200} alt="tranos power generation" className="w-full hover:scale-[.8] transition" />
            </div>
        </div>

        <div className="bg-white">
            <div className="max-w-[1100px] w-[90%] mx-auto  grid grid-cols-1 md:grid-cols-2 gap-[20px] md:gap-[40px] py-[30px] md:py-[40px] lg:py-[60px">
                <img src={TG1800} alt="tranos power generation" className="w-full hover:scale-[.8] transition" />

                <div>
                    <span className="block text-tranos-primary font-[600] mb-[20px]">TG:1800</span>

                    <p className="leading-[1.8] text-[14px] md:text-[16px] font-[300]">
                        The TG - 1800 is an 18kVA, 46-54VDC Gas generator with high fuel efficiency and low speed for all load demands. It has an operational speed of 1500rpm with low noise and vibration. It is an environmentally friendly solution with very low carbon emissions.
                    </p>
                </div>


            </div>
        </div>

        <div className="bg-gray-100">
            <div className="max-w-[1100px] w-[90%] mx-auto  grid grid-cols-1 md:grid-cols-2 gap-[20px] md:gap-[40px] py-[30px] md:py-[40px] lg:py-[60px">


                <div>
                    <span className="block text-tranos-primary font-[600] mb-[20px]">TG:2000</span>

                    <p className="leading-[1.8] text-[14px] md:text-[16px] font-[300]">
                        The TG - 2000 is a 20kVA, 400VAC Gas generator. It is a more environmentally friendly power solution with very low emissions to the atmosphere. <br /><br />

                        It also comes with an automatically controlled system that monitors the generator operations and safety with 99.87% availability and reliability. It has an operational speed of 1500rpm with low noise and vibration.
                    </p>
                </div>

                <img src={TG2000} alt="tranos power generation" className="w-full hover:scale-[.8] transition" />


            </div>
        </div>

        <div className="bg-white">
            <div className="max-w-[1100px] w-[90%] mx-auto  py-[30px] md:py-[40px] lg:py-[60px">
                <a href="https://drive.google.com/file/d/1O_Jucy8CjtsvnQH51BwNY6BB2F-hiikD/view" target="_blanck" className="p-[10px_20px] bg-tranos-primary text-white text-[14px] font-[300] inline-block mb-[10px]">Download Catalogue</a>
                <p className="text-[14px] md:text-[16px] text-zinc-600">Download our catalogues and brochures to find all the information you need</p>
            </div>
        </div>
    </main>
}