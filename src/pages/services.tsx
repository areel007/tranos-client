import { HeaderGap } from "../components/HeaderGap"
import { Strip } from "../components/Strip"
import ServicesBanner from "../assets/images/services-banner.jpg"
import { useEffect, useState } from "react"
import axios from "axios"

export const Services = () => {
    const [servicesText, setServicesText] = useState({
        fabrication: "",
        installation: "",
        maintenance: "",
    })

    const [fabricationImg, setFabricationImg] = useState<string | ArrayBuffer | null>('')
    const [installationImg, setInstallationImg] = useState<string | ArrayBuffer | null>('')
    const [maintenanceImg, setMaintenanceImg] = useState<string | ArrayBuffer | null>('')

    const fetchServicesText = async () => {
        const response = await axios.get("https://tranos-api.onrender.com/api/v1/home/services/66066177b12adcb0cf9e0e7e")

        const { fabrication, installation, maintenance } = response.data.servicesText;

        setServicesText({
            ...servicesText,
            fabrication,
            installation,
            maintenance
        })
    }

    const fetchFabricationImg = async () => {
        const response = await axios.get("https://tranos-api.onrender.com/api/v1/services/fabrication/66b2a2cab604222828b43924")

        setFabricationImg(response.data.fabrication.fabricationImageUrl)
    }

    const fetchInstallationImg = async () => {
        const response = await axios.get("https://tranos-api.onrender.com/api/v1/services/installation/66b2a3d7b604222828b4393e")

        setInstallationImg(response.data.installation.installationImageUrl)

        console.log(response.data.installation);

    }

    const fetchMaintenanceImg = async () => {
        const response = await axios.get("https://tranos-api.onrender.com/api/v1/services/maintenance/66b2a494b604222828b43950")

        setMaintenanceImg(response.data.maintenance.maintenanceImageUrl)
    }

    useEffect(() => {
        fetchServicesText()
        fetchFabricationImg()
        fetchInstallationImg()
        fetchMaintenanceImg()
    }, [])


    return <main>
        <HeaderGap />
        <Strip img={ServicesBanner} title="Our Services" />

        <div className="max-w-[900px] w-[90%] mx-auto py-[30px] md:py-[40px] lg:py-[60px]">
            <span className="text-tranos-primary text-[36px] md:text-[46px] ld:text-[60px] font-[500] leading-[.8] block mb-[20px]">Client-focused <br />
                service delivery</span>

            <p className="font-[200] text-tranos-primary text-[18px] md:text-[22px] leading-[1.4] mb-[20px] md:mb-[40px]">
                With expertise across various industry sectors, Tranos not only manufacture equipment, we also provide high-quality support & after-sales services to all our valued clients.
            </p>

            <div className="pt-[20px] md:pt-[40px] border-t border-zinc-400">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-[20px] md:gap-[60px] items-center">
                    <div>
                        <span className="font-[700] text-zinc-800 text-[18px] md:text-[20px] block mb-[20px]">Fabrication</span>

                        <p className="text-zinc-800 leading-[1.6] font-[300] text-[14px] md:text-[16px]">
                            {servicesText.fabrication}
                        </p>
                    </div>

                    <img src={fabricationImg as string} alt="tranos services" className="w-full" />
                </div>
            </div>


        </div>

        <div className="bg-gray-100">
            <div className="max-w-[900px] w-[90%] mx-auto py-[30px] md:py-[40px] lg:py-[60px]">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-[20px] md:gap-[60px] items-center">
                    <img src={installationImg as string} alt="tranos services" className="w-full" />

                    <div>
                        <span className="font-[700] text-zinc-800 text-[18px] md:text-[20px] block mb-[20px]">Installation & Commissioning</span>

                        <p className="text-zinc-800 leading-[1.6] font-[300] text-[14px] md:text-[16px]">
                            {servicesText.installation}
                        </p>
                    </div>


                </div>
            </div>
        </div>

        <div className="bg-white">
            <div className="max-w-[900px] w-[90%] mx-auto py-[30px] md:py-[40px] lg:py-[60px]">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-[20px] md:gap-[60px] items-center">

                    <div>
                        <span className="font-[700] text-zinc-800 text-[18px] md:text-[20px] block mb-[20px]">Maintenance</span>

                        <p className="text-zinc-800 leading-[1.6] font-[300] text-[14px] md:text-[16px]">
                            {servicesText.maintenance}
                        </p>
                    </div>

                    <img src={maintenanceImg as string} alt="tranos services" className="w-full" />


                </div>
            </div>
        </div>
    </main>
}