import { useState, useEffect } from "react"
import { InewsAndInsights } from "../../types"
import axios from "axios"
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

export const CMSNewsAndInsights = () => {
    const [news, setNews] = useState<InewsAndInsights[] | null>(null)
    const [step, setStep] = useState<number>(1)
    const [value, setValue] = useState('')
    const [blogImage, setBlogImage] = useState<string | ArrayBuffer | null>('')

    const [form, setForm] = useState({
        title: '',
        subtitle: '',
        base64: '',
    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>, _: string) => {
        const { name, value, files } = e.target;

        setForm({
            ...form,
            [name]: value
        });

        if (files && files[0]) {
            const reader = new FileReader();
            reader.readAsDataURL(files[0]);
            reader.onload = () => {
                setBlogImage(reader.result);
            };
        }
    }

    const handlePost = async () => {
        try {
            await axios.post("https://tranos-api.onrender.com/api/v1/blog", {
                title: form.title,
                subtitle: form.subtitle,
                content: value,
                blogImage
            });

            fetchNewsAndInsights()
        } catch (error) {
            console.error("Error posting the blog", error);
        }
        setStep(1)
    }

    const fetchNewsAndInsights = async () => {
        try {
            const response = await axios.get("https://tranos-api.onrender.com/api/v1/blog")
            const blogs = response.data.blogs
            setNews(blogs)
        } catch (error) {
            console.error("Error fetching the news and insights", error);
        }
    }

    useEffect(() => {
        fetchNewsAndInsights()
    }, [])

    const handleDeleteBlogPost = async (e: React.MouseEvent<SVGSVGElement>, id: string) => {
        e.stopPropagation(); // To prevent unwanted parent click event handling, if any.
        await axios.delete(`https://tranos-api.onrender.com/api/v1/blog/${id}`);
        fetchNewsAndInsights();
    };

    return <div className="w-[calc(100vw_-_300px)] relative left-[300px]">
        {step === 1 ? (
            <div className="p-[10px] grid grid-cols-3 gap-[10px] items-start">
                {news?.map(_news => (
                    <div key={_news._id} className="flex justify-between p-[20px] cursor-pointer bg-gray-50 shadow-md hover:bg-gray-100 hover:shadow relative">
                        <div className="">
                            <span className="capitalize">{_news.title}</span>
                            <span>{_news.subtitle.substring(0, 20)}</span>
                        </div>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="w-[18px] h-[18px] fill-tranos-primary absolute right-[20px] hover:fill-red-700" onClick={(e) => handleDeleteBlogPost(e, _news._id)}><path d="M135.2 17.7L128 32 32 32C14.3 32 0 46.3 0 64S14.3 96 32 96l384 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-96 0-7.2-14.3C307.4 6.8 296.3 0 284.2 0L163.8 0c-12.1 0-23.2 6.8-28.6 17.7zM416 128L32 128 53.2 467c1.6 25.3 22.6 45 47.9 45l245.8 0c25.3 0 46.3-19.7 47.9-45L416 128z" /></svg>
                    </div>
                ))}
            </div>
        ) : (
            <div className="p-[40px_10px] max-w-[600px] flex flex-col gap-[10px]">
                <input type="text" name="title" className="p-[10px] shadow border" placeholder="Title" onChange={(e) => handleChange(e, form.title)} />
                <input type="text" name="subtitle" className="p-[10px] shadow border" placeholder="Subtitle" onChange={(e) => handleChange(e, form.subtitle)} />
                <div className="mt-[10px]">
                    <p className="text-14 text-red-500">Max image size: 40KB, Image dimension: 900px by 400px</p>
                    <input type="file" className="p-[10px] shadow w-full border" onChange={(e) => handleChange(e, form.base64)} />
                </div>
                <ReactQuill theme="snow" value={value} onChange={setValue} />
            </div>
        )}

        <div className="p-[10px]">
            {step === 1 ? (
                <div className="p-[10px] bg-tranos-primary text-white w-[min-content] whitespace-nowrap cursor-pointer" onClick={() => setStep(2)}>Add News & Insights</div>
            ) : (
                <div className="flex items-center gap-[10px]">
                    <div className="p-[10px_20px] bg-tranos-primary text-white w-[min-content] whitespace-nowrap cursor-pointer" onClick={() => setStep(1)}>Close</div>
                    <div className="p-[10px_20px] bg-tranos-primary text-white w-[min-content] whitespace-nowrap cursor-pointer flex items-center" onClick={() => handlePost()}>Post</div>
                </div>
            )}
        </div>
    </div>
}
