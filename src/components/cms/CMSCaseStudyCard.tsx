import axios from "axios";

interface ICaseStudyCardProps {
    _id: string;
    category: string;
    imageUrl: string;
    project: string;
    solutionsProvided: string;
    title: string;
}

export const CMSCaseStudyCard = ({ imageUrl, title, category, _id }: ICaseStudyCardProps) => {
    const handleDeleteCaseStudy = async () => {
        await axios.delete(`https://tranos-api.onrender.com/api/v1/case-studies/${_id}`)
    }

    return <div className="w-full relative">
        <div className="w-full h-[200px] relative before:absolute before:inset-0 before:bg-tranos-primary before:opacity-[.5] mb-[10px]">
            <img src={`https://tranos-api.onrender.com/${imageUrl.split(',')[0]}`} alt="tranos case studies" className="w-full h-full object-cover" />

            <div className="absolute top-[10px] right-[10px] bg-white rounded-full w-[30px] h-[30px] flex justify-center items-center cursor-pointer hover:w-[35px] hover:h-[35px] transition ease-out" onClick={handleDeleteCaseStudy}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                </svg>
            </div>

        </div>

        <p className="text-left text-[14px] text-zinc-700">
            <span>{title}</span> |
            <span className="text-blue-400 font-[600] capitalize"> {category}</span>
        </p>
    </div>
}