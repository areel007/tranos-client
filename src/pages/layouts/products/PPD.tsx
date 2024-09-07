import { useState, useEffect, ChangeEvent } from "react";
import { TAtexPowerPanels, TTitle } from "../../../types";
import axios from "axios";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

type TPPD = {
    step: number;
}

const Title = ({ title }: TTitle) => {
    return (
        <span className="block font-[600] text-zinc-800 capitalize text-[24px] mb-[10px]">
            {title}
        </span>
    );
};

export const PPD = ({ step }: TPPD) => {
    const [tranosEliteRange, setTranosEliteRange] = useState({
        title: "",
        description: "",
        features: "",
    })
    const [value, setValue] = useState('')
    const [valueSivacon, setValueSivacon] = useState('')
    const [selectedFilesTranosElite, setSelectedFilesTranosElite] = useState<File[]>([]);

    const [siemensSivacon, setSiemensSivacon] = useState({
        title: "",
        description: "",
    })
    const [selectedFilesSivacon, setSelectedFilesSivacon] = useState<File[]>([]);

    // tranos elite range
    const fetchTranosEliteRange = async () => {
        const response = await axios.get("https://tranos-api.onrender.com/api/v1/products/tranos-elite-range/664fadaee773079b1e9a408e")

        const { title, description, tranosEliteImages } = response.data.tranosEliteRange;

        setTranosEliteRange({
            ...tranosEliteRange,
            title,
            description,
        })

        setSelectedFilesTranosElite(tranosEliteImages)

    }

    const handleChangeTranosElite = async (e: ChangeEvent<HTMLTextAreaElement>) => {
        setTranosEliteRange({
            ...tranosEliteRange,
            [e.target.name]: e.target.value,
        })
    }

    const onFileChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { files } = e.target;

        if (files && files.length > 0) {
            setSelectedFilesTranosElite(Array.from(files));
        }
    };

    const updateTranosElite = async () => {
        const fd = new FormData();
        fd.append('title', tranosEliteRange.title);
        fd.append('description', tranosEliteRange.description);
        fd.append('features', value);

        selectedFilesTranosElite.forEach((file) => {
            fd.append('imageUrl', file);
        });

        try {
            await axios.patch("https://tranos-api.onrender.com/api/v1/products/tranos-elite-range/664fadaee773079b1e9a408e", fd, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            console.log("Files uploaded successfully");
        } catch (error) {
            console.error("Error uploading the files", error);
        }
    };

    // tranos sivacon v8
    const fetchSiemensSivacon = async () => {
        const response = await axios.get("https://tranos-api.onrender.com/api/v1/products/siemens-sivacon-s8/66b3753f9a6b9610912327fa")

        const { title, description, siemensSivaconImages, features } = response.data.siemensSivacon;

        setSiemensSivacon({
            ...siemensSivacon,
            title,
            description,
        })

        setSelectedFilesSivacon(siemensSivaconImages)
        setValueSivacon(features)

    }

    const handleChangeSivacon = async (e: ChangeEvent<HTMLTextAreaElement>) => {
        setSiemensSivacon({
            ...siemensSivacon,
            [e.target.name]: e.target.value,
        })
    }

    const onFileChangeSivacon = (e: ChangeEvent<HTMLInputElement>) => {
        const { files } = e.target;

        if (files && files.length > 0) {
            setSelectedFilesSivacon(Array.from(files));
        }

    }

    const updateSivacon = async () => {

        const fd = new FormData();
        fd.append('title', siemensSivacon.title);
        fd.append('description', siemensSivacon.description);
        fd.append('features', valueSivacon);

        selectedFilesSivacon.forEach((file) => {
            fd.append('imageUrl', file);
        });

        try {
            await axios.patch("https://tranos-api.onrender.com/api/v1/products/siemens-sivacon-s8/66b3753f9a6b9610912327fa", fd, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            console.log("Files uploaded successfully");
        } catch (error) {
            console.error("Error uploading the files", error);
        }
    }

    // atex power panels
    const [atexPowerPanels, setAtexPowerPanels] = useState<TAtexPowerPanels[] | null>(null)
    const [atexPowerPanelsStep, setAtexPowerPanelsStep] = useState(1)
    const [atexPowerPanelsInputs, setAtexPowerPanelsInputs] = useState({
        title: '',
    })
    const [atexPowerPanelsImageInput, setAtexPowerPanelsImageInput] = useState<File[]>([]);
    const [atexPowerPanelsFeatures, setAtexPowerPanelsFeatures] = useState('')

    const fetchAtexPowerPanels = async () => {
        const response = await axios.get("https://tranos-api.onrender.com/api/v1/products/atex-power-panels")

        setAtexPowerPanels(response.data.atexPowerPanels)

    }

    const handleDeleteAtexPowerPanel = async (_: React.MouseEvent<SVGSVGElement, MouseEvent>, id: string) => {
        await axios.delete(`https://tranos-api.onrender.com/api/v1/products/atex-power-panels/${id}`)

        fetchAtexPowerPanels()
    }

    const atexPowerPanelsOnChange = (e: ChangeEvent<HTMLInputElement>) => {
        setAtexPowerPanelsInputs({
            ...atexPowerPanelsInputs,
            [e.target.name]: e.target.value
        })
    }

    const atexPowerPanelsImageOnChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { files } = e.target;

        if (files) {
            setAtexPowerPanelsImageInput(Array.from(files));
        }
    }

    const handleSubmitAtexPowerPanels = async () => {
        const fd = new FormData()

        fd.append('title', atexPowerPanelsInputs.title)

        atexPowerPanelsImageInput.forEach((file) => {
            fd.append('imageUrl', file);
        });

        fd.append('features', atexPowerPanelsFeatures)

        try {
            await axios.post('https://tranos-api.onrender.com/api/v1/products/atex-power-panels', fd)
            fetchAtexPowerPanels()
        } catch (error) {
            console.log(error);
        }

        setAtexPowerPanelsStep(1)
    }

    // simoprime
    const [simoprime, setSimoprime] = useState({
        title: '',
        description: '',
    })

    const [simoprimeImages, setSimoprimeImages] = useState<File[]>([]);

    const handleChangeSimoprime = (e: ChangeEvent<HTMLTextAreaElement>) => {
        setSimoprime({
            ...simoprime,
            [e.target.name]: e.target.value
        })
    }

    const handleChangeSimoprimeImage = (e: ChangeEvent<HTMLInputElement>) => {
        const { files } = e.target;

        if (files) {
            setSimoprimeImages(Array.from(files));
        }
    }

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

    const updateSimoprime = async () => {

        const fd = new FormData()

        fd.append('title', simoprime.title)

        simoprimeImages.forEach((file) => {
            fd.append('imageUrl', file);
        });

        fd.append('description', simoprime.description)

        try {
            await axios.patch("https://tranos-api.onrender.com/api/v1/products/siemens-simoprime/66576641bae46ad91bb846a4")
        } catch (error) {
            console.log(error);

        }

    }

    // simosec
    const [simosec, setSimosec] = useState({
        title: '',
        description: ''
    })

    const [simosecImages, setSimosecImages] = useState<File[]>([]);

    const handleChangeSimosec = (e: ChangeEvent<HTMLTextAreaElement>) => {
        setSimosec({
            ...simosec,
            [e.target.name]: e.target.value
        })
    }

    const handleChangeSimosecImage = (e: ChangeEvent<HTMLInputElement>) => {
        const { files } = e.target;

        if (files) {
            setSimosecImages(Array.from(files));
        }
    }

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

    const updateSimosec = async () => {

        const fd = new FormData()

        fd.append('title', simosec.title)

        simosecImages.forEach((file) => {
            fd.append('imageUrl', file);
        });

        fd.append('description', simosec.description)

        try {
            await axios.patch("https://tranos-api.onrender.com/api/v1/products/siemens-simosec/665d01db5aeee919d1055b63")
        } catch (error) {
            console.log(error);

        }

    }

    useEffect(() => {
        fetchTranosEliteRange()
        fetchSiemensSivacon()
        fetchAtexPowerPanels()
        fetchSimoprime()
        fetchSimosec()
    }, []);
    return step === 1 && <div>
        <Title title="Power Protection & Distribution" />

        {/* tranos elite range */}
        <div className="mb-[40px]">
            <span className="block mb-[10px] text-tranos-primary">Tranos Elite Range</span>
            <div className="grid grid-cols-1 gap-[10px] mb-[20px]">
                <div>
                    <p className="text-14 text-red-500">Max image size: 40KB, Image dimension: 1100px by 500px and Max image size: 40k, Image dimesion: 480px by 480px</p>
                    <input type="file" multiple onChange={onFileChange} />
                </div>
                <img src={`https://tranos-api.onrender.com/${selectedFilesTranosElite.toString().split(',')[0]}`} alt="tranos" className="max-w-[500px]" />
                <img src={`https://tranos-api.onrender.com/${selectedFilesTranosElite.toString().split(',')[1]}`} alt="tranos" className="max-w-[300px]" />
            </div>

            <div className="grid grid-cols-1 gap-[10px] max-w-[500px]">
                <div className="p-[10px] shadow border flex items-end">
                    <textarea name="title" onChange={handleChangeTranosElite} value={tranosEliteRange.title} className="flex-1"></textarea>
                </div>

                <div className="p-[10px] shadow border flex items-end">
                    <textarea name="description" onChange={handleChangeTranosElite} value={tranosEliteRange.description} className="flex-1"></textarea>
                </div>

                <div className="p-[10px] flex items-end">
                    <ReactQuill theme="snow" value={value} onChange={setValue} className="flex-1" />
                </div>

                <button onClick={updateTranosElite} className="bg-tranos-primary p-[10px] text-white">
                    Submit
                </button>
            </div>
        </div>


        {/* tranos sivacon v8 */}
        <div className="mb-[40px]">
            <span className="block mb-[10px] text-tranos-primary">Tranos Sivacon V8</span>
            <div className="grid grid-cols-1 gap-[10px] mb-[20px]">
                <input type="file" multiple onChange={onFileChangeSivacon} />
                <img src={`https://tranos-api.onrender.com/${selectedFilesSivacon.toString().split(',')[0]}`} alt="tranos" className="max-w-[500px]" />
                <img src={`https://tranos-api.onrender.com/${selectedFilesSivacon.toString().split(',')[1]}`} alt="tranos" className="max-w-[300px]" />
            </div>

            <div className="grid grid-cols-1 gap-[10px] max-w-[500px]">
                <div className="p-[10px] shadow border flex items-end">
                    <textarea name="title" onChange={handleChangeSivacon} value={siemensSivacon.title} className="flex-1"></textarea>
                </div>

                <div className="p-[10px] shadow border flex items-end">
                    <textarea name="description" onChange={handleChangeSivacon} value={siemensSivacon.description} className="flex-1"></textarea>
                </div>

                <div className="p-[10px] flex items-end">
                    <ReactQuill theme="snow" value={valueSivacon} onChange={setValueSivacon} className="flex-1" />
                </div>

                <button onClick={updateSivacon} className="bg-tranos-primary p-[10px] text-white">
                    Submit
                </button>
            </div>
        </div>

        {/* atex power panels */}
        <div className="mb-[40px]">
            <span className="block mb-[10px] text-tranos-primary">Atex Power Panels</span>

            {
                atexPowerPanelsStep === 1 && <div className="mb-[10px]">
                    <button className="p-[10px] text-white bg-tranos-primary" onClick={() => setAtexPowerPanelsStep(2)}>Add ATEX Power Panels</button>
                </div>
            }

            {atexPowerPanelsStep === 1 ? <div className="grid grid-cols-3 gap-[20px]">
                {
                    atexPowerPanels?.map((item, i) => <div key={i} className="flex flex-col items-center shadow-md p-[10px] border hover:shadow relative">
                        <img src={`https://tranos-api.onrender.com/${item.atexPowerPanelsImage}`} alt="tranos" className="w-[100px]" />

                        <span className="inline-block text-center">{item.title}</span>

                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 absolute top-[10px] right-[20px] text-red-600 cursor-pointer" onClick={(e) => handleDeleteAtexPowerPanel(e, item._id)}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                        </svg>

                    </div>)
                }
            </div> : <div className="max-w-[500px]">
                <div className="mb-[20px] flex flex-col gap-[10px]">
                    <div>
                        <p className="text-14 text-red-500">Max image size: 40KB, Image dimension: 400px by 340px</p>
                        <input type="file" onChange={atexPowerPanelsImageOnChange} className="shadow border outline-none w-full p-[10px]" />
                    </div>

                    <input type="text" name="title" onChange={atexPowerPanelsOnChange} className="shadow border outline-none w-full p-[10px]" />

                    <ReactQuill value={atexPowerPanelsFeatures} onChange={setAtexPowerPanelsFeatures} />
                </div>
                <div className="flex gap-[10px]">
                    <button className="p-[10px] text-white bg-tranos-primary" onClick={() => setAtexPowerPanelsStep(1)}>Close</button>

                    <button className="p-[10px] text-white bg-tranos-primary" onClick={handleSubmitAtexPowerPanels}>Submit</button>
                </div>
            </div>}
        </div>

        {/* simoprime */}
        <div className="mb-[40px]">
            <span className="block mb-[10px] text-tranos-primary">Simoprime</span>
            <div className="grid grid-cols-1 gap-[10px] mb-[20px]">
                <div>
                    <p className="text-14 text-red-500">Max image size: 40KB, Image dimension: 1100px by 500px and Max image size: 40k, Image dimesion: 350px by 275px</p>
                    <input type="file" multiple onChange={handleChangeSimoprimeImage} />
                </div>
                <img src={`https://tranos-api.onrender.com/${simoprimeImages.toString().split(',')[0]}`} alt="tranos" className="max-w-[500px]" />
                <img src={`https://tranos-api.onrender.com/${simoprimeImages.toString().split(',')[1]}`} alt="tranos" className="max-w-[300px]" />
            </div>

            <div className="grid grid-cols-1 gap-[10px] max-w-[500px]">
                <div className="p-[10px] shadow border flex items-end">
                    <textarea name="title" onChange={handleChangeSimoprime} value={simoprime.title} className="flex-1"></textarea>
                </div>

                <div className="p-[10px] shadow border flex items-end">
                    <textarea name="description" onChange={handleChangeSimoprime} value={simoprime.description} className="flex-1"></textarea>
                </div>

                <button onClick={updateSimoprime} className="bg-tranos-primary p-[10px] text-white">
                    Submit
                </button>
            </div>
        </div>

        {/* simosec */}
        <div className="mb-[40px]">
            <span className="block mb-[10px] text-tranos-primary">Simosec</span>
            <div className="grid grid-cols-1 gap-[10px] mb-[20px]">
                <div>
                    <p className="text-14 text-red-500">Max image size: 40KB, Image dimension: 1100px by 500px and Max image size: 40k, Image dimesion: 400px by 475px</p>
                    <input type="file" multiple onChange={handleChangeSimosecImage} />
                </div>
                <img src={`https://tranos-api.onrender.com/${simosecImages.toString().split(',')[0]}`} alt="tranos" className="max-w-[500px]" />
                <img src={`https://tranos-api.onrender.com/${simosecImages.toString().split(',')[1]}`} alt="tranos" className="max-w-[300px]" />
            </div>

            <div className="grid grid-cols-1 gap-[10px] max-w-[500px]">
                <div className="p-[10px] shadow border flex items-end">
                    <textarea name="title" onChange={handleChangeSimosec} value={simosec.title} className="flex-1"></textarea>
                </div>

                <div className="p-[10px] shadow border flex items-end">
                    <textarea name="description" onChange={handleChangeSimosec} value={simosec.description} className="flex-1"></textarea>
                </div>

                <button onClick={updateSimosec} className="bg-tranos-primary p-[10px] text-white">
                    Submit
                </button>
            </div>
        </div>
    </div>
}