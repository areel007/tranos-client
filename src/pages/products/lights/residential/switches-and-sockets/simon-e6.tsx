import { HeaderGap } from "../../../../../components/HeaderGap"
import { Strip } from "../../../../../components/Strip"
import { ProductTabStrip } from "../../../../../components/ProductTabStrip"
import { Link } from "react-router-dom"

import StripImg from "../../../../../assets/images/LIGHTS-AND-SWITCHES.jpg"
import SimonE6BigImg from "../../../../../assets/images/simon-e6-ban.jpg"
import EndlessFree from "../../../../../assets/images/simon-e6-large.png"
import ThoughtfulDesign from "../../../../../assets/images/simon-e6-dust.png"
import MultiGang from "../../../../../assets/images/multi-gang.png"
import LEDIndicator from "../../../../../assets/images/build-in.png"

import SV8 from "../../../../../assets/images/SV8.jpg"
import E3Renew from "../../../../../assets/images/E3-renew.jpg"

export const SimonE6 = () => {
    return <main>
        <HeaderGap />
        <Strip img={StripImg} title="Lights & Wiring Devices" />
        <ProductTabStrip tabs={<p>
            <Link to="/products/lights-wiring/residential-and-commercial/lights" className={`${location.pathname === "/products/lights-wiring/residential-and-commercial/lights/valor" ? 'text-tranos-primary' : 'text-zinc-700'}`}>Lighting</Link> | <Link to="/products/lights-wiring/residential-and-commercial/switches-and-sockets" className={`${location.pathname === "/products/lights-wiring/residential-and-commercial/switches-and-sockets/simon-e6" ? 'text-tranos-primary' : 'text-zinc-700'}`}>Switches & Sockets</Link>
        </p>} />

        <div className="py-[30px] md:py-[40px] lg:py-[60px] max-w-[1100px] w-[90%] mx-auto">
            <span className="text-[36px] md:text-[42px] lg:text-[60px] text-zinc-900 block">
                <span className="font-[200]">Simon | </span>
                <span className="font-[700]">E6</span>
            </span>

            <img src={SimonE6BigImg} alt="tranos swicthes and sockets" className="w-full block mb-[20px] md:mb-[40px]" />

            <div className="grid grid-cols-1 gap-[20px] md:gap-[40px]">

                <div className="grid grid-cols-1 lg:grid-cols-[605px_1fr] gap-[20px] lg:gap-[40px] items-center">
                    <img src={EndlessFree} alt="tranos switches and sockets" className="w-full" />
                    <div>
                        <span className="uppercase font-[700] block mb-[10px] md:mb-[20px] text-[18px] md:text-[20px]">simon e6: endless freedom ingenious steady</span>
                        <p className="text-[16px] md:text-[18px] font-[300] text-zinc-800 leading-[1.6]">
                            86*82 super large push-button Comfortable visual impact Better visual and touch <br />
                            <br />

                            1.2mm ultra-thin frames Light and cozy visual beauty
                        </p>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-[1fr_605px] gap-[20px] lg:gap-[40px] items-center">
                    <div>
                        <span className="uppercase font-[700] block mb-[10px] md:mb-[20px] text-[18px] md:text-[20px]">thoughtful design</span>
                        <p className="text-[16px] md:text-[18px] font-[300] text-zinc-800 leading-[1.6]">
                            Ultra-thin dust-proof frame <br />
                            Effectively prevent dust fall <br />
                            Easy-care <br />
                            Improved service life and safety <br /><br />

                            Frameless design <br />
                            Stereoscopic contouring <br />
                            Wide extension <br />
                            Gainable and exquisite
                        </p>
                    </div>

                    <img src={ThoughtfulDesign} alt="tranos switches and sockets" className="w-full" />
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-[605px_1fr] gap-[20px] lg:gap-[40px] items-center">
                    <img src={MultiGang} alt="tranos switches and sockets" className="w-full" />
                    <div>
                        <span className="uppercase font-[700] block mb-[10px] md:mb-[20px] text-[18px] md:text-[20px]">Multi-gang</span>
                        <p className="text-[16px] md:text-[18px] font-[300] text-zinc-800 leading-[1.6]">
                            Elegant and magnificent <br />
                            Say no to irregularity <br />
                            Ensure the visual comfort <br />
                            Applicable to standard 86 mounting box
                        </p>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-[1fr_605px] gap-[20px] lg:gap-[40px] items-center">
                    <div>
                        <span className="uppercase font-[700] block mb-[10px] md:mb-[20px] text-[18px] md:text-[20px]">Build-in LED indicator</span>
                        <p className="text-[16px] md:text-[18px] font-[300] text-zinc-800 leading-[1.6]">

                            Ultra-thin dust-proof frame <br />
                            Effectively prevent dust fall <br />
                            Easy-care <br />
                            Improved service life and safety <br /><br />

                            Ultra-thin dust-proof frame <br />
                            Effectively prevent dust fall <br />
                            Easy-care <br />
                            Improved service life and safety
                        </p>
                    </div>

                    <img src={LEDIndicator} alt="tranos switches and sockets" className="w-full" />
                </div>
            </div>

            <div>
                <p className="uppercase text-center text-[14px] md:text-[16px] max-w-[500px] w-full mx-auto mb-[20px] md:mb-[40px]">maybe you're interested in...</p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-[10px]">
                    <Link to="/products/lights-wiring/residential-and-commercial/switches-and-sockets/simon-v8">
                        <img src={SV8} alt="tranos switches and sockets" className="w-full block mb-[10px]" />
                        <p className="text-center uppercase text-zinc-800">Simon V8</p>
                    </Link>

                    <Link to="/products/lights-wiring/residential-and-commercial/switches-and-sockets/simon-e3">
                        <img src={E3Renew} alt="tranos switches and sockets" className="w-full block mb-[10px]" />
                        <p className="text-center uppercase text-zinc-800">Simon E3</p>
                    </Link>
                </div>

            </div>
        </div>
    </main>
}