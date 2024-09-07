import axios from "axios"
import { HeaderGap } from "../../components/HeaderGap"
import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"

interface IBlog {
    content: string;
    createdAt: Date;
    blogImage: string;
    subtitle: string;
    title: string;
    _id: string;
}

export const SingleNewsAndInsight = () => {
    const { id } = useParams()

    const [blog, setBlog] = useState<null | IBlog>(null)

    const fetchSingleNewsAndInsight = async () => {
        const response = await axios.get(`https://tranos-api.onrender.com/api/v1/blog/${id}`)

        setBlog(response.data.blog)

    }

    useEffect(() => {
        fetchSingleNewsAndInsight()
    }, [id])
    return <main>
        <HeaderGap />
        <div>
            <div className="py-[30px] md:py-[40px] lg:py-[60px] max-w-[900px] w-[90%] mx-auto">
                <span className="text-[30px] font-[600] capitalize block mb-[10px]">{blog?.title}</span>
                <img src={blog?.blogImage} alt="tranos news and insights" className="w-full h-[400px] object-cover block mb-[20px]" />
                {/* <p className="text-[14px] text-zinc-800 mb-[20px]">{blog?.subtitle}</p> */}

                <div dangerouslySetInnerHTML={{ __html: blog?.content as string }} className="text-zinc-800 font-[300] leading-[2]" />
            </div>
        </div>
    </main>
}