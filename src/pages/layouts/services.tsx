import { ChangeEvent, useState, useEffect } from "react";
import { TTitle } from "../../types";
import axios from "axios";

const Title = ({ title }: TTitle) => {
    return (
        <span className="block font-[600] text-zinc-800 capitalize text-[24px] mb-[10px]">
            {title}
        </span>
    );
};


export const CMSServices = () => {
    const [servicesText, setServicesText] = useState({
        fabrication: "",
        installation: "",
        maintenance: "",
    })

    const [fabricationImg, setFabricationImg] = useState<string | ArrayBuffer | null>('')
    const [installationImg, setInstallationImg] = useState<string | ArrayBuffer | null>('')
    const [maintenanceImg, setMaintenanceImg] = useState<string | ArrayBuffer | null>('')

    const handleChangeServices = (e: ChangeEvent<HTMLTextAreaElement>) => {
        setServicesText({
            ...servicesText,
            [e.target.name]: e.target.value
        })
    }

    const updateServices = async () => {

        await axios.patch("https://tranos-api.onrender.com/api/v1/home/services/66066177b12adcb0cf9e0e7e",
            {
                fabrication: servicesText.fabrication,
                installation: servicesText.installation,
                maintenance: servicesText.maintenance,
            }
        )
    }

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

    const updateFabrictionImg = async (e: ChangeEvent<HTMLInputElement>) => {
        const { files } = e.target

        if (files && files[0]) {
            const reader = new FileReader();
            reader.readAsDataURL(files[0]);
            reader.onload = () => {
                setFabricationImg(reader.result);
                axios.patch("https://tranos-api.onrender.com/api/v1/services/fabrication/66b2a2cab604222828b43924", { fabrication: reader.result })
            };
        }
    }

    const fetchInstallationImg = async () => {
        const response = await axios.get("https://tranos-api.onrender.com/api/v1/services/installation/66b2a3d7b604222828b4393e")

        setInstallationImg(response.data.installation.installationImageUrl)

    }

    const updateInstallationImg = async (e: ChangeEvent<HTMLInputElement>) => {
        const { files } = e.target

        if (files && files[0]) {
            const reader = new FileReader();
            reader.readAsDataURL(files[0]);
            reader.onload = () => {
                setInstallationImg(reader.result);
                axios.patch("https://tranos-api.onrender.com/api/v1/services/installation/66b2a3d7b604222828b4393e", { installation: reader.result })
            };
        }
    }

    const fetchMaintenanceImg = async () => {
        const response = await axios.get("https://tranos-api.onrender.com/api/v1/services/maintenance/66b2a494b604222828b43950")

        setMaintenanceImg(response.data.maintenance.maintenanceImageUrl)
    }

    const updateMaintenanceImg = async (e: ChangeEvent<HTMLInputElement>) => {
        const { files } = e.target;

        if (files && files[0]) {
            const reader = new FileReader();
            reader.readAsDataURL(files[0]);
            reader.onload = () => {
                setMaintenanceImg(reader.result);
                axios.patch("https://tranos-api.onrender.com/api/v1/services/maintenance/66b2a494b604222828b43950", { maintenance: reader.result })
            };
        }
    }

    useEffect(() => {
        fetchServicesText()
        fetchFabricationImg()
        fetchInstallationImg()
        fetchMaintenanceImg()
    }, []);



    return <div className="w-[calc(100vw_-_300px)] relative left-[300px] z-[0]">
        <div className="p-[10px] grid grid-cols-1 gap-[30px]">
            <Title title="Fabrication" />

            <div className="w-full grid grid-cols-1 gap-[20px]">

                {/* fabrication */}
                <div className="grid grid-cols-2 gap-[20px] items-start">
                    <div className="shadow border p-[10px] flex items-end">
                        <textarea name="fabrication" className="flex-1" value={servicesText.fabrication} onChange={(e) => handleChangeServices(e)}></textarea>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="size-5 text-green-600 cursor-pointer"
                            onClick={updateServices}
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5"
                            />
                        </svg>
                    </div>

                    <div>
                        <p className="text-14 text-red-500">
                            Max image size: 40KB, Image dimension: 420px by 260px
                        </p>
                        <div>
                            <input type="file" className="block mb-[10px]" onChange={updateFabrictionImg} />
                            <img src={fabricationImg as string} alt="tranos" />
                        </div>
                    </div>
                </div>

                {/* installation */}
                <div className="grid grid-cols-2 gap-[20px] items-start">
                    <div className="shadow border p-[10px] flex items-end">
                        <textarea name="installation" className="flex-1" value={servicesText.installation} onChange={(e) => handleChangeServices(e)}></textarea>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="size-5 text-green-600 cursor-pointer"
                            onClick={updateServices}
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5"
                            />
                        </svg>
                    </div>

                    <div>
                        <p className="text-14 text-red-500">
                            Max image size: 40KB, Image dimension: 420px by 260px
                        </p>
                        <div>
                            <input type="file" onChange={updateInstallationImg} className="block mb-[10px]" />
                            <img src={installationImg as string} alt="tranos" />
                        </div>
                    </div>
                </div>

                {/* maintenance */}
                <div className="grid grid-cols-2 gap-[20px] items-start">
                    <div className="shadow border p-[10px] flex items-end">
                        <textarea name="maintenance" className="flex-1" value={servicesText.maintenance} onChange={(e) => handleChangeServices(e)}></textarea>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="size-5 text-green-600 cursor-pointer"
                            onClick={updateServices}
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5"
                            />
                        </svg>
                    </div>

                    <div>
                        <p className="text-14 text-red-500">
                            Max image size: 40KB, Image dimension: 420px by 260px
                        </p>
                        <div>
                            <input type="file" className="block mb-[10px]" onChange={updateMaintenanceImg} />
                            <img src={maintenanceImg as string} alt="tranos" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
}