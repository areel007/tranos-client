// CaseStudies.tsx
import { HeaderGap } from "../../components/HeaderGap";
import { Strip } from "../../components/Strip";
import { MouseEvent, useEffect, useState } from "react";
import CaseStudiesBanner from "../../assets/images/case-study-banner-renew.jpg";
import { CaseStudiesCard } from "../../components/CaseStudiesCard";
import axios from "axios";

interface ICaseStudy {
    _id: string,
    category: string;
    imageUrl: string;
    project: string;
    solutionsProvided: string;
    title: string;
}

const categories = [
    "All Categories",
    "Power & Energy",
    "Oil & Gas",
    "Aviation",
    "Industrial & Manufacturing",
    "Telecommunications"
];

export const CaseStudies = () => {
    const [selectedCategory, setSelectedCategory] = useState("All Categories");
    const [dropdownVisible, setDropdownVisible] = useState(false);
    const [allCaseStudies, setAllCaseStudies] = useState<ICaseStudy[]>([]);
    const [filteredCaseStudies, setFilteredCaseStudies] = useState<ICaseStudy[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    const selectCategory = (e: MouseEvent<HTMLSpanElement>) => {
        const category = (e.target as HTMLSpanElement).textContent;
        setSelectedCategory(category || "All Categories");
        setDropdownVisible(false);
    };

    const fetchCaseStudies = async () => {
        setIsLoading(true);
        try {
            const response = await axios.get("https://tranos-api.onrender.com/api/v1/case-studies");
            setAllCaseStudies(response.data.caseStudies);

        } catch (error) {
            console.error('Error fetching case studies:', error);
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        fetchCaseStudies();
    }, []);

    useEffect(() => {
        if (selectedCategory === "All Categories") {
            setFilteredCaseStudies(allCaseStudies);
        } else {
            setFilteredCaseStudies(allCaseStudies.filter(
                caseStudy => caseStudy.category.toLowerCase() === selectedCategory.toLowerCase()
            ));
        }
    }, [selectedCategory, allCaseStudies]);

    return (
        <main>
            <HeaderGap />
            <Strip img={CaseStudiesBanner} title="Case Studies" />
            <div className="py-[30px] md:py-[40px] lg:py-[60px]">
                <p className="text-center text-[20px] md:text-[24px] ld:text-[28px] text-tranos-primary mb-[10px] md:mb-[20px]">
                    Delivering value-adding engineering solutions
                </p>

                <div className="flex justify-center items-center gap-[20px] text-[14px]">
                    <span className="text-zinc-600">Industry</span>
                    <div className="p-[10px] shadow-md rounded text-tranos-primary flex items-center relative group min-w-[250px] hover:rounded-[4px_4px_0_0]">
                        <div onClick={() => setDropdownVisible(!dropdownVisible)} className="flex items-center justify-between gap-[5px] w-full cursor-pointer">
                            <span>{selectedCategory}</span>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="size-5"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="m19.5 8.25-7.5 7.5-7.5-7.5"
                                />
                            </svg>
                        </div>
                        {dropdownVisible && (
                            <div className="absolute top-full left-0 p-[20px] w-[250px] bg-white shadow-md flex-col gap-[10px] rounded-[0_0_4px_4px] flex cursor-pointer z-[2]">
                                {categories.map((item, i) => (
                                    <span key={i} onClick={selectCategory} className="hover:underline">
                                        {item}
                                    </span>
                                ))}
                            </div>
                        )}
                    </div>
                </div>

                <div className="mt-[30px] md:mt-[60px] max-w-[1100px] w-[90%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[40px] py-[30px] md:py-[40px] lg:py-[60px] border-t border-b">
                    {isLoading ? (
                        <p>Loading...</p>
                    ) : (
                        filteredCaseStudies.map(caseStudy => (
                            <CaseStudiesCard
                                key={caseStudy._id}
                                category={caseStudy.category}
                                imageUrl={caseStudy.imageUrl}
                                project={caseStudy.project}
                                solutionsProvided={caseStudy.solutionsProvided}
                                title={caseStudy.title}
                            />
                        ))
                    )}
                </div>
            </div>
        </main>
    );
};
