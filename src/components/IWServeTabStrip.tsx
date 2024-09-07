import { Link, useLocation } from "react-router-dom";

const industries = [
    {
        name: "power & energy",
        to: "/industries-we-serve/power-and-energy"
    },
    {
        name: "oil & gas",
        to: "/industries-we-serve/oil-and-gas"
    },
    {
        name: "residential & commercial",
        to: "/industries-we-serve/residential-and-commercial"
    },
    {
        name: "industrial & manufacturing",
        to: "/industries-we-serve/industrial-and-manufacturing"
    },
    {
        name: "telecommunications",
        to: "/industries-we-serve/telecommunications"
    }
]


export const IWServeTabStrip = () => {

    const location = useLocation()

    return <div className="bg-zinc-100">
        <div className="max-w-[1100px] w-[90%] mx-auto py-[7px] text-[14px] overflow-auto">
            <p className="min-w-[800px]">
                {industries.map((item, i) => <Link to={item.to} key={i} className={`text-[14px] font-[300] capitalize ${location.pathname === item.to ? 'text-tranos-primary font-[500]' : 'text-zinc-800'}`}>{item.name} {!(i === industries.length - 1) && <span className="text-blue-400"> | </span>} </Link>)}
            </p>
        </div>
    </div>
}