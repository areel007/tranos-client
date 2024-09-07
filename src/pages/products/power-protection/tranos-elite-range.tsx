
import { Link, useLocation } from "react-router-dom"
import Banner from "../../../assets/images/LV-Panel-Banner.jpg"
import { ProductTabStrip } from "../../../components/ProductTabStrip"
import { Strip } from "../../../components/Strip"
import TranosEliteSVG from "../../../assets/images/tranos-elite-svg.svg"
import TranosEliteOne from "../../../assets/images/tranos-elite1.jpg"
import TranosEliteImg from "../../../assets/images/tranos-elite-grid1.jpg"
import { useEffect, useState } from "react"
import axios from "axios"

export const TranosEliteRange = () => {
    const location = useLocation()

    const [tranosEliteRange, setTranosEliteRange] = useState({
        title: "",
        description: "",
        features: "",
    })
    const [selectedFilesTranosElite, setSelectedFilesTranosElite] = useState<File[]>([]);

    const fetchTranosEliteRange = async () => {
        const response = await axios.get("https://tranos-api.onrender.com/api/v1/products/tranos-elite-range/664fadaee773079b1e9a408e")

        const { title, description, tranosEliteImages, features } = response.data.tranosEliteRange;

        setTranosEliteRange({
            ...tranosEliteRange,
            title,
            description,
            features,
        })

        setSelectedFilesTranosElite(tranosEliteImages)
        console.log(selectedFilesTranosElite);


    }

    useEffect(() => {
        fetchTranosEliteRange()
    }, [])

    return <main>
        <div className="h-[50px] lg:h-[70px]"></div>
        <Strip img={Banner} title="Low Voltage Power Protection & Distribution" />
        <ProductTabStrip tabs={<p>
            <Link to="/products/power-protection-and-distribution/tranos-elite-range" className={`${location.pathname === "/products/power-protection-and-distribution/tranos-elite-range" ? 'text-tranos-primary' : 'text-zinc-700'}`}>Tranos Elite Range</Link> | <Link to="/products/power-protection-and-distribution/siemens-sivacon" className={`${location.pathname === "/products/power-protection-and-distribution/siemens-sivacon" ? 'text-tranos-primary' : 'text-zinc-700'}`}>Siemens SIVACON S8</Link> | <Link to="/products/power-protection-and-distribution/atex-power-panels" className={`${location.pathname === "/products/power-protection-and-distribution/atex-power-panels" ? 'text-tranos-primary' : 'text-zinc-700'}`}>ATEX Power Panels</Link>
        </p>} />

        <div className="max-w-[1100px] w-[90%] mx-auto py-[30px] md:py-[40px] lg:py-[60px]">
            <div className="mb-[20px]">
                <img src={TranosEliteSVG} alt="tranos nigeria" className="mb-[10px]" />
                <span className="uppercase text-[14px] md:text-[16px] text-zinc-800">low voltage electric panels and switchgears</span>
            </div>

            <img src={TranosEliteOne} alt="tranos nigeria" />

            <div className="mt-[30px] md:my-[40px] lg:my-[40px]">
                <span className="capitalize text-zinc-800 text-[20px] md:text-[22px] lg:text-[26px] inline-block mb-[5px] md:mb-[10px]">{tranosEliteRange.title}</span>

                <p className="text-[18px] md:text-[22px] font-[200]">
                    {tranosEliteRange.description}
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-[30px] md:gap-[60px]">
                <div dangerouslySetInnerHTML={{ __html: tranosEliteRange.features }} className="ul-tranos-elite" />
                {/* <div>
                    <div className="mb-[20px]">
                        <p className="text-[14px] md:text-[16px] font-[300] text-zinc-800 mb-[10px]">Some features of the TranosElite panels include:</p>
                        <ul className="list-disc ml-[20px] text-zinc-800 font-[300] leading-[1.8]">
                            <li>Panel enclosure degree of protection IP 45-65</li>
                            <li>Forms 1, 2, 3A, 3B, 4A and 4B available</li>
                            <li>Steel enclosure is powder-coated for corrosion prevention and aesthetic appeal.</li>
                            <li>Busbar design in accordance with DIN-43670.</li>
                        </ul>
                    </div>

                    <div>
                        <p className="text-[14px] md:text-[16px] text-zinc-800 mb-[10px] font-[500]">Panel Types</p>

                        <ul className="list-disc ml-[20px] text-zinc-800 font-[300] leading-[1.8]">
                            <li>Power Control Centres (PCC)</li>
                            <li>Motor Control Centres</li>
                            <li>Main Distribution Boards</li>
                            <li>Sub-main Distribution Boards</li>
                            <li>PLC Control Panels</li>
                            <li>Automatic Mains Failure (AMF) Panels</li>
                            <li>Synchronization Panels</li>
                        </ul>
                    </div>
                </div> */}

                <img src={TranosEliteImg} alt="tranos nigeria" />
            </div>

            <div className="flex flex-col items-start gap-[10px] max-w-[400px] w-full mt-[40px]">
                <a href="https://drive.google.com/file/d/1RrlGka6PATxnrZYp0KSvrBX7YxiTtR9t/view" target="_blank" className="p-[10px_20px] bg-tranos-primary text-white font-[300] text-[14px]">Download Catalogue</a>
                <span className="text-[14px] md:text-[16px] font-[300]">Download our catalogues and bronchures to find all the information you need.</span>
            </div>
        </div>
    </main>
}