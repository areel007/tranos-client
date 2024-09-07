import { useState } from "react"
import { PPD } from "./products/PPD"
import { CMSS } from "./products/CMSS"
import { WSS } from "./products/WSS"

const Products = [
    {
        name: "PP&D",
        step: 1
    },
    {
        name: "CM&SS",
        step: 2,
    },
    {
        name: "Enclosures",
        step: 1,
    },
    {
        name: "WSS",
        step: 4,
    },
    {
        name: "Gaskets",
        step: 1,
    },
    {
        name: "PG&B",
        step: 2,
    },
    {
        name: "L&WD",
        step: 1,
    },
]

export const CMSProducts = () => {
    const [step, setStep] = useState(1)
    return <div className="w-[calc(100vw_-_300px)] relative left-[300px] z-[0]">
        <div className="p-[20px_10px]">
            <nav className="mb-[20px]">
                <ul className="flex items-center gap-[20px]">
                    {Products.map((product, i) => <li key={i} onClick={() => setStep(product.step)} className={`text-zinc-700 text-[16px] cursor-pointer hover:underline ${step === product.step ? 'underline' : ''}`}>{product.name}</li>)}
                </ul>
            </nav>
            <PPD step={step} />
            <CMSS step={step} />
            <WSS step={step} />
        </div>
    </div>
}