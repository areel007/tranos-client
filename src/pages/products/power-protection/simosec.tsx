import { Strip } from "../../../components/Strip"
import Banner from "../../../assets/images/LV-Panel-Banner.jpg"
import { ProductTabStrip } from "../../../components/ProductTabStrip"
import { Link } from "react-router-dom"
// import SimosecImg from "../../../assets/images/SIMOSEC1.jpg"
// import SimosecImg2 from "../../../assets/images/simosec2.jpg"
import { useState } from "react"
import axios from "axios"
import { useEffect } from "react"

export const Simosec = () => {

    const [simosec, setSimosec] = useState({
        title: '',
        description: ''
    })

    const [simosecImages, setSimosecImages] = useState<File[]>([]);

    const fetchSimosec = async () => {
        const response = await axios.get("https://tranos-api.onrender.com/api/v1/products/siemens-simosec/665d01db5aeee919d1055b63")

        const { title, description, siemensSimosecImages } = response.data.siemensSimosec;

        setSimosec({
            ...simosec,
            title,
            description,
        })

        setSimosecImages(siemensSimosecImages)
    }

    useEffect(() => {
        fetchSimosec()
    }, [])


    return (
        <main>
            <div className="h-[50px] lg:h-[70px]"></div>
            <Strip img={Banner} title="Medium-Voltage Switchgear" />
            <ProductTabStrip tabs={<p>
                <Link to="/products/power-protection-and-distribution/siemens-simoprime" className={`${location.pathname === "/products/power-protection-and-distribution/siemens-simoprime" ? 'text-tranos-primary' : 'text-zinc-700'}`}>Siemens SIMOPRIME</Link> | <Link to="/products/power-protection-and-distribution/siemens-simosec" className={`${location.pathname === "/products/power-protection-and-distribution/siemens-simosec" ? 'text-tranos-primary' : 'text-zinc-700'}`}>Siemens SIMOSEC</Link>
            </p>} />

            <div className="max-w-[1100px] w-[90%] mx-auto py-[30px] md:py-[40px] lg:py-[60px]">
                <img src={`https://tranos-api.onrender.com/${simosecImages.toString().split(',')[0]}`} alt="tranos nigeria" />

                <div className="pt-[30px] md:pt-[40px] lg:pt-[60px] max-w-[900px] w-full mx-auto grid grid-cols-1 md:grid-cols-[400px_1fr] gap-[40px] md:gap-[60px]">
                    <img src={`https://tranos-api.onrender.com/${simosecImages.toString().split(',')[1]}`} alt="tranos nigeria" className="w-full" />

                    <div>
                        <span className="inline-block mb-[20px] text-[20px] font-[600] text-zinc-800">{simosec.title}</span>

                        <div dangerouslySetInnerHTML={{ __html: simosec.description }} className="mb-[20px]" />

                        {/* <p className="text-[14px] md:text-[16] font-[300] text-zinc-800 leading-[1.6] mb-[20px] md:mb-[40px]">
                            <span className="text-[16px] md:text-[20] lg:text-[24px] block mb-[10px]">
                                Air-insulated medium-voltage switchgear for secondary distribution.
                            </span>
                            The SIMOSEC switchgear is a factory-assembled, type-tested, three-phase, metal-enclosed, indoor switchgear according to IEC 6271-200 and GB 3906 for single busbars.
                        </p> */}

                        <div>
                            <a href="https://drive.google.com/file/d/1RrlGka6PATxnrZYp0KSvrBX7YxiTtR9t/view" target="_blank" className="p-[10px_20px] bg-tranos-primary text-white block w-[min-content] whitespace-nowrap mb-[10px]">Download Bronchure</a>
                            <span className="text-zinc-800 text-[14px] md:text-[16px]">Download our catalogues and brochures to find all the information you need</span>

                        </div>
                    </div>

                </div>
            </div>
        </main>
    )
}