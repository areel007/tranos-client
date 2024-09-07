import { ProductBanner } from "../../../components/ProductBanner"
import LightSwitches from "../../../assets/images/LIGHTS-AND-SWITCHES.jpg"
import { Link } from "react-router-dom"
import SimonE6 from "../../../assets/images/simon-E6.png"
import DuroImg from "../../../assets/images/duro-image-1.jpg"
import SwitchesAndSockets from "../../../assets/images/switches-and-sockets-svg-image.svg"
import ResidentialLighting from "../../../assets/images/residential-lighting-svg.svg"
import ExplosionProof1 from "../../../assets/images/explosion-proof-1.png"
import ExplosionProof2 from "../../../assets/images/explosion-proof-2.png"
import WriringDevices from "../../../assets/images/wiring-devices-svg.svg"
import IndustrialLighting from "../../../assets/images/industrial-lighting-svg.svg"

export const Lights = () => {
    return <main>
        <div className="h-[50px] lg:h-[70px]"></div>
        <ProductBanner img={LightSwitches} />

        <div className="py-[30px] md:py-[40px] lg:py-[60px] h-[100vh] md:h-[60vh] max-w-[1100px] w-[90%] mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-[20px] md:gap-[10px]">
                <div className="group">
                    <div className="p-[7px] bg-gray-100 text-center uppercase font-[300] text-tranos-primary mb-[10px] group-hover:bg-gray-200">
                        residential & commercial
                    </div>

                    <Link to="/products/lights-wiring/residential-and-commercial/lights" className="w-full">
                        <div className="grid grid-cols-2 group-hover:hidden gap-[5px] md:gap-[10px]">
                            <img src={SimonE6} alt="tranos lights and wiring" />
                            <img src={DuroImg} alt="tranos lights and wiring" />
                        </div>

                        <div className="hidden group-hover:grid grid-cols-2 gap-[10px]">
                            <img src={SwitchesAndSockets} alt="tranos lights and wiring" />
                            <img src={ResidentialLighting} alt="tranos lights and wiring" />
                        </div>
                    </Link>
                </div>

                <div className="group">
                    <div className="p-[7px] bg-gray-100 text-center uppercase font-[300] text-tranos-primary mb-[10px] group-hover:bg-gray-200">
                        industrial
                    </div>

                    <Link to="/products/lights-wiring/industrial/wiring" className="w-full">
                        <div className="grid grid-cols-2 group-hover:hidden gap-[5px] md:gap-[10px]">
                            <img src={ExplosionProof1} alt="tranos lights and wiring" />
                            <img src={ExplosionProof2} alt="tranos lights and wiring" />
                        </div>

                        <div className="hidden group-hover:grid grid-cols-2 gap-[10px]">
                            <img src={WriringDevices} alt="tranos lights and wiring" />
                            <img src={IndustrialLighting} alt="tranos lights and wiring" />
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    </main>
}