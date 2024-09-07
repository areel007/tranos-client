import { ProductBanner } from "../../../components/ProductBanner"

import GasketsBanner from "../../../assets/images/gasket-banner-rev.jpg"
import WesealGaskets from "../../../assets/images/WESEAL-GASKET-HEADER.svg"
import { Link } from "react-router-dom"

import SpiralWound from "../../../assets/images/SPIRAL-WOUND-GASKET.jpg"
import SoftCut from "../../../assets/images/SOFT-CUT.jpg"
import KammProfile from "../../../assets/images/KAMMPROFILE.jpg"

export const Gaskets = () => {
    return (
        <main>
            <div className="h-[50px] lg:h-[70px]"></div>
            <ProductBanner img={GasketsBanner} />

            <div className="max-w-[1100px] w-[90%] mx-auto py-[30px] md:py-[40px] lg:py-[60px]">
                <img src={WesealGaskets} alt="tranos gaskets" className="block mb-[20px] w-[150px] md:w-[300px]" />

                <p className="text-[14px] md:text-[16px] font-[300] leading-[1.8] max-w-[900px] w-[90%] mb-[20px] md:mb-[40px]">
                    <span className="text-[18px] md:text-[20px] lg:text-[22px] text-zinc-800 block mb-[10px]">
                        Tranos is a Nigerian company producing spiral wound gaskets (SWG) as well as soft-cut gaskets through subsidiary – WeSeal.
                    </span>

                    All our gaskets are manufactured to the highest quality standards in compliance with ASME B16.20 and ASME B16.21 using quality materials and following the approved manufacturing processes according to ISO 9001:2015 standard to ensure overall quality and consistency.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-[10px] mb-[20px] md:mb-[40px]">
                    <div>
                        <img src={SpiralWound} alt="tranos gaskets" className="w-full block mb-[10px]" />
                        <div>
                            <span className="font-[700] block mb-[10px]">Spiral Wound Gaskets</span>
                            <p className="text-[14px] font-[300] leading-[1.8]">
                                These are the common metallic gasket used in industrial applications involving a range of pressure and temperatures. They are popular in the oil and gas, chemical, petrochemical, power, and food industries and prevents leak through flange joints.
                            </p>
                            <Link to="/products/gaskets/spiral-wound-gaskets" className="text-[14px] text-tranos-primary">Learn more</Link>
                        </div>
                    </div>

                    <div>
                        <img src={SoftCut} alt="tranos gaskets" className="w-full block mb-[10px]" />
                        <div>
                            <span className="font-[700] block mb-[10px]">Soft-Cut Gaskets</span>
                            <p className="text-[14px] font-[300] leading-[1.8]">
                                These are gaskets that are easily compressed under a low bolt load. Soft gaskets are used as heat exchanger gaskets, compressor and bonnet valve gaskets and in pipe flange applications etc.
                            </p>
                            <Link to="/products/gaskets/soft-cut-gaskets" className="text-[14px] text-tranos-primary">Learn more</Link>
                        </div>
                    </div>

                    <div>
                        <img src={KammProfile} alt="tranos gaskets" className="w-full block mb-[10px]" />
                        <div>
                            <span className="font-[700] block mb-[10px]">Kammprofile Gaskets</span>
                            <p className="text-[14px] font-[300] leading-[1.9]">
                                Kammprofile gasket or Camprofile gasket or Grooved gasket) are gaskets that come with a metal core bonded with a soft filler material on both sides. After installation of the Kammprofile gasket, the soft non-metallic filler gets pushed into the metal core serrated grooves.
                            </p>
                            <Link to="/products/gaskets/kammprofile" className="text-[14px] text-tranos-primary">Learn more</Link>
                        </div>
                    </div>

                </div>

                <div>
                    <a href="https://drive.google.com/file/d/1zW1nrQZ9n7fgM1EJJ8veAdmBQ_bKsw1B/view" target="_blank" className="bg-tranos-primary text-white text-[14px] font-[300] p-[10px_20px] inline-block mb-[10px]">Download Catalogue</a>
                    <p className="text-[14px] font-[300]">Download our catalogues and brochures to find all the information you need</p>
                </div>
            </div>
        </main>
    )
}