import { Strip } from "../../../../../components/Strip"
import { Link } from "react-router-dom"
import { ProductTabStrip } from "../../../../../components/ProductTabStrip"

import LightsAndSwitches from "../../../../../assets/images/LIGHTS-AND-SWITCHES.jpg"
import DuroImg from "../../../../../assets/images/duro-image.jpg"
import { VALOR } from "../../../../../utils/products"
import { useEffect } from "react"

export const Valor = () => {

    useEffect(() => window.scrollTo(0, 0))
    return <main>
        <div className="h-[50px] lg:h-[70px]"></div>
        <Strip img={LightsAndSwitches} title="Lights & Wiring Devices" />
        <ProductTabStrip tabs={<p>
            <Link to="/products/lights-wiring/residential-and-commercial/lights" className={`${location.pathname === "/products/lights-wiring/residential-and-commercial/lights/valor" ? 'text-tranos-primary' : 'text-zinc-700'}`}>Lighting</Link> | <Link to="/products/lights-wiring/residential-and-commercial/switches-and-sockets" className={`${location.pathname === "/products/lights-wiring/residential-and-commercial/switches-and-sockets" ? 'text-tranos-primary' : 'text-zinc-700'}`}>Switches & Sockets</Link>
        </p>} />

        <div className="py-[30px] md:py-[40px] lg:py-[60px] max-w-[1100px] w-[90%] mx-auto">
            <div className="mb-[20px] md:mb-[40px]">
                <span className="uppercase block text-center text-[24px] md:text-[28px] lg:text-[32px] text-tranos-primary">valor</span>
                <span className="block text-center text-[16px] md:text-[18px] lg:text-[20px] text-zinc-600">The best solution for a cost-effective installation.</span>
            </div>

            <nav className="max-w-[500px] w-fullmx-auto mx-auto overflow-auto py-[20px] border-b border-zinc-500" id="downlight">
                <ul className="flex justify-between min-w-[500px] text-[14px] md:text-[16px]">
                    <li>
                        <a href="#ceiling-light" className="capitalize text-zinc-600">ceiling light</a>
                    </li>

                    <li>
                        <a href="#spotlight" className="capitalize text-zinc-600">spotlight</a>
                    </li>

                    <li>
                        <a href="#batten" className="capitalize text-zinc-600">batten</a>
                    </li>

                    <li>
                        <a href="#tube" className="capitalize text-zinc-600">tube</a>
                    </li>

                    <li>
                        <a href="#bulb" className="capitalize text-zinc-600">bulb</a>
                    </li>

                    <li>
                        <a href="#downlight" className="capitalize text-zinc-600">downlight</a>
                    </li>

                </ul>
            </nav>


            <div>
                {
                    VALOR.map((item, i) => <div key={i} className="py-[20px] md:py-[40px] border-b border-zinc-800" id={item.id ? item.id : ''}>
                        <span className="text-center block font-[700] text-[16px] md:text-[18px]">{item.name}</span>
                        <p className="text-center text-[14px] md:text-[16px] max-w-[700px] mx-auto font-[300] leading-[1.8] mb-[20px]">
                            {item.description}
                        </p>
                        <img src={item.img} alt="tranos lights and wiring devices" className="w-full" />
                    </div>)
                }
            </div>

            <div className="pt-[30px] md:pt-[40px] lg:pt-[60px]">
                <span className="block text-center uppercase text-[16px] md:text-[20px] text-zinc-800">may you're interested in...</span>

                <Link to="/products/lights-wiring/residential-and-commercial/lights/duro">
                    <img src={DuroImg} alt="tranos lights and wiring devices" />
                </Link>
            </div>
        </div>
    </main>
}