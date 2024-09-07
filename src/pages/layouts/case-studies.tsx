import axios from "axios";
import { useEffect, useState } from "react";
import { ICaseStudy } from "../../types";
import { CMSCaseStudyCard } from "../../components/cms/CMSCaseStudyCard";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

export const CMSCaseStudies = () => {
    const [step, setStep] = useState(1);
    const [caseStudies, setCaseStudies] = useState<ICaseStudy[]>([]);
    const [value, setValue] = useState('');
    const [selectedBlogImage, setSelectedBlogImage] = useState<FileList | null>(null);

    const [form, setForm] = useState({
        title: '',
        category: '',
        project: '',
        base64: '',
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>, _: string) => {
        const { name, value } = e.target;

        setForm({
            ...form,
            [name]: value
        });
    };

    const fetchCaseStudies = async () => {
        const response = await axios.get("https://tranos-api.onrender.com/api/v1/case-studies");
        setCaseStudies(response.data.caseStudies);
    };

    useEffect(() => {
        fetchCaseStudies();
    }, []);

    const onFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSelectedBlogImage(e.target.files);
    };

    const handleSubmit = async (_: React.MouseEvent<HTMLButtonElement>) => {
        const fd = new FormData();
        fd.append('title', form.title);
        fd.append('category', form.category);
        fd.append('project', form.project);
        fd.append('solutionsProvided', value);
        if (selectedBlogImage && selectedBlogImage[0]) {
            fd.append('imageUrl', selectedBlogImage[0]);
        }
        try {
            await axios.post("https://tranos-api.onrender.com/api/v1/case-studies", fd, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
        } catch (error) {
            console.error("Error posting the blog", error);
        }
        setStep(1);
    };

    return (
        <div className="w-[calc(100vw_-_300px)] relative left-[300px] z-[0]">
            {step === 1 ? (
                <div className="p-[20px] grid grid-cols-3 gap-[10px]">
                    {caseStudies.map(caseStudy => (
                        <CMSCaseStudyCard
                            key={caseStudy._id}
                            _id={caseStudy._id}
                            category={caseStudy.category}
                            imageUrl={caseStudy.imageUrl}
                            project={caseStudy.project}
                            solutionsProvided={caseStudy.solutionsProvided}
                            title={caseStudy.title}
                        />
                    ))}
                </div>
            ) : (
                <div className="p-[40px_10px] max-w-[600px] flex flex-col gap-[10px]">
                    <input
                        type="text"
                        name="title"
                        className="p-[10px] shadow border"
                        placeholder="Title"
                        onChange={(e) => handleChange(e, form.title)}
                    />
                    <select
                        name="category"
                        className="p-[10px] shadow border"
                        value={form.category}
                        onChange={(e) => handleChange(e, form.category)}
                    >
                        <option value="">select category</option>
                        <option value="power & energy">power & energy</option>
                        <option value="oil & gas">oil & gas</option>
                        <option value="aviation">aviation</option>
                        <option value="industrial & manufacturing">industrial & manufacturing</option>
                        <option value="telecommunications">telecommunications</option>
                    </select>
                    <div className="mt-[10px]">
                        <p className="text-14 text-red-500">Max image size: 40KB, Image dimension: 900px by 400px</p>
                        <input type="file" multiple className="p-[10px] shadow w-full border" onChange={onFileChange} />
                    </div>
                    <input
                        type="text"
                        name="project"
                        className="p-[10px] shadow border"
                        placeholder="Project"
                        onChange={(e) => handleChange(e, form.project)}
                    />
                    <ReactQuill theme="snow" value={value} onChange={setValue} />
                </div>
            )}
            <div className="p-[20px]">
                {step === 1 ? (
                    <button className="p-[10px_20px] bg-tranos-primary text-white capitalize" onClick={() => setStep(2)}>add case studies</button>
                ) : (
                    <div className="flex gap-[10px]">
                        <button className="p-[10px_20px] bg-tranos-primary text-white capitalize" onClick={() => setStep(1)}>Close</button>
                        <button className="p-[10px_20px] bg-tranos-primary text-white capitalize" onClick={handleSubmit}>Submit</button>
                    </div>
                )}
            </div>
        </div>
    );
};
