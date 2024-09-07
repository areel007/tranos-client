import { Strip } from "../../../../../components/Strip"
import { Link } from "react-router-dom"
import { ProductTabStrip } from "../../../../../components/ProductTabStrip"

import LightsAndSwitches from "../../../../../assets/images/LIGHTS-AND-SWITCHES.jpg"
import ValorImg from "../../../../../assets/images/valor-image.jpg"
import { useEffect } from "react"
import { DURO } from "../../../../../utils/products"

export const Duro = () => {

    useEffect(() => window.scrollTo(0, 0))

    return <main>
        <div className="h-[50px] lg:h-[70px]"></div>
        <Strip img={LightsAndSwitches} title="Lights & Wiring Devices" />
        <ProductTabStrip tabs={<p>
            <Link to="/products/lights-wiring/residential-and-commercial/lights" className={`${location.pathname === "/products/lights-wiring/residential-and-commercial/lights/duro" ? 'text-tranos-primary' : 'text-zinc-700'}`}>Lighting</Link> | <Link to="/products/lights-wiring/residential-and-commercial/switches-and-sockets" className={`${location.pathname === "/products/lights-wiring/residential-and-commercial/switches-and-sockets" ? 'text-tranos-primary' : 'text-zinc-700'}`}>Switches & Sockets</Link>
        </p>} />

        <div className="py-[30px] md:py-[40px] lg:py-[60px] max-w-[1100px] w-[90%] mx-auto">
            <div className="mb-[20px] md:mb-[40px]">
                <span className="uppercase block text-center text-[24px] md:text-[28px] lg:text-[32px] text-tranos-primary">duro</span>
                <span className="block text-center text-[16px] md:text-[18px] lg:text-[20px] text-zinc-600">Flexibility and durability solutions.</span>
            </div>

            <nav className="max-w-[900px] w-fullmx-auto mx-auto overflow-auto py-[20px] border-b border-zinc-500" id="downlight">
                <ul className="flex justify-between min-w-[700px] text-[14px] md:text-[16px]">
                    <li>
                        <a href="#downlight" className="capitalize text-zinc-600">downlight</a>
                    </li>

                    <li>
                        <a href="#spotlight" className="capitalize text-zinc-600">spotlight</a>
                    </li>

                    <li>
                        <a href="#pl" className="capitalize text-zinc-600">panel light</a>
                    </li>

                    <li>
                        <a href="#bulb" className="capitalize text-zinc-600">bulb</a>
                    </li>

                    <li>
                        <a href="#ll" className="capitalize text-zinc-600">linear light</a>
                    </li>

                    <li>
                        <a href="#t8" className="capitalize text-zinc-600">tube</a>
                    </li>

                    <li>
                        <a href="#jl" className="capitalize text-zinc-600">strip light</a>
                    </li>

                    <li>
                        <a href="#ml" className="capitalize text-zinc-600">mirror light</a>
                    </li>
                </ul>
            </nav>


            <div>
                {
                    DURO.map((item, i) => <div key={i} className="py-[20px] md:py-[40px] border-b border-zinc-800">
                        <span className="text-center block font-[700] text-[16px] md:text-[18px]" id={item.id ? item.id : ""}>{item.name}</span>
                        <p className="text-center text-[14px] md:text-[16px] max-w-[700px] mx-auto font-[300] leading-[1.8] mb-[20px]">
                            {item.description}
                        </p>
                        <img src={item.img} alt="tranos lights and wiring devices" className="w-full" />
                    </div>)
                }
            </div>

            <div className="pt-[30px] md:pt-[40px] lg:pt-[60px]">
                <span className="block text-center uppercase text-[16px] md:text-[20px] text-zinc-800">may you're interested in...</span>

                <Link to="/products/lights-wiring/residential-and-commercial/lights/valor">
                    <img src={ValorImg} alt="tranos lights and wiring devices" />
                </Link>
            </div>
        </div>
    </main>
}