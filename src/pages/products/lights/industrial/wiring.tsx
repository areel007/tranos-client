import { HeaderGap } from "../../../../components/HeaderGap"
import { Link } from "react-router-dom"
import { ProductTabStrip } from "../../../../components/ProductTabStrip"
import { Strip } from "../../../../components/Strip"

import StripImg from "../../../../assets/images/LIGHTS-AND-SWITCHES.jpg"
import { ProductTitle } from "../../../../components/ProductTitle"
import { WIRINGDEVICES } from "../../../../utils/products"

export const IndustrialWiring = () => {
    return <main>
        <HeaderGap />
        <Strip img={StripImg} title="Lights & Wiring Devices" />
        <ProductTabStrip tabs={<p>
            <Link to="/products/lights-wiring/industrial/wiring" className={`${location.pathname === "/products/lights-wiring/industrial/wiring" ? 'text-tranos-primary' : 'text-zinc-700'}`}>Wiring</Link> | <Link to="/products/lights-wiring/industrial/lighting" className={`${location.pathname === "/products/lights-wiring/industrial/lighting" ? 'text-tranos-primary' : 'text-zinc-700'}`}>Lighting</Link>
        </p>} />

        <div className="py-[30px] md:py-[40px] lg:py-[60px] max-w-[1100px] w-[90%] mx-auto">
            <ProductTitle title="Wiring Devices" customStyles="border-blue-400 text-[18px] md:text-[20px] lg:text-[22px] font-[600]" />

            <div>
                {WIRINGDEVICES.map((item, i) => <div key={i} className="grid grid-cols-1 md:grid-cols-[400px_1fr] gap-[20px] md:gap-[40px] items-center border-b border-zinc-300 last:border-none py-[40px]">
                    <img src={item.img} alt="tranos nigeria" className="w-full" />

                    <div>
                        <span className="capitalize font-[600] inline-block mb-[20px]">{item.name}</span>
                        <ul className="text-zinc-800 list-disc ml-[20px] leading-[1.6] font-[300]">
                            {item.features.map((feature, i) => <li key={i}>{feature}</li>)}
                        </ul>
                    </div>
                </div>)}
            </div>
        </div>
    </main>
}