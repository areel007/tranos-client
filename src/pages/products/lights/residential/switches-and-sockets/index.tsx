import { HeaderGap } from "../../../../../components/HeaderGap"
import { Strip } from "../../../../../components/Strip"
import { Link } from "react-router-dom"
import { ProductTabStrip } from "../../../../../components/ProductTabStrip"

import StripImg from "../../../../../assets/images/LIGHTS-AND-SWITCHES.jpg"
import SimonV8Img from "../../../../../assets/images/simonV8.jpg"
import SimonE6 from "../../../../../assets/images/simon-E6.png"
import SimonE3 from "../../../../../assets/images/simon-E3.png"

export const SwitchesAndSockets = () => {
    return <main>
        <HeaderGap />
        <Strip img={StripImg} title="Light & Wiring Devices" />
        <ProductTabStrip tabs={<p>
            <Link to="/products/lights-wiring/residential-and-commercial/lights" className={`${location.pathname === "/products/lights-wiring/residential-and-commercial/lights/valor" ? 'text-tranos-primary' : 'text-zinc-700'}`}>Lighting</Link> | <Link to="/products/lights-wiring/residential-and-commercial/switches-and-sockets" className={`${location.pathname === "/products/lights-wiring/residential-and-commercial/switches-and-sockets" ? 'text-tranos-primary' : 'text-zinc-700'}`}>Switches & Sockets</Link>
        </p>} />

        <div className="py-[30px] md:py-[40px] lg:py-[60px] max-w-[1100px] w-[90%] mx-auto">
            <Link to="/products/lights-wiring/residential-and-commercial/switches-and-sockets/simon-v8" className="w-full block mb-[10px]">
                <img src={SimonV8Img} alt="tranos switches and sockets" className="w-full" />
            </Link>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-[10px]">
                <Link to="/products/lights-wiring/residential-and-commercial/switches-and-sockets/simon-e6">
                    <img src={SimonE6} alt="tranos switches and sockets" className="w-full" />
                </Link>

                <Link to="/products/lights-wiring/residential-and-commercial/switches-and-sockets/simon-e3">
                    <img src={SimonE3} alt="tranos switches and sockets" className="w-full" />
                </Link>
            </div>
        </div>
    </main>
}