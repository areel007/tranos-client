import { useEffect, useState } from "react"
import { HeaderGap } from "../../components/HeaderGap"
import { Link } from "react-router-dom";
import axios from "axios"

interface IBlog {
    _id: string;
    title: string;
    subtitle: string;
    content: string;
    blogImage: string;
    cloudinaryId: string;
    createdAt: Date;
}

export const NewsAndInsights = () => {
    const [newsAndInsights, setNewsAndInsights] = useState<IBlog[]>([])

    const fetchNewsAndInsights = async () => {
        try {
            const response = await axios.get('https://tranos-api.onrender.com/api/v1/blog')
            setNewsAndInsights(response.data.blogs)


        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        fetchNewsAndInsights()
    }, [])

    return <main>
        <HeaderGap />

        <div className="max-w-[1100px] w-[90%] mx-auto py-[30px] md:py-[40px] lg:py-[60px]">
            <div className="flex items-center gap-[10px] p-[10px] border w-[300px] rounded border-zinc-400">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                </svg>

                <input type="text" className="outline-none w-full text-zinc-800" />
            </div>

            <div className="py-[20px] md:py-[30px] lg:py-[40px]">

                {newsAndInsights ? <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[20px] md:gap-[30px] lg:gap-[40px]">
                    {newsAndInsights.map((item, i) => <Link to={`/news-and-insights/${item._id}`} key={i}>
                        <div className="w-full h-[200px] mb-[10px]">
                            <img src={item.blogImage} alt="tranos news and insights" className="block w-full h-full" />
                        </div>

                        <p className="capitalize font-[600]">{item.title}</p>
                    </Link>)}
                </div> : <p>Check back for news and insights</p>}
            </div>
        </div>
    </main>
}