import { Strip } from "../../../components/Strip"
import StripImg from "../../../assets/images/enclosures-banner.jpg"
import { ProductTabStrip } from "../../../components/ProductTabStrip"
import { Link } from "react-router-dom"
import { ProductTitle } from "../../../components/ProductTitle"

import MechanicalEnclosure from "../../../assets/images/mechanical-banner.jpg"
import SoundProofGenerator from "../../../assets/images/soundproof-generator.png"
import ProtectiveEnclosure from "../../../assets/images/protective-enclosure.jpg"

export const MechanicalEnclosures = () => {
    return (
        <main>
            <div className="h-[50px] lg:h-[70px]"></div>
            <Strip img={StripImg} title="Enclosures" />
            <ProductTabStrip tabs={<p>
                <Link to="/products/enclosures/electrical" className={`${location.pathname === "/products/enclosures/electrical" ? 'text-tranos-primary' : 'text-zinc-700'}`}>Electrical</Link> | <Link to="/products/enclosures/mechanical" className={`${location.pathname === "/products/enclosures/mechanical" ? 'text-tranos-primary' : 'text-zinc-700'}`}>Mechanical</Link> | <Link to="/products/enclosures/servers" className={`${location.pathname === "/products/enclosures/servers" ? 'text-tranos-primary' : 'text-zinc-700'}`}>Servers & Datacenter Racks</Link> | <Link to="/products/enclosures/battery" className={`${location.pathname === "/products/enclosures/battery" ? 'text-tranos-primary' : 'text-zinc-700'}`}>Battery Cabinets & Racks</Link> | <Link to="/products/enclosures/heavy-duty" className={`${location.pathname === "/products/enclosures/heavy-duty" ? 'text-tranos-primary' : 'text-zinc-700'}`}>Heavy Duty</Link> | <Link to="/products/enclosures/customised" className={`${location.pathname === "/products/enclosures/customised" ? 'text-tranos-primary' : 'text-zinc-700'}`}>Customised</Link> | <Link to="/products/enclosures/atex-junction-boxes" className={`${location.pathname === "/products/enclosures/atex-junction-boxes" ? 'text-tranos-primary' : 'text-zinc-700'}`}>ATEX Junction Boxes</Link> | <Link to="/products/enclosures/meter-boxes" className={`${location.pathname === "/products/enclosures/meter-boxes" ? 'text-tranos-primary' : 'text-zinc-700'}`}>Meter Boxes</Link>
            </p>} />

            <div className="max-w-[1100px] w-[90%] mx-auto py-[30px] md:py-[40px] lg:py-[60px]">
                <ProductTitle title="Electrical Enclosures" customStyles="border-blue-400 text-[18px] md:text-[20px] lg:text-[22px] mb-[20px]" />

                <img src={MechanicalEnclosure} alt="tranos enclosure" className="w-full block mb-[40px]" />

                <div className="max-w-[900px] w-[100%] mx-auto">
                    <p className="text-zinc-800 text-[14px] md:text-[16px] leading-[1.8] font-[300]">
                        <span className="text-[18px] md:text-[20px] lg:text-[22px] font-[300] block mb-[20px]">
                            These enclosures designed and built for use in mechanical applications, providing protection from rain, sunlight and physical damages and theft or vandalization. Enclosures are also available with features for sound attenuation especially for rotating equipment.
                        </span>
                    </p>
                </div>
            </div>

            <div className="bg-zinc-100">
                <div className="max-w-[900px] w-[90%] mx-auto py-[30px] md:py-[40px] lg:py-[60px] grid grid-cols-1 md:grid-cols-2 gap-[30px] md:gap-[40px] lg:gap-[60px]">
                    <div>
                        <span className="text-zinc-800 font-[600] text-[18px] md:text-[20px] lg:text-[22px] block mb-[20px]">Sound-proof Enclosures</span>

                        <p className="text-zinc-800 font-[300] leading-[1.8] mb-[20px]">
                            Our sound-proof enclosures are aesthetically designed to attenuate sound to a set standard requirement of 70-75 decibels for generators. They also protect the equipment/engine against harsh weather conditions.
                        </p>

                    </div>
                    <img src={SoundProofGenerator} alt="tranos enclosures" className="w-full" />
                </div>
            </div>

            <div className="bg-white">
                <div className="max-w-[900px] w-[90%] mx-auto py-[30px] md:py-[40px] lg:py-[60px] grid grid-cols-1 md:grid-cols-2 gap-[30px] md:gap-[40px] lg:gap-[60px]">
                    <img src={ProtectiveEnclosure} alt="tranos enclosures" className="w-full" />

                    <div>
                        <span className="text-zinc-800 font-[600] text-[18px] md:text-[20px] lg:text-[22px] block mb-[20px]">Protective Enclosures</span>

                        <p className="text-zinc-800 font-[300] leading-[1.8] mb-[20px]">
                            Our protective mechanical enclosures are designed and built to provide physical protection for a wide range of mechanical equipment. These enclosures are designed and built to customer specifications.
                        </p>

                    </div>

                </div>
            </div>
        </main>
    )
}