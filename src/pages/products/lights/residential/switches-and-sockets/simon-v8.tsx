import { HeaderGap } from "../../../../../components/HeaderGap"
import { Strip } from "../../../../../components/Strip"
import { Link } from "react-router-dom"
import { ProductTabStrip } from "../../../../../components/ProductTabStrip"

import StripImg from "../../../../../assets/images/LIGHTS-AND-SWITCHES.jpg"
import SimonV8BigImg from "../../../../../assets/images/simon-v8-banner.jpg"
import SimonV8Elegant from "../../../../../assets/images/simon-v8-elegant.jpg"
import SimonV8Multi from "../../../../../assets/images/simon-v8-multi.jpg"

import E6Renew from "../../../../../assets/images/E6-renew.jpg"
import E3Renew from "../../../../../assets/images/E3-renew.jpg"

export const SimonV8 = () => {
    return <main>
        <HeaderGap />
        <Strip img={StripImg} title="Light & Wiring Devices" />
        <ProductTabStrip tabs={<p>
            <Link to="/products/lights-wiring/residential-and-commercial/lights" className={`${location.pathname === "/products/lights-wiring/residential-and-commercial/lights/valor" ? 'text-tranos-primary' : 'text-zinc-700'}`}>Lighting</Link> | <Link to="/products/lights-wiring/residential-and-commercial/switches-and-sockets" className={`${location.pathname === "/products/lights-wiring/residential-and-commercial/switches-and-sockets/simon-v8" ? 'text-tranos-primary' : 'text-zinc-700'}`}>Switches & Sockets</Link>
        </p>} />

        <div className="py-[30px] md:py-[40px] lg:py-[60px] max-w-[1100px] w-[90%] mx-auto">
            <span className="text-[36px] md:text-[42px] lg:text-[60px] text-zinc-900 block">
                <span className="font-[200]">Simon | </span>
                <span className="font-[700]">V8</span>
            </span>

            <img src={SimonV8BigImg} alt="tranos swicthes and sockets" className="w-full block mb-[20px] md:mb-[40px]" />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-[20px] md:gap-[40px] items-center mb-[30px] md:mb-[60px]">
                <img src={SimonV8Elegant} alt="tranos switches and sockets" className="w-full" />

                <div>
                    <span className="uppercase text-[16px] md:text-[18px] font-[700] block mb-[10px] text-zinc-800">simon v8: elegant& luxury design</span>
                    <p className="text-zinc-800 font-[300] leading-[1.8] text-[14px] md:text-[16px]">
                        The V8 is a timeless design with noble finishes and an extensive range of textures to adapt to each space. It is compatible with the most advanced functions that make a space more comfortable: light dimming, multimedia and sound; are just a small example of its great potential. Its inspiration from natural materials makes the V8 unique. From bold and avant-garde frames to the most harmonious and traditional. Thanks to the originality and quality of the pure materials which they are made with, there are multiple possibilities (metal, glass, or plastic). So, it transmits the strength and beauty of nature to any space.
                    </p>
                </div>
            </div>

            <p className="uppercase text-center text-[14px] md:text-[16px] max-w-[500px] w-full mx-auto mb-[20px] md:mb-[40px]">multiple choices of frame offer a different texture and color combination</p>

            <img src={SimonV8Multi} alt="tranos switches and sockets" className="w-full block" />

            <div>
                <p className="uppercase text-center text-[14px] md:text-[16px] max-w-[500px] w-full mx-auto mb-[20px] md:mb-[40px]">maybe you're interested in...</p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-[10px]">
                    <Link to="/products/lights-wiring/residential-and-commercial/switches-and-sockets/simon-e6">
                        <img src={E6Renew} alt="tranos switches and sockets" className="w-full block mb-[10px]" />
                        <p className="text-center uppercase text-zinc-800">Simon E6</p>
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