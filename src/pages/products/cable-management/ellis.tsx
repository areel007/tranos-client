import { Strip } from "../../../components/Strip";
import Banner from "../../../assets/images/cable-inner-banner.jpg"
import { ProductTabStrip } from "../../../components/ProductTabStrip";
import { Link } from "react-router-dom";
import EllisLogo from "../../../assets/images/ellis-logo.png"
// import EllisMain from "../../../assets/images/ellis_main.jpg"
// import Alpha from "../../../assets/images/alpha.jpg"
// import Vulcan from "../../../assets/images/vulcan.jpg"
// import TwoHolesPlastic from "../../../assets/images/two-holes-plastic.jpg"
// import Trident from "../../../assets/images/trident.jpg"
import axios from "axios";
import { useEffect, useState } from "react";

// const erisImages = [
//     Alpha,
//     Vulcan,
//     TwoHolesPlastic,
//     Trident
// ]

export const Ellis = () => {
    const [ellisTitle, setEllisTitle] = useState('')
    const [ellisDescription, setEllisDescription] = useState('')
    const [ellisImages, setEllisImages] = useState<FileList | ArrayBuffer | string>('');
    const [ellisImageUrls, setEllisImageUrls] = useState<string[]>([]);

    const fetchEllis = async () => {
        const response = await axios.get("https://tranos-api.onrender.com/api/v1/products/cable-management/tranos-ellis/6671b4f4a9aa41fb05c48dce")

        const { description, title, tranosEllisImages } = response.data.tranosEllis

        setEllisTitle(title)
        setEllisDescription(description)
        setEllisImages(tranosEllisImages)
        setEllisImageUrls(tranosEllisImages.split(','))

        console.log(ellisImages);


    }

    useEffect(() => {
        fetchEllis()
    }, []);
    return <main>
        <div className="h-[50px] lg:h-[70px]"></div>
        <Strip img={Banner} title="Cable Management & Support System" />
        <ProductTabStrip tabs={<p>
            <Link to="/products/cable-management/trac" className={`${location.pathname === "/products/cable-management/trac" ? 'text-tranos-primary' : 'text-zinc-700'}`}>Tranos Trac</Link> | <Link to="/products/cable-management/eris" className={`${location.pathname === "/products/cable-management/eris" ? 'text-tranos-primary' : 'text-zinc-700'}`}>Tranos Eris</Link> | <Link to="/products/cable-management/ellis" className={`${location.pathname === "/products/cable-management/ellis" ? 'text-tranos-primary' : 'text-zinc-700'}`}>Tranos Ellis</Link> | <Link to="/products/cable-management/cable-glands" className={`${location.pathname === "/products/cable-management/cable-glands" ? 'text-tranos-primary' : 'text-zinc-700'}`}>Cable Glands</Link>
        </p>} />

        <div className="py-[30px] md:py-[40px] lg:py-[60px] max-w-[1100px] w-[90%] mx-auto">
            <img src={EllisLogo} alt="tranos nigeria" className="w-[100px] md:w-[200px] block mb-[20px] md:mb-[40px]" />

            <div className="mb-[40px]">
                <span className="block mb-[20px] font-[500] text-[16px] md:text-[18px] lg:text-[22px]">{ellisTitle}</span>
                <div className="grid grid-cols-1 lg:grid-cols-[1fr_440px] gap-[20px] md:gap-[20px]">
                    <div className="font-[200] text-[14px] md:text-[16px] leading-[1.6]" dangerouslySetInnerHTML={{ __html: ellisDescription }} />
                    {/* <p className="font-[200] text-[14px] md:text-[16px] leading-[1.6]">
                        <span className="text-[18px] md:text-[20px] lg:text-[22px]">
                            We offer cable cleats and clamps to securely fasten cable to the tray/ladder and prevent damage that might occur in situations of short circuiting in electrical systems.
                        </span> <br /><br />

                        Our Cable Guide clamp has been designed, developed, tested, and manufactured following IEC 61914 (cable cleats for electrical installations). The Cable Guide Clamp is a unique combination of cable guide and cable clamp. Designed to be installed along the cable route in place of rollers, the cable is pushed and pulled through the guide to its final location. <br /><br />

                        The Cable Guide Clamp's fully gimballed mounting and slippery nylon construction ensure that friction is minimized.
                    </p> */}

                    <img src={`https://tranos-api.onrender.com/${ellisImageUrls[0]}`} alt="tranos nigeria" className="w-full" />
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-[1fr_1fr] lg:grid-cols-[1fr_1fr_1fr] xl:grid-cols-[260px_260px_260px_260px] gap-[10px] justify-between">
                {ellisImageUrls.slice(1).map((item, i) => <img src={`https://tranos-api.onrender.com/${item}`} alt="tranos nigeria" key={i} className="w-full h-full object-cover" />)}
            </div>
        </div>
    </main>
}