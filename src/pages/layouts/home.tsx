import axios from "axios";
import { useEffect, useState } from "react";
import { TPartner, TTitle } from "../../types";

const Title = ({ title }: TTitle) => {
    return (
        <span className="block font-[600] text-zinc-800 capitalize text-[24px] mb-[10px]">
            {title}
        </span>
    );
};

export const CMSHome = () => {
    const [heroText, setHeroText] = useState({
        lightTextOne: "",
        lightTextTwo: "",
        boldText: "",
        smallText: "",
    });

    const [ourServices, setOurServices] = useState({
        fabrication: "",
        installation: "",
        maintenance: "",
    })

    const [heroImageOne, setHeroImageOne] = useState<string | ArrayBuffer | null>('')
    const [heroImageTwo, setHeroImageTwo] = useState<string | ArrayBuffer | null>('')
    const [heroImageThree, setHeroImageThree] = useState<string | ArrayBuffer | null>('')
    const [partners, setPartners] = useState<TPartner[] | null>(null);
    const [whyText, setWhyText] = useState("")
    const [whyVideo, setWhyVideo] = useState("")
    const [footer, setFooter] = useState({
        about: "",
        phone: "",
        email: ""
    })

    const handleHeroTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setHeroText({
            ...heroText,
            [e.target.name]: e.target.value,
        });
    };

    const handleOurServices = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setOurServices({ ...ourServices, [e.target.name]: e.target.value })
    }

    const getHeroText = async () => {
        const response = await axios.get(
            "https://tranos-api.onrender.com/api/v1/home/hero/66061b705d362abf2116355d"
        );
        const { lightTextOne, lightTextTwo, boldText, smallText } = response.data.heroText;

        setHeroText({
            lightTextOne,
            lightTextTwo,
            boldText,
            smallText,
        });
    };

    const getOurServices = async () => {
        const response = await axios.get("https://tranos-api.onrender.com/api/v1/home/services/66066177b12adcb0cf9e0e7e")
        const { fabrication, installation, maintenance } = response.data.servicesText;

        setOurServices({
            ...ourServices,
            fabrication,
            installation,
            maintenance
        })
    }

    const updateHeroText = async () => {
        await axios.patch(
            "https://tranos-api.onrender.com/api/v1/home/hero/66061b705d362abf2116355d",
            {
                lightTextOne: heroText.lightTextOne,
                lightTextTwo: heroText.lightTextTwo,
                boldText: heroText.boldText,
            }
        );
    };

    const getHeroImageOne = async () => {
        const response = await axios.get("https://tranos-api.onrender.com/api/v1/hero-images/hero-image-one/66ad86e5fecf29e43d2df61e");
        setHeroImageOne(response.data.heroImageOne.image)

        console.log(heroImageOne);


    };

    const getHeroImageTwo = async () => {
        const response = await axios.get("https://tranos-api.onrender.com/api/v1/hero-images/hero-image-two/66ad86ebfecf29e43d2df620");
        setHeroImageTwo(response.data.heroImageTwo.image)

    };

    const getHeroImageThree = async () => {
        const response = await axios.get("https://tranos-api.onrender.com/api/v1/hero-images/hero-image-three/66ad86f1fecf29e43d2df622");
        setHeroImageThree(response.data.heroImageThree.image)


    };

    const handleChangeHeroImageOne = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const { files } = e.target;


        if (files && files[0]) {
            const reader = new FileReader();
            reader.readAsDataURL(files[0]);
            reader.onload = () => {
                setHeroImageOne(reader.result);

                axios.patch("https://tranos-api.onrender.com/api/v1/hero-images/hero-image-one/66ad86e5fecf29e43d2df61e", {
                    image: reader.result
                });
            };
        }

    };

    const handleChangeHeroImageTwo = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const { files } = e.target;


        if (files && files[0]) {
            const reader = new FileReader();
            reader.readAsDataURL(files[0]);
            reader.onload = () => {
                setHeroImageTwo(reader.result);

                axios.patch("https://tranos-api.onrender.com/api/v1/hero-images/hero-image-two/66ad86ebfecf29e43d2df620", {
                    image: reader.result
                });
            };
        }

    };

    const handleChangeHeroImageThree = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const { files } = e.target;


        if (files && files[0]) {
            const reader = new FileReader();
            reader.readAsDataURL(files[0]);
            reader.onload = () => {
                setHeroImageThree(reader.result);

                axios.patch("https://tranos-api.onrender.com/api/v1/hero-images/hero-image-three/66ad86f1fecf29e43d2df622", {
                    image: reader.result
                });
            };
        }

    };

    const handleChangeOurServices = async () => {
        await axios.patch(
            "https://tranos-api.onrender.com/api/v1/home/services/66066177b12adcb0cf9e0e7e",
            {
                fabrication: ourServices.fabrication,
                installation: ourServices.installation,
                maintenance: ourServices.maintenance,
            }
        );
    }


    // partners
    const getPartners = async () => {
        const response = await axios.get("https://tranos-api.onrender.com/api/v1/home/partner");
        setPartners(response.data.partners);
    };

    const handleDeletePartner = async (_: React.MouseEvent<SVGSVGElement>, id: string) => {
        await axios.delete(`https://tranos-api.onrender.com/api/v1/home/partner/${id}`);
        await getPartners();
    };

    const addPartner = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const files = e.target.files;

        if (files) {
            const fd = new FormData();
            for (let i = 0; i < files.length; i++) {
                fd.append("imageUrl", files[i]);
            }

            await axios.post("https://tranos-api.onrender.com/api/v1/home/partner", fd);
            await getPartners();
        }
    };

    const getWhyText = async () => {
        const response = await axios.get("https://tranos-api.onrender.com/api/v1/home/why/6606630ab12adcb0cf9e0e97")

        setWhyText(response.data.why.why)

    }

    const handleChangeWhyText = async (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setWhyText(e.target.value)
    }

    const updateWhyText = async () => {
        await axios.patch("https://tranos-api.onrender.com/api/v1/home/why/6606630ab12adcb0cf9e0e97",
            { why: whyText }
        )
    }

    const getWhyVideo = async () => {
        const response = await axios.get("https://tranos-api.onrender.com/api/v1/home-video/6606e35f1729e5648128af93")

        setWhyVideo(response.data.video.video);

    }

    const handleChangeVideo = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const files = e.target.files;
        if (files) {
            const fd = new FormData();
            for (let i = 0; i < files.length; i++) {
                fd.append("videoUrl", files[i]);
            }

            await axios.patch("https://tranos-api.onrender.com/api/v1/home-video/6606e35f1729e5648128af93", fd)
        }
    }

    const getFooter = async () => {
        const response = await axios.get("https://tranos-api.onrender.com/api/v1/footer/664275dea3948f5b352982a0");
        const { about, phone, email } = response.data.footerText
        setFooter({
            about,
            phone,
            email
        })

    }

    const handleChangeFooter = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setFooter({
            ...footer,
            [e.target.name]: e.target.value
        })
    }

    const handleUpdateFooter = async () => {

        await axios.patch("https://tranos-api.onrender.com/api/v1/footer/664275dea3948f5b352982a0", {
            about: footer.about,
            phone: footer.phone,
            email: footer.email
        });
    }

    console.log(footer.phone);



    // mounted
    useEffect(() => {
        getHeroText();
        getHeroImageOne();
        getHeroImageTwo()
        getHeroImageThree()
        getPartners();
        getOurServices()
        getWhyText()
        getWhyVideo()
        getFooter()
    }, []);

    return (
        <div className="w-[calc(100vw_-_300px)] relative left-[300px] z-[0]">
            <div className="p-[10px] grid grid-cols-1 gap-[30px]">
                <div className="grid grid-cols-1 gap-[20px]">
                    {/* hero text */}
                    <div>
                        <Title title="hero" />
                        <div className="grid grid-cols-3 gap-[10px]">
                            <div className="border shadow p-[10px] flex items-center justify-between">
                                <input
                                    type="text"
                                    name="lightTextOne"
                                    value={heroText.lightTextOne}
                                    className="flex-1 outline-none"
                                    onChange={(e) => handleHeroTextChange(e)}
                                />
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={1.5}
                                    stroke="currentColor"
                                    className="size-5 text-green-600 cursor-pointer"
                                    onClick={updateHeroText}
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5"
                                    />
                                </svg>
                            </div>

                            <div className="border shadow p-[10px] flex items-center justify-between">
                                <input
                                    type="text"
                                    name="lightTextTwo"
                                    value={heroText.lightTextTwo}
                                    className="flex-1 outline-none"
                                    onChange={(e) => handleHeroTextChange(e)}
                                />
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={1.5}
                                    stroke="currentColor"
                                    className="size-5 text-green-600 cursor-pointer"
                                    onClick={updateHeroText}
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5"
                                    />
                                </svg>
                            </div>

                            <div className="border shadow p-[10px] flex items-center justify-between">
                                <input
                                    type="text"
                                    name="boldText"
                                    value={heroText.boldText}
                                    className="flex-1 outline-none"
                                    onChange={(e) => handleHeroTextChange(e)}
                                />
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={1.5}
                                    stroke="currentColor"
                                    className="size-5 text-green-600 cursor-pointer"
                                    onClick={updateHeroText}
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5"
                                    />
                                </svg>
                            </div>

                            <div className="border shadow p-[10px] flex items-center justify-between">
                                <input
                                    type="text"
                                    name="smallText"
                                    value={heroText.smallText}
                                    className="flex-1 outline-none"
                                    onChange={(e) => handleHeroTextChange(e)}
                                />
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={1.5}
                                    stroke="currentColor"
                                    className="size-5 text-green-600 cursor-pointer"
                                    onClick={updateHeroText}
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

                    {/* hero images */}
                    <div>
                        <div>
                            <p className="text-14 text-red-500">
                                Max image size: 70KB, Image dimension: 1920px by 600px
                            </p>

                        </div>

                        <div className="grid grid-cols-3 gap-[20px]">
                            <div>
                                <input
                                    type="file"
                                    className="block mb-4 p-2 border border-gray-400 w-full"
                                    onChange={handleChangeHeroImageOne}
                                    multiple
                                />
                                <div className="w-full h-[200px]">
                                    <img
                                        src={heroImageOne as string}
                                        alt="hero"
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            </div>

                            <div>
                                <input
                                    type="file"
                                    className="block mb-4 p-2 border border-gray-400 w-full"
                                    onChange={handleChangeHeroImageTwo}
                                    multiple
                                />
                                <div className="w-full h-[200px]">
                                    <img
                                        src={heroImageTwo as string}
                                        alt="hero"
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            </div>

                            <div>
                                <input
                                    type="file"
                                    className="block mb-4 p-2 border border-gray-400 w-full"
                                    onChange={handleChangeHeroImageThree}
                                    multiple
                                />
                                <div className="w-full h-[200px]">
                                    <img
                                        src={heroImageThree as string}
                                        alt="hero"
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* partners */}
                <div>
                    <Title title="partners" />
                    <div>
                        <p className="text-14 text-red-500">
                            Max image size: 40KB, Image dimension: 150px by 100px
                        </p>
                        <div>
                            <input
                                type="file"
                                className="block mb-4 p-2 border border-gray-400"
                                onChange={addPartner}
                                multiple
                            />
                        </div>
                        <div className="grid grid-cols-5 gap-[20px]">
                            {partners?.map((partner, i) => (
                                <div
                                    key={i}
                                    className="relative shadow-md border hover:border-none hover:shadow"
                                >
                                    <img
                                        src={`https://tranos-api.onrender.com/${partner.partner}`}
                                        alt="partner"
                                    />
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth={1.5}
                                        stroke="currentColor"
                                        className="size-5 absolute top-[10px] right-[10px] text-red-500 cursor-pointer"
                                        onClick={(e) => handleDeletePartner(e, partner._id)}
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                                        />
                                    </svg>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* our services */}
                <div>
                    <Title title="our services" />
                    <div>

                        <div className="grid grid-cols-3 gap-[20px]">
                            <div className="shadow border p-[10px] flex items-end">
                                <textarea name="fabrication" value={ourServices.fabrication} onChange={(e) => handleOurServices(e)} className="h-[100px] flex-1 outline-none"></textarea>

                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={1.5}
                                    stroke="currentColor"
                                    className="size-5 text-green-600 cursor-pointer"
                                    onClick={handleChangeOurServices}
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5"
                                    />
                                </svg>
                            </div>

                            <div className="shadow border p-[10px] flex items-end">
                                <textarea name="installation" value={ourServices.installation} onChange={(e) => handleOurServices(e)} className="h-[100px] flex-1 outline-none"></textarea>

                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={1.5}
                                    stroke="currentColor"
                                    className="size-5 text-green-600 cursor-pointer"
                                    onClick={handleChangeOurServices}
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5"
                                    />
                                </svg>
                            </div>

                            <div className="shadow border p-[10px] flex items-end">
                                <textarea name="maintenance" value={ourServices.maintenance} onChange={(e) => handleOurServices(e)} className="h-[100px] flex-1 outline-none"></textarea>

                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={1.5}
                                    stroke="currentColor"
                                    className="size-5 text-green-600 cursor-pointer"
                                    onClick={handleChangeOurServices}
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

                {/* why us */}
                <div>
                    <Title title="why choose us?" />
                    <div>

                        <div className="max-w-[800px] grid gap-[20px]">
                            <div className="shadow border p-[10px] flex items-end">
                                <textarea name="why" value={whyText} onChange={(e) => handleChangeWhyText(e)} className="h-[100px] flex-1 outline-none"></textarea>

                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={1.5}
                                    stroke="currentColor"
                                    className="size-5 text-green-600 cursor-pointer"
                                    onClick={updateWhyText}
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5"
                                    />
                                </svg>
                            </div>

                            <div className="grid gap-[10px]">
                                <p className="text-14 text-red-500">
                                    Max image size: 50mb, Image dimension: 500px by 00px
                                </p>
                                <div>
                                    <input type="file" onChange={handleChangeVideo} />
                                </div>
                                <video src={`https://tranos-api.onrender.com/${whyVideo}`} muted controls></video>
                            </div>


                        </div>
                    </div>
                </div>

                {/* footer */}
                <div>
                    <Title title="footer" />
                    <div className="grid grid-cols-3 gap-[20px]">
                        <div className="flex items-end shadow border p-[10px]">
                            <textarea name="about" className="flex-1 outline-none" value={footer.about} onChange={handleChangeFooter}></textarea>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="size-5 text-green-600 cursor-pointer"
                                onClick={handleUpdateFooter}
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5"
                                />
                            </svg>
                        </div>

                        <div className="flex items-end shadow border p-[10px]">
                            <textarea name="phone" className="flex-1 outline-none" value={footer.phone} onChange={handleChangeFooter}></textarea>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="size-5 text-green-600 cursor-pointer"
                                onClick={handleUpdateFooter}
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5"
                                />
                            </svg>
                        </div>

                        <div className="flex items-end shadow border p-[10px]">
                            <textarea name="email" className="flex-1 outline-none" value={footer.email} onChange={handleChangeFooter}></textarea>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="size-5 text-green-600 cursor-pointer"
                                onClick={handleUpdateFooter}
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
        </div >
    );
};
