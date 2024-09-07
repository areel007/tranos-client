import { Strip } from "../../../../components/Strip"
import LightsAndSwitches from "../../../../assets/images/LIGHTS-AND-SWITCHES.jpg"
import { ProductTabStrip } from "../../../../components/ProductTabStrip"
import { Link } from "react-router-dom"
import DuroImg from "../../../../assets/images/duro-image.jpg"
import ValorImg from "../../../../assets/images/valor-image.jpg"

export const Lighting = () => {
    return (
        <main>
            <div className="h-[50px] lg:h-[70px]"></div>
            <Strip img={LightsAndSwitches} title="Lights & Wiring Devices" />
            <ProductTabStrip tabs={<p>
                <Link to="/products/lights-wiring/residential-and-commercial/lights" className={`${location.pathname === "/products/lights-wiring/residential-and-commercial/lights" ? 'text-tranos-primary' : 'text-zinc-700'}`}>Lighting</Link> | <Link to="/products/lights-wiring/residential-and-commercial/switches-and-sockets" className={`${location.pathname === "/products/lights-wiring/residential-and-commercial/switches-and-sockets" ? 'text-tranos-primary' : 'text-zinc-700'}`}>Switches & Sockets</Link>
            </p>} />

            <div className="py-[30px] md:py-[40px] lg:py-[60px] max-w-[1100px] w-[90%] mx-auto grid grid-cols-1">
                <Link to="/products/lights-wiring/residential-and-commercial/lights/duro">
                    <img src={DuroImg} alt="tranos lighting and wiring devices" />
                </Link>
                <Link to="/products/lights-wiring/residential-and-commercial/lights/valor">
                    <img src={ValorImg} alt="tranos lighting and wiring devices" />
                </Link>

            </div>
        </main>
    )
}