import { HeaderGap } from "../../../../../components/HeaderGap"
import { Strip } from "../../../../../components/Strip"
import { ProductTabStrip } from "../../../../../components/ProductTabStrip"
import { Link } from "react-router-dom"

import StripImg from "../../../../../assets/images/LIGHTS-AND-SWITCHES.jpg"
import SimonE3BigImg from "../../../../../assets/images/simon-e3.jpg"
import SimonE3Simplicity from "../../../../../assets/images/simon-e3-simplicity.jpg"
import SimonE3Interior from "../../../../../assets/images/simon-e3-interior.png"
import SimonE3Detail from "../../../../../assets/images/simon-e3-detail.png"
import EasyToInstall from "../../../../../assets/images/easy-to-install.png"

import SV8 from "../../../../../assets/images/SV8.jpg"
import E6Renew from "../../../../../assets/images/E6-renew.jpg"

export const SimonE3 = () => {
    return <main>
        <HeaderGap />
        <Strip img={StripImg} title="Lights & Wiring Devices" />
        <ProductTabStrip tabs={<p>
            <Link to="/products/lights-wiring/residential-and-commercial/lights" className={`${location.pathname === "/products/lights-wiring/residential-and-commercial/lights/valor" ? 'text-tranos-primary' : 'text-zinc-700'}`}>Lighting</Link> | <Link to="/products/lights-wiring/residential-and-commercial/switches-and-sockets" className={`${location.pathname === "/products/lights-wiring/residential-and-commercial/switches-and-sockets/simon-e3" ? 'text-tranos-primary' : 'text-zinc-700'}`}>Switches & Sockets</Link>
        </p>} />

        <div className="py-[30px] md:py-[40px] lg:py-[60px] max-w-[1100px] w-[90%] mx-auto">
            <span className="text-[36px] md:text-[42px] lg:text-[60px] text-zinc-900 block">
                <span className="font-[200]">Simon | </span>
                <span className="font-[700]">E3</span>
            </span>

            <div className="grid grid-cols-1">
                <img src={SimonE3BigImg} alt="tranos swicthes and sockets" className="w-full block mb-[20px] md:mb-[40px]" />

                <img src={SimonE3Simplicity} alt="tranos swicthes and sockets" className="w-full block mb-[20px] md:mb-[40px]" />

                <div>
                    <p className="text-center text-[14px] md:text-[16px] mb-[10px] md:mb-[20px]">E3 series offer multiple choice to satisfy your needs.</p>

                    <img src={SimonE3Interior} alt="tranos swicthes and sockets" className="w-full block mb-[20px] md:mb-[40px]" />
                </div>

                <div>
                    <p className="text-center text-[14px] md:text-[16px]"><b>Details Matter</b>: Precise structure and select materials.</p>

                    <img src={SimonE3Detail} alt="tranos swicthes and sockets" className="w-full block mb-[20px] md:mb-[40px]" />
                </div>

                <div>
                    <p className="text-center text-[14px] md:text-[16px]">Easy to install</p>

                    <img src={EasyToInstall} alt="tranos swicthes and sockets" className="w-full block mb-[20px] md:mb-[40px]" />
                </div>
            </div>



            <div>
                <p className="uppercase text-center text-[14px] md:text-[16px] max-w-[500px] w-full mx-auto mb-[20px] md:mb-[40px]">maybe you're interested in...</p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-[10px]">
                    <Link to="/products/lights-wiring/residential-and-commercial/switches-and-sockets/simon-v8">
                        <img src={SV8} alt="tranos switches and sockets" className="w-full block mb-[10px]" />
                        <p className="text-center uppercase text-zinc-800">Simon V8</p>
                    </Link>

                    <Link to="/products/lights-wiring/residential-and-commercial/switches-and-sockets/simon-e6">
                        <img src={E6Renew} alt="tranos switches and sockets" className="w-full block mb-[10px]" />
                        <p className="text-center uppercase text-zinc-800">Simon E6</p>
                    </Link>
                </div>

            </div>
        </div>
    </main>
}