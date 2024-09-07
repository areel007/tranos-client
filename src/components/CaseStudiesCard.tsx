import { Link } from "react-router-dom";

interface ICaseStudyCardProps {
    category: string;
    imageUrl: string;
    project: string;
    solutionsProvided: string;
    title: string;
}

export const CaseStudiesCard = ({ imageUrl, title, category, solutionsProvided, project }: ICaseStudyCardProps) => {
    return <Link to={`/case-studies/${title}`} className="w-full relative" state={{ category, imageUrl, title, solutionsProvided, project }}>
        <div className="w-full h-[200px] relative before:absolute before:inset-0 before:bg-tranos-primary before:opacity-[.5] mb-[10px]">
            <img src={`https://tranos-api.onrender.com/${imageUrl.split(',')[0]}`} alt="tranos case studies" className="w-full h-full object-cover" />
        </div>

        <p className="text-left text-[14px] text-zinc-700">
            <span>{title}</span> |
            <span className="text-blue-400 font-[600] capitalize"> {category}</span>
        </p>
    </Link>
}