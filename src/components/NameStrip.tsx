import { Link } from "react-router-dom";

type TNameStrip = {
    name: string;
}

export const NameStrip = ({ name }: TNameStrip) => {
    return (
        <div className="py-[7px] bg-zinc-50">
            <div className="max-w-[1100px] w-[90%] mx-auto">
                <span className="text-[14px] font-[400] text-zinc-800 capitalize"><Link to="/leadership">Leadership</Link> &gt; {name}</span>
            </div>
        </div>
    )
}