import { Link } from "react-router-dom"
import "../assets/custom-css/leadership.css"

type TLeader = {
    name: string;
    img?: string;
    imgLarge?: string;
    position: string;
    to: string;
    bio: string;
}

export const LeadershipCard = ({ name, img, position, to, imgLarge, bio }: TLeader) => {
    return (
        <Link to={to} className={`w-full ${!name ? 'hidden md:block cursor-auto' : null}`} state={{ name, imgLarge, bio }}>
            <div className="mb-[10px]">
                {name === "" ? null : img ? <img src={img} alt="tranos nigeria" className="w-full bg-gray-300" /> : <div className="w-full no__img bg-gray-300"></div>}

            </div>
            <p className="leading-[1.2]">
                <span className="font-[600] capitalize">{name}</span> <br />
                <span className="text-[14px] capitalize" dangerouslySetInnerHTML={{ __html: position }} />
            </p>
        </Link>
    )
}