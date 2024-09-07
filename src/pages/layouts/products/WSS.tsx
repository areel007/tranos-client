type TWSS = {
    step: number;
}

import { ChangeEvent, useState, useEffect } from "react";
import { TTitle } from "../../../types";
import axios from "axios";

const Title = ({ title }: TTitle) => {
    return (
        <span className="block font-[600] text-zinc-800 capitalize text-[24px] mb-[10px]">
            {title}
        </span>
    );
};

export const WSS = ({ step }: TWSS) => {
    const [standard, setStandard] = useState<{
        title: string;
        description: string;
    }>({
        title: '',
        description: '',
    })

    const [standardImage, setStandardImage] = useState<File | null>(null)

    const handleTextChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setStandard({
            ...standard,
            [e.target.name]: e.target.value
        })
    }

    const handleChangeStandardFile = (e: ChangeEvent<HTMLInputElement>) => {
        const files = e.target.files;
        if (files && files.length > 0) {
            setStandardImage(files[0]);
        }
    }

    const fetchStandard = async () => {
        const response = await axios.get("https://tranos-api.onrender.com/api/v1/products/warehouse/standard-pallet-racks/6679ec968ea1ba3916c9fdec")

        const { title, description, standardPalletRacksImage } = response.data.standardPalletRacks;

        setStandard({
            title,
            description,
        })

        setStandardImage(standardPalletRacksImage);
    }

    const updateStandard = async () => {
        const fd = new FormData();
        fd.append('title', standard.title);
        fd.append('description', standard.description);
        if (standardImage instanceof File) {
            fd.append('imageUrl', standardImage);
        }
        await axios.patch("https://tranos-api.onrender.com/api/v1/products/warehouse/standard-pallet-racks/6679ec968ea1ba3916c9fdec", fd);
    }

    useEffect(() => {
        fetchStandard();
    }, []);

    return step === 4 && (
        <div>
            <Title title="Warehouse Support System" />

            <div className="mb-[40px]">
                <span className="block mb-[10px] text-tranos-primary">Standard Pallet Racks</span>

                <div className="max-w-[500px]">
                    <div className="mb-[20px] flex flex-col gap-[10px]">
                        <input type="file" className="w-full p-[10px] shadow border" onChange={handleChangeStandardFile} />
                        {standardImage && typeof standardImage === 'string' && (
                            <img src={`https://tranos-api.onrender.com/${standardImage}`} alt="tranos" />
                        )}
                    </div>

                    <div className="flex flex-col gap-[10px] mb-[20px]">
                        <input
                            type="text"
                            name="title"
                            className="w-full p-[10px] shadow border"
                            value={standard.title}
                            onChange={handleTextChange}
                        />
                        <textarea
                            name="description"
                            className="w-full p-[10px] shadow border h-[200px]"
                            value={standard.description}
                            onChange={handleTextChange}
                        ></textarea>
                    </div>

                    <button className="p-[10px_20px] bg-tranos-primary text-white" onClick={updateStandard}>Submit</button>
                </div>
            </div>
        </div>
    );
};
