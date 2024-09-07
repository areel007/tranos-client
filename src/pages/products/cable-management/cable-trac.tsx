import { Strip } from "../../../components/Strip"
import Banner from "../../../assets/images/cable-inner-banner.jpg"
import { ProductTabStrip } from "../../../components/ProductTabStrip"
import { Link } from "react-router-dom"
import Trac from "../../../assets/images/trac.svg"
// import Trays from "../../../assets/images/trays.jpg"
// import Ladder from "../../../assets/images/ladder.jpg"
// import Fittings from "../../../assets/images/fittings.jpg"
// import Accessories from "../../../assets/images/accessories.jpg"
import axios from "axios"
import { useState, useEffect } from "react"

export const CableTrac = () => {

    const [cableTrays, setCableTrays] = useState({
        title: '',
        description: ''
    });

    // const [cableTraysImage, setCableTraysImage] = useState<File | null>(null);
    const [cableTraysImageUrl, setCableTraysImageUrl] = useState<string>("");

    const fetchCableTrays = async () => {
        try {
            const response = await axios.get("https://tranos-api.onrender.com/api/v1/products/cable-management/cable-trays/6668c5b810f10f5e0f2c717d");

            const { title, description, cableTraysImage } = response.data.cableTrays;

            setCableTrays({
                title,
                description
            });

            setCableTraysImageUrl(`https://tranos-api.onrender.com/${cableTraysImage}`);
        } catch (error) {
            console.error("Error fetching cable trays data:", error);
        }
    };

    // cable ladders
    const [cableLadders, setCableLadders] = useState({
        title: '',
        description: ''
    });

    // const [cableLaddersImage, setCableLaddersImage] = useState<File | null>(null);
    const [cableLaddersImageUrl, setCableLaddersImageUrl] = useState<string>("");

    const fetchCableLadders = async () => {
        try {
            const response = await axios.get("https://tranos-api.onrender.com/api/v1/products/cable-management/cable-ladders/666b33984dd5412681fc47b8");

            const { title, description, cableLaddersImage } = response.data.cableLadders;

            setCableLadders({
                title,
                description
            });


            setCableLaddersImageUrl(`https://tranos-api.onrender.com/${cableLaddersImage}`);
        } catch (error) {
            console.error("Error fetching cable trays data:", error);
        }
    };

    const [cableFittings, setCableFittings] = useState({
        title: '',
        description: ''
    });

    // const [cableFittingsImage, setCableFittingsImage] = useState<File | null>(null);
    const [cableFittingsImageUrl, setCableFittingsImageUrl] = useState<string>("");

    const fetchCableFittings = async () => {
        try {
            const response = await axios.get("https://tranos-api.onrender.com/api/v1/products/cable-management/cable-fittings/666b2d4e2c390eb15f4df6e1");

            const { title, description, cableFittingsImage } = response.data.cableFittings;

            setCableFittings({
                title,
                description
            });


            setCableFittingsImageUrl(`https://tranos-api.onrender.com/${cableFittingsImage}`);
        } catch (error) {
            console.error("Error fetching cable trays data:", error);
        }
    };

    // accessories
    const [cableAccessories, setCableAccessories] = useState({
        title: '',
        description: ''
    });

    // const [cableAccessoriesImage, setCableAccessoriesImage] = useState<File | null>(null);
    const [cableAccessoriesImageUrl, setCableAccessoriesImageUrl] = useState<string>("");

    const fetchCableAccessories = async () => {
        try {
            const response = await axios.get("https://tranos-api.onrender.com/api/v1/products/cable-management/accessories-and-fasteners/666b34ad4dd5412681fc47bf");

            const { title, description, accessoriesAndFastenersImage } = response.data.accessoriesAndFasteners;

            setCableAccessories({
                title,
                description
            });


            setCableAccessoriesImageUrl(`https://tranos-api.onrender.com/${accessoriesAndFastenersImage}`);
        } catch (error) {
            console.error("Error fetching cable trays data:", error);
        }
    };

    useEffect(() => {
        fetchCableTrays()
        fetchCableLadders()
        fetchCableFittings()
        fetchCableAccessories()
    }, []);

    return <main>
        <div className="h-[50px] lg:h-[70px]"></div>
        <Strip img={Banner} title="Cable Management & Support System" />
        <ProductTabStrip tabs={<p>
            <Link to="/products/cable-management/trac" className={`${location.pathname === "/products/cable-management/trac" ? 'text-tranos-primary' : 'text-zinc-700'}`}>Tranos Trac</Link> | <Link to="/products/cable-management/eris" className={`${location.pathname === "/products/cable-management/eris" ? 'text-tranos-primary' : 'text-zinc-700'}`}>Tranos Eris</Link> | <Link to="/products/cable-management/ellis" className={`${location.pathname === "/products/cable-management/ellis" ? 'text-tranos-primary' : 'text-zinc-700'}`}>Tranos Ellis</Link> | <Link to="/products/cable-management/cable-glands" className={`${location.pathname === "/products/cable-management/cable-glands" ? 'text-tranos-primary' : 'text-zinc-700'}`}>Cable Glands</Link>
        </p>} />

        <div className="py-[30px] md:py-[40px] lg:py-[60px] max-w-[1100px] w-[90%] mx-auto">
            <div className="mb-[20px]">
                <img src={Trac} alt="tranos nigeria" className="w-[200px] inline-block mb-[20px]" />
                <p>
                    <a href="#products/cable-management/cable-trays" className="uppercase text-[14px] font-[300]">cable trays</a> | <a href="#products/cable-management/ladders" className="uppercase text-[14px] font-[300]">ladders</a> | <a href="#products/cable-management/supports" className="uppercase text-[14px] font-[300]">supports</a> | <a href="#products/cable-management/fasteners" className="uppercase text-[14px] font-[300]">fasteners</a> | <a href="#products/cable-management/accessories" className="uppercase text-[14px] font-[300]">accessories</a>
                </p>
            </div>

            {/* trays */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-[30px] lg:ga-[60px] border-b border-zinc-400 pb-[30px] md:py-[40px] lg:py-[60px]">
                <div>
                    <span className="capitalize text-[16px] md:text-[20px] font-[600]">{cableTrays.title}</span>

                    <div dangerouslySetInnerHTML={{ __html: cableTrays.description }} className="leading-[1.6] text-zinc-800 font-[300]" />

                    {/* <p className="leading-[1.6] text-zinc-800 font-[300]">
                        Our Cable Trays are specially designed for use in a wide range of settings. They are fabricated from quality mild steel and stainless-steel materials to meet your cable routing needs. <br /><br />

                        These products are available in various size options, ranging from 70 to 600 millimeters in width and load depth of 50 to 100 millimeters. <br /><br />

                        Tranos' Trays are easy to install and requires low maintenance.
                    </p> */}
                </div>

                {/* <img src={Trays} alt="tranos nigeria" /> */}
                <img src={cableTraysImageUrl} alt="tranos nigeria" />
            </div>

            {/* ladders */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-[30px] lg:ga-[60px] border-b border-zinc-400 pb-[30px] md:py-[40px] lg:py-[60px]">

                <img src={cableLaddersImageUrl} alt="tranos nigeria" />
                <div>
                    <span className="capitalize text-[16px] md:text-[20px] font-[600]">{cableLadders.title}</span>

                    <div className="leading-[1.6] text-zinc-800 font-[300] ul-tranos-elite" dangerouslySetInnerHTML={{ __html: cableLadders.description }} />

                    {/* <p className="leading-[1.6] text-zinc-800 font-[300]">
                        Our Cable Ladders are specially designed for medium and heavy-duty cable loads, fabricated from high- grade mild steel and Stainless Steel. They are available in different size options ranging from 200 to 900 millimeters in width and load depth of 100 to 150 millimeters. <br /><br />

                        <span className="font-[600]">Tranos' Ladders:</span> <br /><br />

                        <ul className="list-disc ml-[20px]">
                            <li>Come with easy and ready to install accessories.</li>
                            <li>Require low maintenance.</li>
                            <li>Customizable size options.</li>
                        </ul>
                    </p> */}
                </div>


            </div>

            {/* fittings */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-[30px] lg:ga-[60px] border-b border-zinc-400 pb-[30px] md:py-[40px] lg:py-[60px]">
                <div>
                    <span className="capitalize text-[16px] md:text-[20px] font-[600]">{cableFittings.title}</span>

                    <div className="leading-[1.6] text-zinc-800 font-[300]" dangerouslySetInnerHTML={{ __html: cableFittings.description }} />

                    {/* <p className="leading-[1.6] text-zinc-800 font-[300]">
                        Our Cable Tray fittings are available in different configurations adapted to suit your routing needs, such as plane, vertical and adjustable fittings which are available in various angles, widths, and cable loading depths.
                    </p> */}
                </div>

                <img src={cableFittingsImageUrl} alt="tranos nigeria" />
            </div>

            {/* accessories */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-[30px] lg:ga-[60px] border-b border-zinc-400 pb-[30px] md:py-[40px] lg:py-[60px]">

                <img src={cableAccessoriesImageUrl} alt="tranos nigeria" />
                <div>
                    <span className="capitalize text-[16px] md:text-[20px] font-[600]">{cableAccessories.title}</span>

                    <div className="leading-[1.6] text-zinc-800 font-[300] ul-tranos-elite" dangerouslySetInnerHTML={{ __html: cableAccessories.description }} />

                    {/* <p className="leading-[1.6] text-zinc-800 font-[300]">
                        We have designed accessories to be used for other supplementary functions while routing cables, these functions include flexible angle change, cable separation, mounting and supporting during installation etc. <br /><br />

                        These accessories are suitable for use in a wide range of environmental conditions and suitable for various applications <br /><br />

                        Our range of accessories include but are not limited to:

                        <ul className="list-disc ml-[20px]">
                            <li>Adjustable Couplers</li>
                            <li>Hold Down Clamps</li>
                            <li>End Blind Plates</li>
                            <li>Cantilever Supports</li>
                            <li>Rubber Isolation Pads</li>
                            <li>Cover Holding Clips</li>
                            <li>Reducer Couplers etc.</li>
                        </ul>
                    </p> */}
                </div>


            </div>
        </div>
    </main>
}