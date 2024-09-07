import { Strip } from "../../../components/Strip";
import Banner from "../../../assets/images/cable-inner-banner.jpg"
import { ProductTabStrip } from "../../../components/ProductTabStrip";
import { Link } from "react-router-dom";
import TranosErisLogo from "../../../assets/images/eris.svg"
// import ErisMain from "../../../assets/images/eris_main.jpg"
// import ErisBase from "../../../assets/images/eris_base.jpg"
import { useState, useEffect } from "react";
import axios from "axios";


export const Eris = () => {

    const [eris, setEris] = useState('')
    const [erisImages, setErisImages] = useState<FileList | ArrayBuffer | string>('');

    const fetchEris = async () => {
        const response = await axios.get("https://tranos-api.onrender.com/api/v1/products/cable-management/tranos-eris/666b64b0b3575965230a253f")

        const { description, tranosErisImages } = response.data.tranosEris

        setEris(description)
        setErisImages(tranosErisImages)

    }

    useEffect(() => {
        fetchEris()
    }, []);

    return <main>
        <div className="h-[50px] lg:h-[70px]"></div>
        <Strip img={Banner} title="Cable Management & Support System" />
        <ProductTabStrip tabs={<p>
            <Link to="/products/cable-management/trac" className={`${location.pathname === "/products/cable-management/trac" ? 'text-tranos-primary' : 'text-zinc-700'}`}>Tranos Trac</Link> | <Link to="/products/cable-management/eris" className={`${location.pathname === "/products/cable-management/eris" ? 'text-tranos-primary' : 'text-zinc-700'}`}>Tranos Eris</Link> | <Link to="/products/cable-management/ellis" className={`${location.pathname === "/products/cable-management/ellis" ? 'text-tranos-primary' : 'text-zinc-700'}`}>Tranos Ellis</Link> | <Link to="/products/cable-management/cable-glands" className={`${location.pathname === "/products/cable-management/cable-glands" ? 'text-tranos-primary' : 'text-zinc-700'}`}>Cable Glands</Link>
        </p>} />

        <div className="py-[30px] md:py-[40px] lg:py-[60px] max-w-[1100px] w-[90%] mx-auto">
            <img src={TranosErisLogo} alt="tranos nigeria" className="w-[100px] md:w-[200px] block mb-[20px] md:mb-[40px]" />

            <div className="mb-[40px]">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-[20px] md:gap-[40px]">

                    <div className="font-[200] text-[14px] md:text-[16px] leading-[1.6]" dangerouslySetInnerHTML={{ __html: eris }} />
                    {/* <p className="font-[200] text-[14px] md:text-[16px] leading-[1.6]">
                        <span className="text-[18px] md:text-[20px] lg:text-[22px]">
                            The Tranos' ERIS Rack is durable, easy to assemble, versatile in application, and ideal for both indoor & outdoor electrical component mounting applications.
                        </span> <br /><br />

                        A complete unit features single or double slot rungs with integrated cable management features and can be supplied in pre-assembled or flat pack forms.

                        <br /><br />

                        They are reconfigurable and adaptable to any application and come in standard or customized sizes.
                    </p> */}

                    <img src={`https://tranos-api.onrender.com/${erisImages.toString().split(",")[0]}`} alt="tranos nigeria" className="w-full" />
                </div>
            </div>

            <img src={`https://tranos-api.onrender.com/${erisImages.toString().split(",")[1]}`} alt="tranos nigeria" />
        </div>
    </main>
}
