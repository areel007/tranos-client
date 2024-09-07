import { ChangeEvent, useEffect, useState } from "react";
import { TTitle } from "../../types";
import axios from "axios";

const Title = ({ title }: TTitle) => {
    return (
        <span className="block font-[600] text-zinc-800 capitalize text-[24px] mb-[10px]">
            {title}
        </span>
    );
};

export const CMSAbout = () => {
    const [bannerImg, setBannerImg] = useState<string | ArrayBuffer | null>('')
    const [values, setValues] = useState({
        ourValues: '',
        canDo: '',
        proactive: '',
        surpassing: '',
        continuous: '',
        responsibility: '',
    })
    const [visionMission, setVisionMission] = useState({
        vision: '',
        mission: '',
    })

    const fetchBannerImg = async () => {
        const response = await axios.get("https://tranos-api.onrender.com/api/v1/about/banner/66b29f74b604222828b438be")

        setBannerImg(response.data.banner.banner)

    }

    const handleChangeBannerImg = async (e: ChangeEvent<HTMLInputElement>) => {
        const { files } = e.target

        if (files && files[0]) {
            const reader = new FileReader();
            reader.readAsDataURL(files[0]);
            reader.onload = () => {
                setBannerImg(reader.result);
                axios.patch("https://tranos-api.onrender.com/api/v1/about/banner/66b29f74b604222828b438be", { banner: reader.result })
            };
        }

    }

    const fetchValues = async () => {
        const response = await axios.get("https://tranos-api.onrender.com/api/v1/about/values/660713c095fbba010a3c5995")
        const { ourValues, canDo, proactive, surpassing, continuous, responsibility } = response.data.values
        setValues({
            ...values,
            ourValues,
            canDo,
            proactive,
            surpassing,
            continuous,
            responsibility
        })

    }

    const handleChangeValues = (e: ChangeEvent<HTMLTextAreaElement>) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value
        })
    }

    const updateValues = async () => {
        await axios.patch("https://tranos-api.onrender.com/api/v1/about/values/660713c095fbba010a3c5995", {
            ourValues: values.ourValues,
            canDo: values.canDo,
            proactive: values.proactive,
            surpassing: values.surpassing,
            continuous: values.continuous,
            responsibilty: values.responsibility,
        })
    }

    const fetchVisionMission = async () => {
        const response = await axios.get("https://tranos-api.onrender.com/api/v1/about/vision-mission/6607150395fbba010a3c59a5")

        const { vision, mission } = response.data.visionMission


        setVisionMission({
            ...visionMission,
            vision,
            mission,
        })

    }

    const handleChangeVisionMission = async (e: ChangeEvent<HTMLTextAreaElement>) => {
        setVisionMission({
            ...visionMission,
            [e.target.name]: e.target.value
        })
    }

    const updateVisionMission = async () => {
        await axios.patch("https://tranos-api.onrender.com/api/v1/about/vision-mission/6607150395fbba010a3c59a5",
            {
                vision: visionMission.vision,
                mission: visionMission.mission,
            }
        )
    }

    useEffect(() => {
        fetchBannerImg()
        fetchValues()
        fetchVisionMission()
    }, [])

    return <div className="w-[calc(100vw_-_300px)] relative left-[300px] z-[0]">
        <div className="p-[10px] grid grid-cols-1 gap-[30px]">
            <div>
                <Title title="who we are" />

                <div className="grid grid-cols-1 gap-[20px]">
                    {/* banner */}
                    <p className="text-14 text-red-500">
                        Max image size: 50KB, Image dimension: 1100px by 500px
                    </p>
                    <div className="grid grid-cols-1 gap-[10px]">
                        <input type="file" onChange={handleChangeBannerImg} />
                        <div>
                            <span className="text-zinc-800 block mb-[10px] text-[14px]">Upload who we are banner image. The image size should not exceed 50kb *</span>
                            <img src={bannerImg as string} alt="tranos" className="max-w-[600px] w-full" />
                        </div>
                    </div>
                </div>
            </div>

            {/* values */}
            <div>
                <Title title="values" />

                <div className="grid grid-cols-1 gap-[20px]">
                    <div className="grid grid-cols-2 gap-[10px]">
                        <div>
                            <span>Our Values</span>
                            <div className="flex items-end shadow border p-[10px]">
                                <textarea name="ourValues" value={values.ourValues} onChange={handleChangeValues} className="flex-1 h-[70px] text-zinc-700"></textarea>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={1.5}
                                    stroke="currentColor"
                                    className="size-5 text-green-600 cursor-pointer"
                                    onClick={updateValues}
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5"
                                    />
                                </svg>
                            </div>
                        </div>

                        <div>
                            <span>Can Do</span>
                            <div className="flex items-end shadow border p-[10px]">
                                <textarea name="canDo" value={values.canDo} onChange={handleChangeValues} className="flex-1 h-[70px] text-zinc-700"></textarea>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={1.5}
                                    stroke="currentColor"
                                    className="size-5 text-green-600 cursor-pointer"
                                    onClick={updateValues}
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5"
                                    />
                                </svg>
                            </div>
                        </div>

                        <div>
                            <span>Proactive</span>
                            <div className="flex items-end shadow border p-[10px]">
                                <textarea name="proactive" value={values.proactive} onChange={handleChangeValues} className="flex-1 h-[70px] text-zinc-700"></textarea>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={1.5}
                                    stroke="currentColor"
                                    className="size-5 text-green-600 cursor-pointer"
                                    onClick={updateValues}
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5"
                                    />
                                </svg>
                            </div>
                        </div>

                        <div>
                            <span>Surpassing</span>
                            <div className="flex items-end shadow border p-[10px]">
                                <textarea name="surpassing" value={values.surpassing} onChange={handleChangeValues} className="flex-1 h-[70px] text-zinc-700"></textarea>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={1.5}
                                    stroke="currentColor"
                                    className="size-5 text-green-600 cursor-pointer"
                                    onClick={updateValues}
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5"
                                    />
                                </svg>
                            </div>
                        </div>

                        <div>
                            <span>Continuous</span>
                            <div className="flex items-end shadow border p-[10px]">
                                <textarea name="continuous" value={values.continuous} onChange={handleChangeValues} className="flex-1 h-[70px] text-zinc-700"></textarea>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={1.5}
                                    stroke="currentColor"
                                    className="size-5 text-green-600 cursor-pointer"
                                    onClick={updateValues}
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5"
                                    />
                                </svg>
                            </div>
                        </div>

                        <div>
                            <span>Responsibility</span>
                            <div className="flex items-end shadow border p-[10px]">
                                <textarea name="responsibility" value={values.responsibility} onChange={handleChangeValues} className="flex-1 h-[70px] text-zinc-700"></textarea>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={1.5}
                                    stroke="currentColor"
                                    className="size-5 text-green-600 cursor-pointer"
                                    onClick={updateValues}
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5"
                                    />
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* mission & vision */}
            <div>
                <Title title="vision & mission" />

                <div className="grid grid-cols-1 gap-[20px]">
                    <div className="grid grid-cols-2 gap-[10px]">
                        <div>
                            <span>Vision</span>
                            <div className="flex items-end shadow border p-[10px]">
                                <textarea name="vision" value={visionMission.vision} onChange={handleChangeVisionMission} className="flex-1 h-[70px] text-zinc-700"></textarea>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={1.5}
                                    stroke="currentColor"
                                    className="size-5 text-green-600 cursor-pointer"
                                    onClick={updateVisionMission}
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5"
                                    />
                                </svg>
                            </div>
                        </div>

                        <div>
                            <span>Mission</span>
                            <div className="flex items-end shadow border p-[10px]">
                                <textarea name="mission" value={visionMission.mission} onChange={handleChangeVisionMission} className="flex-1 h-[70px] text-zinc-700"></textarea>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={1.5}
                                    stroke="currentColor"
                                    className="size-5 text-green-600 cursor-pointer"
                                    onClick={updateVisionMission}
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5"
                                    />
                                </svg>
                            </div>
                        </div>


                    </div>
                </div>
            </div>
        </div>
    </div>
}