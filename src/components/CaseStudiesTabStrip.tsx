import { Link, useLocation } from "react-router-dom";

const industries = [
    {
        name: "power & energy",
        to: "/case-studies/power-and-energy"
    },
    {
        name: "oil & gas",
        to: "/case-studies/oil-and-gas"
    },
    {
        name: "aviation",
        to: "/case-studies/aviation"
    },
    {
        name: "industrial & manufacturing",
        to: "/case-studies/industrial-and-manufacturing"
    },
    {
        name: "telecommunications",
        to: "/case-studies/telecommunications"
    }
]


export const CaseStudiesTabStrip = () => {

    const location = useLocation()

    return <div className="bg-zinc-100">
        <div className="max-w-[1100px] w-[90%] mx-auto py-[7px] text-[14px] overflow-auto">
            <p className="min-w-[800px]">
                {industries.map((item, i) => <Link to={item.to} key={i} className={`text-[14px] font-[300] capitalize ${location.pathname === item.to ? 'text-tranos-primary font-[500]' : 'text-zinc-800'}`}>{item.name} {!(i === industries.length - 1) && <span className="text-blue-400"> | </span>} </Link>)}
            </p>
        </div>
    </div>
}