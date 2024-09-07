// CaseStudies.tsx
import { HeaderGap } from "../../components/HeaderGap";
import { Strip } from "../../components/Strip";
import { useEffect, useState } from "react";
import CaseStudiesBanner from "../../assets/images/case-study-banner-renew.jpg";
import { CaseStudiesCard } from "../../components/CaseStudiesCard";
import axios from "axios";
import { CaseStudiesTabStrip } from "../../components/CaseStudiesTabStrip";

interface ICaseStudy {
    _id: string,
    category: string;
    imageUrl: string;
    project: string;
    solutionsProvided: string;
    title: string;
}

export const CaseStudiesAviation = () => {
    const [_, setAllCaseStudies] = useState<ICaseStudy[]>([]);
    const [filteredCaseStudies, setFilteredCaseStudies] = useState<ICaseStudy[]>([]);
    const [isLoading, setIsLoading] = useState(true);


    const fetchCaseStudies = async () => {
        setIsLoading(true);
        try {
            const response = await axios.get("https://tranos-api.onrender.com/api/v1/case-studies");
            const caseStudies: ICaseStudy[] = response.data.caseStudies;

            console.log(caseStudies);

            // Filter case studies based on the category
            const filtered = caseStudies.filter(
                caseStudy => caseStudy.category.toLowerCase() === "aviation"
            );

            // Set the filtered case studies to the state
            setAllCaseStudies(filtered);
            setFilteredCaseStudies(filtered); // Assuming you use this state for rendering

        } catch (error) {
            console.error('Error fetching case studies:', error);
        } finally {
            setIsLoading(false);
        }
    };


    useEffect(() => {
        fetchCaseStudies();
    }, []);

    return (
        <main>
            <HeaderGap />
            <Strip img={CaseStudiesBanner} title="Case Studies" />
            <CaseStudiesTabStrip />
            <div className="py-[30px] md:py-[40px] lg:py-[60px]">
                <p className="text-center text-[18px] md:text-[24px] ld:text-[28px] text-tranos-primary mb-[10px] md:mb-[20px]">
                    Delivering value-adding engineering solutions
                </p>

                <div className="flex justify-center items-center gap-[20px] text-[14px]">
                    <span className="text-zinc-600">Industry</span>
                    <div className="p-[10px] shadow-md rounded text-tranos-primary flex items-center relative group min-w-[250px] hover:rounded-[4px_4px_0_0]">
                        <div className="flex items-center justify-between gap-[5px] w-full cursor-pointer">
                            <span className="capitalize">Aviation</span>
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
