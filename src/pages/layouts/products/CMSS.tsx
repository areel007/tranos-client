import { ChangeEvent, useEffect, useState } from "react";
import { TTitle } from "../../../types";
import axios from "axios";
import ReactQuill from "react-quill";

type TCMSS = {
    step: number;
}

const Title = ({ title }: TTitle) => {
    return (
        <span className="block font-[600] text-zinc-800 capitalize text-[24px] mb-[10px]">
            {title}
        </span>
    );
};

export const CMSS = ({ step }: TCMSS) => {


    // cable trays
    const [cableTrays, setCableTrays] = useState({
        title: '',
        description: ''
    });

    const [cableTraysImage, setCableTraysImage] = useState<File | null>(null);
    const [cableTraysImageUrl, setCableTraysImageUrl] = useState<string>("");

    const fetchCableTrays = async () => {
        try {
            const response = await axios.get("https://tranos-api.onrender.com/api/v1/products/cable-management/cable-trays/6668c5b810f10f5e0f2c717d");

            const { title, description, cableTraysImage } = response.data.cableTrays;

            setCableTrays({
                title,
                description
            });

            setCableTraysImageUrl(`https://tranos-api.onrender.com/${cableTraysImage}`);
        } catch (error) {
            console.error("Error fetching cable trays data:", error);
        }
    };

    const cableTraysImageChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { files } = e.target;

        if (files && files[0]) {
            setCableTraysImage(files[0]);
            setCableTraysImageUrl(URL.createObjectURL(files[0]));
        }
    };

    const cableTraysTextChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        setCableTrays({
            ...cableTrays,
            [e.target.name]: e.target.value
        });
    };

    const updateCableTrays = async () => {
        const fd = new FormData();

        fd.append('title', cableTrays.title);

        if (cableTraysImage) {
            fd.append('imageUrl', cableTraysImage);
        }

        fd.append('description', cableTrays.description);

        try {
            await axios.patch("https://tranos-api.onrender.com/api/v1/products/cable-management/cable-trays/6668c5b810f10f5e0f2c717d", fd, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            console.log("Update successful!");
        } catch (error) {
            console.error("Error updating cable trays:", error);
        }
    };

    // cable ladders
    const [cableLadders, setCableLadders] = useState({
        title: '',
        description: ''
    });

    const [cableLaddersImage, setCableLaddersImage] = useState<File | null>(null);
    const [cableLaddersImageUrl, setCableLaddersImageUrl] = useState<string>("");

    const fetchCableLadders = async () => {
        try {
            const response = await axios.get("https://tranos-api.onrender.com/api/v1/products/cable-management/cable-ladders/666b33984dd5412681fc47b8");

            const { title, description, cableLaddersImage } = response.data.cableLadders;

            setCableLadders({
                title,
                description
            });


            setCableLaddersImageUrl(`https://tranos-api.onrender.com/${cableLaddersImage}`);
        } catch (error) {
            console.error("Error fetching cable trays data:", error);
        }
    };

    const cableLaddersImageChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { files } = e.target;

        if (files && files[0]) {
            setCableLaddersImage(files[0]);
            setCableLaddersImageUrl(URL.createObjectURL(files[0]));
        }
    };

    const cableLaddersTextChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        setCableLadders({
            ...cableLadders,
            [e.target.name]: e.target.value
        });
    };

    const updateCableLadders = async () => {
        const fd = new FormData();

        fd.append('title', cableLadders.title);

        if (cableLaddersImage) {
            fd.append('imageUrl', cableLaddersImage);
        }

        fd.append('description', cableLadders.description);

        try {
            await axios.patch("https://tranos-api.onrender.com/api/v1/products/cable-management/cable-ladders/666b33984dd5412681fc47b8", fd, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            console.log("Update successful!");
        } catch (error) {
            console.error("Error updating cable trays:", error);
        }
    };

    // cable fittings
    const [cableFittings, setCableFittings] = useState({
        title: '',
        description: ''
    });

    const [cableFittingsImage, setCableFittingsImage] = useState<File | null>(null);
    const [cableFittingsImageUrl, setCableFittingsImageUrl] = useState<string>("");

    const fetchCableFittings = async () => {
        try {
            const response = await axios.get("https://tranos-api.onrender.com/api/v1/products/cable-management/cable-fittings/666b2d4e2c390eb15f4df6e1");

            const { title, description, cableFittingsImage } = response.data.cableFittings;

            setCableFittings({
                title,
                description
            });


            setCableFittingsImageUrl(`https://tranos-api.onrender.com/${cableFittingsImage}`);
        } catch (error) {
            console.error("Error fetching cable trays data:", error);
        }
    };

    const cableFittingsImageChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { files } = e.target;

        if (files && files[0]) {
            setCableFittingsImage(files[0]);
            setCableFittingsImageUrl(URL.createObjectURL(files[0]));
        }
    };

    const cableFittingsTextChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        setCableFittings({
            ...cableFittings,
            [e.target.name]: e.target.value
        });
    };

    const updateCableFittings = async () => {
        const fd = new FormData();

        fd.append('title', cableFittings.title);

        if (cableFittingsImage) {
            fd.append('imageUrl', cableFittingsImage);
        }

        fd.append('description', cableFittings.description);

        try {
            await axios.patch("https://tranos-api.onrender.com/api/v1/products/cable-management/cable-fittings/666b2d4e2c390eb15f4df6e1", fd, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            console.log("Update successful!");
        } catch (error) {
            console.error("Error updating cable trays:", error);
        }
    };

    // accessories & fastener
    const [cableAccessories, setCableAccessories] = useState({
        title: '',
        description: ''
    });

    const [cableAccessoriesImage, setCableAccessoriesImage] = useState<File | null>(null);
    const [cableAccessoriesImageUrl, setCableAccessoriesImageUrl] = useState<string>("");

    const fetchCableAccessories = async () => {
        try {
            const response = await axios.get("https://tranos-api.onrender.com/api/v1/products/cable-management/accessories-and-fasteners/666b34ad4dd5412681fc47bf");

            const { title, description, accessoriesAndFastenersImage } = response.data.accessoriesAndFasteners;

            setCableAccessories({
                title,
                description
            });


            setCableAccessoriesImageUrl(`https://tranos-api.onrender.com/${accessoriesAndFastenersImage}`);
        } catch (error) {
            console.error("Error fetching cable trays data:", error);
        }
    };

    const cableAccessoriesImageChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { files } = e.target;

        if (files && files[0]) {
            setCableAccessoriesImage(files[0]);
            setCableAccessoriesImageUrl(URL.createObjectURL(files[0]));
        }
    };

    const cableAccessoriesTextChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        setCableAccessories({
            ...cableAccessories,
            [e.target.name]: e.target.value
        });
    };

    const updateCableAccessories = async () => {
        const fd = new FormData();

        fd.append('title', cableAccessories.title);

        if (cableAccessoriesImage) {
            fd.append('imageUrl', cableAccessoriesImage);
        }

        fd.append('description', cableAccessories.description);

        try {
            await axios.patch("https://tranos-api.onrender.com/api/v1/products/cable-management/accessories-and-fasteners/666b34ad4dd5412681fc47bf", fd, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            console.log("Update successful!");
        } catch (error) {
            console.error("Error updating cable trays:", error);
        }
    };


    // tranos eris
    const [eris, setEris] = useState('')
    const [erisImages, setErisImages] = useState<FileList | ArrayBuffer | string>('');

    const handleChangeErisImages = (e: ChangeEvent<HTMLInputElement>) => {
        const { files } = e.target;

        if (files) {
            setErisImages(files);
        }
    }

    const fetchEris = async () => {
        const response = await axios.get("https://tranos-api.onrender.com/api/v1/products/cable-management/tranos-eris/666b64b0b3575965230a253f")

        const { description, tranosErisImages } = response.data.tranosEris

        setEris(description)
        setErisImages(tranosErisImages)

    }

    const updateEris = async () => {


        const fd = new FormData()

        fd.append('description', eris)
        fd.append('imageUrl', erisImages as string);

        try {
            await axios.patch("https://tranos-api.onrender.com/api/v1/products/cable-management/tranos-eris/666b64b0b3575965230a253f", fd)
        } catch (error) {
            console.log(error);

        }

    }

    // table clamps & cleats
    const [ellisTitle, setEllisTitle] = useState('')
    const [ellisDescription, setEllisDescription] = useState('')
    const [ellisImages, setEllisImages] = useState<FileList | ArrayBuffer | string>('');
    const [ellisImageUrls, setEllisImageUrls] = useState<string[]>([]);

    const handleChangeEllisImages = (e: ChangeEvent<HTMLInputElement>) => {
        const { files } = e.target;

        if (files) {
            setEllisImages(files);
        }
    }

    const handleChangeEllisTitle = (e: ChangeEvent<HTMLInputElement>) => {
        setEllisTitle(e.target.value)

    }

    const fetchEllis = async () => {
        const response = await axios.get("https://tranos-api.onrender.com/api/v1/products/cable-management/tranos-ellis/6671b4f4a9aa41fb05c48dce")

        const { description, title, tranosEllisImages } = response.data.tranosEllis

        setEllisTitle(title)
        setEllisDescription(description)
        setEllisImages(tranosEllisImages)
        setEllisImageUrls(tranosEllisImages.split(','))


    }

    const updateEllis = async () => {

        const fd = new FormData()

        fd.append('description', ellisDescription)
        fd.append('title', ellisTitle)
        fd.append('imageUrl', ellisImages as string);

        try {
            await axios.patch("https://tranos-api.onrender.com/api/v1/products/cable-management/tranos-ellis/6671b4f4a9aa41fb05c48dce", fd)
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        fetchCableTrays();
        fetchCableLadders()
        fetchCableFittings()
        fetchCableAccessories()
        fetchEris()
        fetchEllis()
    }, []);

    return step === 2 && (
        <div>
            <Title title="Cable Management & Support System" />

            <div className="grid-cols-1 gap-[20px] mb-[60px]">
                <span className="block mb-[10px] text-zinc-700">Tranos TRAC</span>

                {/* cable trays */}
                <div className="mb-[40px]">
                    <span className="block mb-[10px]">Cable Trays:</span>
                    <div className="flex flex-col gap-[10px] max-w-[500px]">
                        <p className="text-14 text-red-500">Max image size: 40KB, Image dimension: 530px by 300px</p>
                        <input type="file" onChange={cableTraysImageChange} className="" />
                        {cableTraysImageUrl && (
                            <img src={cableTraysImageUrl} alt="tranos" />
                        )}
                        <textarea name="title" onChange={cableTraysTextChange} value={cableTrays.title} className="shadow border p-[10px]"></textarea>
                        <textarea name="description" onChange={cableTraysTextChange} value={cableTrays.description} className="shadow border p-[10px] h-[400px]"></textarea>

                        <button className="p-[10px] bg-tranos-primary text-white" onClick={updateCableTrays}>Submit</button>
                    </div>
                </div>

                {/* cable ladders */}
                <div className="mb-[40px]">
                    <span className="block mb-[10px]">Cable Ladders:</span>
                    <div className="flex flex-col gap-[10px] max-w-[500px]">
                        <p className="text-14 text-red-500">Max image size: 40KB, Image dimension: 530px by 300px</p>
                        <input type="file" onChange={cableLaddersImageChange} className="" />
                        {cableTraysImageUrl && (
                            <img src={cableLaddersImageUrl} alt="tranos" />
                        )}
                        <textarea name="title" onChange={cableLaddersTextChange} value={cableLadders.title} className="shadow border p-[10px]"></textarea>
                        <textarea name="description" onChange={cableLaddersTextChange} value={cableLadders.description} className="shadow border p-[10px] h-[400px]"></textarea>

                        <button className="p-[10px] bg-tranos-primary text-white" onClick={updateCableLadders}>Submit</button>
                    </div>
                </div>

                {/* cable fittings */}
                <div className="mb-[40px]">
                    <span className="block mb-[10px]">Cable Fittings:</span>
                    <div className="flex flex-col gap-[10px] max-w-[500px]">
                        <p className="text-14 text-red-500">Max image size: 40KB, Image dimension: 530px by 300px</p>
                        <input type="file" onChange={cableFittingsImageChange} className="" />
                        {cableTraysImageUrl && (
                            <img src={cableFittingsImageUrl} alt="tranos" />
                        )}
                        <textarea name="title" onChange={cableFittingsTextChange} value={cableFittings.title} className="shadow border p-[10px]"></textarea>
                        <textarea name="description" onChange={cableFittingsTextChange} value={cableFittings.description} className="shadow border p-[10px] h-[400px]"></textarea>

                        <button className="p-[10px] bg-tranos-primary text-white" onClick={updateCableFittings}>Submit</button>
                    </div>
                </div>

                {/* accessories & fasteners */}
                <div>
                    <span className="block mb-[10px]">Accessories & Fasteners:</span>
                    <div className="flex flex-col gap-[10px] max-w-[500px]">
                        <p className="text-14 text-red-500">Max image size: 40KB, Image dimension: 530px by 300px</p>
                        <input type="file" onChange={cableAccessoriesImageChange} className="" />
                        {cableTraysImageUrl && (
                            <img src={cableAccessoriesImageUrl} alt="tranos" />
                        )}
                        <textarea name="title" onChange={cableAccessoriesTextChange} value={cableAccessories.title} className="shadow border p-[10px]"></textarea>
                        <textarea name="description" onChange={cableAccessoriesTextChange} value={cableAccessories.description} className="shadow border p-[10px] h-[400px]"></textarea>

                        <button className="p-[10px] bg-tranos-primary text-white" onClick={updateCableAccessories}>Submit</button>
                    </div>
                </div>
            </div>

            <div className="grid-cols-1 gap-[20px] mb-[60px]">
                <span className="block mb-[10px] text-zinc-700">Tranos ERIS</span>

                <div className="flex flex-col gap-[10px] max-w-[500px]">
                    <p className="text-14 text-red-500">Max image size: 40KB, Image dimension: 530px by 300px and Max image size: 40KB, Image dimension: 1100px by 300px</p>
                    <input type="file" onChange={handleChangeErisImages} className="" />
                    <img src={`https://tranos-api.onrender.com/${erisImages.toString().split(',')[0]}`} alt="tranos" />
                    <img src={`https://tranos-api.onrender.com/${erisImages.toString().split(',')[1]}`} alt="tranos" />

                    <div className="mb-[50px]">
                        <ReactQuill value={eris} onChange={setEris} className="h-[400px]" />
                    </div>

                    <button className="p-[10px] bg-tranos-primary text-white" onClick={updateEris}>Submit</button>
                </div>
            </div>

            <div className="grid-cols-1 gap-[20px] mb-[60px]">
                <span className="block mb-[10px] text-zinc-700">Table Clamps & Cleats</span>

                <div className="flex flex-col gap-[10px]">
                    <p className="text-14 text-red-500">Max image size: 40KB, Image dimension: 260px by 260px</p>
                    <input type="file" onChange={handleChangeEllisImages} className="p-[10px] shadow border max-w-[500px]" />

                    <div className="grid grid-cols-3 gap-[10px]">
                        {
                            ellisImageUrls.map((item, i) => <img key={i} src={`https://tranos-api.onrender.com/${item}`} alt="tranos" className="w-full h-full object-cover" />)
                        }
                    </div>


                    <div className="max-w-[500px] flex flex-col gap-[10px]">
                        <input type="text" value={ellisTitle} onChange={handleChangeEllisTitle} className="p-[10px] shadow border" />

                        <div className="mb-[50px]">
                            <ReactQuill value={ellisDescription} onChange={setEllisDescription} className="h-[400px]" />
                        </div>

                        <button className="p-[10px] bg-tranos-primary text-white" onClick={updateEllis}>Submit</button>
                    </div>
                </div>
            </div>
        </div>
    );
};
