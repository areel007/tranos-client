import { Strip } from "../../../components/Strip"
import { ProductTabStrip } from "../../../components/ProductTabStrip"
import { Link } from "react-router-dom"
import Banner from "../../../assets/images/LV-Panel-Banner.jpg"
import { ProductTitle } from "../../../components/ProductTitle"
// import { ATEXPOWERPANELS } from "../../../utils/products"
import { TAtexPowerPanels } from "../../../types"
import { useEffect, useState } from "react"
import axios from "axios"

export const ATEXPowerPanels = () => {
    const [atexPowerPanels, setAtexPowerPanels] = useState<TAtexPowerPanels[] | null>(null)

    const fetchAtexPowerPanels = async () => {
        const response = await axios.get("https://tranos-api.onrender.com/api/v1/products/atex-power-panels")

        setAtexPowerPanels(response.data.atexPowerPanels)

    }

    useEffect(() => {
        fetchAtexPowerPanels()
    }, [])

    return (
        <main>
            <div className="h-[50px] lg:h-[70px]"></div>
            <Strip img={Banner} title="Low Voltage Power Protection & Distribution" />
            <ProductTabStrip tabs={<p>
                <Link to="/products/power-protection-and-distribution/tranos-elite-range" className={`${location.pathname === "/products/power-protection-and-distribution/tranos-elite-range" ? 'text-tranos-primary' : 'text-zinc-700'}`}>Tranos Elite Range</Link> | <Link to="/products/power-protection-and-distribution/siemens-sivacon" className={`${location.pathname === "/products/power-protection-and-distribution/siemens-sivacon" ? 'text-tranos-primary' : 'text-zinc-700'}`}>Siemens SIVACON S8</Link> | <Link to="/products/power-protection-and-distribution/atex-power-panels" className={`${location.pathname === "/products/power-protection-and-distribution/atex-power-panels" ? 'text-tranos-primary' : 'text-zinc-700'}`}>ATEX Power Panels</Link>
            </p>} />

            <div className="max-w-[1100px] w-[90%] mx-auto py-[30px] md:py-[40px] lg:py-[60px]">
                <ProductTitle title="explosion-proof power panels" customStyles="border-blue-400 text-[18px] md:text-[20px]" />

                <div>
                    {atexPowerPanels?.map((item, i) => <div key={i} className="grid grid-cols-1 md:grid-cols-[400px_1fr] gap-[20px] md:gap-[40px] items-center border-b border-zinc-300 last:border-none py-[40px]">
                        <img src={`https://tranos-api.onrender.com/${item.atexPowerPanelsImage}`} alt="tranos nigeria" className="w-full" />

                        <div>
                            <span className="capitalize font-[600] inline-block mb-[20px]">{item.title}</span>
                            <div dangerouslySetInnerHTML={{ __html: item.features }} className="ul-tranos-elite" />
                            {/* <ul className="text-zinc-800 list-disc ml-[20px] leading-[1.6] font-[300]">
                                {item.features.map((feature, i) => <li key={i}>{feature}</li>)}
                            </ul> */}
                        </div>
                    </div>)}
                </div>
            </div>
        </main>
    )
}