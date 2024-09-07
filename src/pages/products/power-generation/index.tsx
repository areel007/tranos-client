import { ProductBanner } from "../../../components/ProductBanner"
import GeneratorBanner from "../../../assets/images/GENERATOR-BANNER.jpg"
import { Link } from "react-router-dom"

import GasGenerator from "../../../assets/images/GAS-GENERATOR.jpg"
import UPS from "../../../assets/images/UPS.jpg"

export const PowerGeneration = () => {
    return <main>
        <div className="h-[50px] lg:h-[70px]"></div>
        <ProductBanner img={GeneratorBanner} />

        <div className="py-[30px] md:py-[40px] lg:py-[60px] max-w-[1100px] w-[90%] mx-auto grid grid-cols-1 md:grid-cols-2 gap-[10px]">
            <Link to="/products/power-generation/gas-powered-generators" className="w-full h-[260px] sm:h-[400px] relative flex justify-center items-center overflow-hidden group">
                <img src={GasGenerator} alt="tranos power generation" className="w-full h-full absolute inset-0 group-hover:scale-[1.1] transition" />
                <div className="w-[200px] h-[200px] border-[3px] border-white relative flex justify-center items-center text-white">Power Generators</div>
            </Link>

            <Link to="#" className="w-full h-[260px] sm:h-[400px] relative flex justify-center items-center overflow-hidden group before:absolute before:inset-0 before:bg-black before:opacity-[.5] before:z-[1]">
                <img src={UPS} alt="tranos power generation" className="w-full h-full absolute inset-0 group-hover:scale-[1.1] transition" />
                <div className="w-[200px] h-[200px] border-[3px] border-white relative flex justify-center items-center text-white z-[2]">UPS Power Backup</div>
            </Link>

        </div>
    </main>
}