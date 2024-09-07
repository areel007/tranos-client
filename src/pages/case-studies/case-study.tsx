import { HeaderGap } from "../../components/HeaderGap";
import { Strip } from "../../components/Strip";
import CaseStudiesBanner from "../../assets/images/case-study-banner-renew.jpg";
import { useLocation } from "react-router-dom";
import { IWServeTitle } from "../../components/IWServeTitle";
import { useEffect, useState } from "react";
import { CaseStudiesTabStrip } from "../../components/CaseStudiesTabStrip";

export const CaseStudy = () => {
    const location = useLocation()

    const [count, setCount] = useState(0)

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCount((prev) => (prev < 1 ? prev + 1 : 0));
        }, 10000);

        // Cleanup the interval on component unmount
        return () => clearInterval(intervalId);
    }, []);


    const { title, imageUrl, category, solutionsProvided, project } = location.state || {}


    return <main>
        <HeaderGap />
        <Strip img={CaseStudiesBanner} title="Case Studies" />
        <CaseStudiesTabStrip />

        <div className="py-[30px] md:py-[40px] lg:py-[60px] max-w-[1100px] w-[90%] mx-auto">
            <IWServeTitle text={title} />
            <p className="text-[14px] text-zinc-700">Category: <b className="capitalize text-blue-400">{category}</b></p>

            <div className="my-[20px] md:mt-[40px] mb-[20px]">
                {imageUrl.split(",").length > 2 ? <img src={`https://tranos-api.onrender.com/${imageUrl.split(",").slice(1)[count]}`} alt="tranos case studies" className="w-full" /> : <img src={`https://tranos-api.onrender.com/${imageUrl.split(",").slice(1)[0]}`} alt="tranos case studies" className="w-full" />}

            </div>



            <p className="text-[16px] md:text-[18px] mb-[20px] text-zinc-800"><b>Project</b>: {project}</p>

            <div dangerouslySetInnerHTML={{ __html: solutionsProvided }} className="text-[14px] md:text-[16px] text-zinc-800" />
        </div>
    </main>
}