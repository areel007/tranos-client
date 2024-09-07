import { Strip } from "../../../components/Strip"
import Banner from "../../../assets/images/LV-Panel-Banner.jpg"
import { ProductTabStrip } from "../../../components/ProductTabStrip"
import { Link } from "react-router-dom"
// import SimoprimImg from "../../../assets/images/simoprime1.jpg"
// import SimoprimImg2 from "../../../assets/images/simoprime2.jpg"
import { useEffect, useState } from "react"
import axios from "axios"

export const Simoprime = () => {
    const [simoprime, setSimoprime] = useState({
        title: '',
        description: '',
    })

    const [simoprimeImages, setSimoprimeImages] = useState<File[]>([]);

    const fetchSimoprime = async () => {
        const response = await axios.get("https://tranos-api.onrender.com/api/v1/products/siemens-simoprime/66576641bae46ad91bb846a4")

        const { title, description, siemensSimoprimeImages } = response.data.siemensSimoprime;

        setSimoprime({
            ...simoprime,
            title,
            description,
        })

        setSimoprimeImages(siemensSimoprimeImages)

    }

    useEffect(() => {
        fetchSimoprime()
    }, [])

    return (
        <main>
            <div className="h-[50px] lg:h-[70px]"></div>
            <Strip img={Banner} title="Medium-Voltage Switchgear" />
            <ProductTabStrip tabs={<p>
                <Link to="/products/power-protection-and-distribution/siemens-simoprime" className={`${location.pathname === "/products/power-protection-and-distribution/siemens-simoprime" ? 'text-tranos-primary' : 'text-zinc-700'}`}>Siemens SIMOPRIME</Link> | <Link to="/products/power-protection-and-distribution/siemens-simosec" className={`${location.pathname === "/products/power-protection-and-distribution/siemens-simosec" ? 'text-tranos-primary' : 'text-zinc-700'}`}>Siemens SIMOSEC</Link>
            </p>} />
            <div className="max-w-[1100px] w-[90%] mx-auto py-[30px] md:py-[40px] lg:py-[60px]">
                <img src={`https://tranos-api.onrender.com/${simoprimeImages.toString().split(',')[0]}`} alt="tranos nigeria" />

                <div className="pt-[30px] md:pt-[40px] lg:pt-[60px] max-w-[900px] w-full mx-auto grid grid-cols-1 md:grid-cols-[1fr_350px] gap-[40px] md:gap-[60px]">
                    <div>
                        <span className="inline-block mb-[20px] text-[20px] font-[600] text-zinc-800">{simoprime.title}</span>
                        <p className="text-[16px] md:text-[18] lg:text-[22px] font-[300] text-zinc-800">
                            {simoprime.description}
                        </p>
                    </div>
                    <img src={`https://tranos-api.onrender.com/${simoprimeImages.toString().split(',')[1]}`} alt="tranos nigeria" />
                </div>
            </div>

            <div className="max-w-[900px] w-[90%] mx-auto pb-[30px] md:pb-[40px] lg:pb-[60px]">
                <a href="https://drive.google.com/file/d/1RrlGka6PATxnrZYp0KSvrBX7YxiTtR9t/view" target="_blank" className="p-[10px_20px] bg-tranos-primary text-white font-[300] block mb-[10px] w-[min-content] whitespace-nowrap">
                    Download Catelogue
                </a>
                <span className="text-zinc-800 text-[14px] md:text-[16px]">Download our catalogues and brochures to find all the information you need</span>
            </div>
        </main>
    )
}