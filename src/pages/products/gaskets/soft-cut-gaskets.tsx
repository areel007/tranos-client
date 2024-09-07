import { Strip } from "../../../components/Strip"
import StripImg from "../../../assets/images/gasket-banner-rev.jpg"
import { ProductTabStrip } from "../../../components/ProductTabStrip"
import { Link } from "react-router-dom"
import { ProductTitle } from "../../../components/ProductTitle"

import SoftCutBanner from "../../../assets/images/softcut_bg.jpg"

import SCG1 from "../../../assets/images/SCG1.jpg"
import SCG2 from "../../../assets/images/SCG2.jpg"
import SCG3 from "../../../assets/images/SCG3.jpg"
import SCG4 from "../../../assets/images/SCG4.jpg"


export const SoftCutGaskets = () => {
    return <main>
        <div className="h-[50px] lg:h-[70px]"></div>
        <Strip img={StripImg} title="Gaskets" />
        <ProductTabStrip tabs={<p>
            <Link to="/products/gaskets/spiral-wound-gaskets" className={`${location.pathname === "/products/gaskets/spiral-wound-gaskets" ? 'text-tranos-primary' : 'text-zinc-700'}`}>Spiral Wound Gaskets</Link> | <Link to="/products/gaskets/soft-cut-gaskets" className={`${location.pathname === "/products/gaskets/soft-cut-gaskets" ? 'text-tranos-primary' : 'text-zinc-700'}`}>Soft-Cut Gaskets</Link> | <Link to="/products/gaskets/kammprofile" className={`${location.pathname === "/products/gaskets/kammprofile" ? 'text-tranos-primary' : 'text-zinc-700'}`}>Kammprofile Gaskets</Link>
        </p>} />

        <div className="max-w-[1100px] w-[90%] mx-auto py-[30px] md:py-[40px] lg:py-[60px]">
            <ProductTitle title="Spiral Wound Gaskets" customStyles="border-blue-400 text-[18px] md:text-[20px] lg:text-[22px] font-[700] text-zinc-800 mb-[20px]" />

            <img src={SoftCutBanner} alt="tranos spiral wound gaskets" className="w-full block mb-[20px] md:mb-[40px]" />

            <p className="font-[300] leading-[2] text-[14px] md:text-[16px]">
                <span className="text-[18px] md:text-[20px] lg:text-[22px] block mb-[10px] leading-[1.6]">
                    Our Soft sealing nonmetallic gaskets are manufactured by either cutting using CNC (computer numerically controlled) machines or die cutting from sheets of special sealing materials. These gaskets are used with both raised face and flat faced flanges. faced flanges. Our flange gaskets comply with ASME B16.21 standard. Various shapes and sizes are possible with this type of gaskets.
                </span>

                Applications include low and medium pressure applications depending on the type of material used. Specific materials can be selected based on the application and customer preference.
            </p>
        </div>

        <div className="max-w-[900px] w-[90%] mx-auto pb-[30px] md:pb-[40px] lg:pb-[60px]">

            <div className="border-b-[2px] border-black pb-[40px]">
                <span className="font-[700] text-[18px] md:text-[20px] mb-[10px] block">Stainless Steel Tanged Graphite Gasket</span>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-[30px] md:gap-[60px]">
                    <div>
                        <p className="text-[14px] md:text-[16px] font-[300] text-zinc-700 leading-[1.8]">Our stainless-steel tanged gasket comprises two outer layers of graphite foil with a central tanged stainless-steel core 0.1mm thick mechanically bonded therefore no need for adhesive.</p> <br />

                        <b>Applications</b> <br /> <br />

                        <p className="text-[14px] md:text-[16px] font-[300] text-zinc-700 leading-[1.8]">
                            This gasket is used in steam system applications, the petrochemical and chemical industries, piping and machinery. It’s excellent sealing abilities are also used where corrosive media is present and can be used at cryogenic temperatures. <br /><br />

                            This gasket is used in steam system applications, the petrochemical and chemical industries, piping and machinery. It’s excellent sealing abilities are also used where corrosive media is present and can be used at cryogenic temperatures.
                        </p>
                    </div>

                    <div className="">
                        <img src={SCG1} alt="tranos soft-cut gaskets" className="w-full block mb-[10px]" />

                        <div className="border-b border-t border-black">
                            <div className="grid grid-cols-2 bg-gray-100 p-[10px] text-[12px] gap-[20px]">
                                <div className="font-[700]">Graphite Purity</div>
                                <div>99% minimum</div>
                            </div>
                            <div className="grid grid-cols-2 bg-white p-[10px] text-[12px] gap-[20px]">
                                <div className="font-[700]">Stainless steel foil tanged</div>
                                <div>0.1mm thick 1.4401 316SS foil tanged</div>
                            </div>
                            <div className="grid grid-cols-2 bg-gray-100 p-[10px] text-[12px] gap-[20px]">
                                <div className="font-[700]">Maximum service temperature</div>
                                <div>550°C in oxidising conditions. Consult Gee for further information</div>
                            </div>

                            <div className="grid grid-cols-2 bg-white p-[10px] text-[12px] gap-[20px]">
                                <div className="font-[700]">Maximum service temperature</div>
                                <div>750°C in inert and reducing conditions</div>
                            </div>

                            <div className="grid grid-cols-2 bg-gray-100 p-[10px] text-[12px] gap-[20px]">
                                <div className="font-[700]">Maximum service temperature</div>
                                <div>140 Bar</div>
                            </div>

                            <div className="grid grid-cols-2 bg-white p-[10px] text-[12px] gap-[20px]">
                                <div className="font-[700]">Compressibility</div>
                                <div>30 to 40%</div>
                            </div>

                            <div className="grid grid-cols-2 bg-gray-100 p-[10px] text-[12px] gap-[20px]">
                                <div className="font-[700]">Recovery</div>
                                <div>15 to 20%</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="border-b-[2px] border-black py-[40px]">
                <span className="font-[700] text-[18px] md:text-[20px] mb-[10px] block">Stainless Steel Reinforced Graphite Gasket</span>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-[30px] md:gap-[60px]">
                    <div className="">
                        <img src={SCG2} alt="tranos soft-cut gaskets" className="w-full block mb-[10px]" />

                        <div className="border-b border-t border-black">
                            <div className="grid grid-cols-2 bg-gray-100 p-[10px] text-[12px] gap-[20px]">
                                <div className="font-[700]">Graphite Purity</div>
                                <div>99% minimum</div>
                            </div>
                            <div className="grid grid-cols-2 bg-white p-[10px] text-[12px] gap-[20px]">
                                <div className="font-[700]">Stainless steel foil tanged</div>
                                <div>0.05mm thick 1.4401 316</div>
                            </div>
                            <div className="grid grid-cols-2 bg-gray-100 p-[10px] text-[12px] gap-[20px]">
                                <div className="font-[700]">Maximum service temperature</div>
                                <div>550°C in oxidising conditions.</div>
                            </div>

                            <div className="grid grid-cols-2 bg-white p-[10px] text-[12px] gap-[20px]">
                                <div className="font-[700]">Maximum service temperature</div>
                                <div>750°C in inert and reducing conditions</div>
                            </div>

                            <div className="grid grid-cols-2 bg-gray-100 p-[10px] text-[12px] gap-[20px]">
                                <div className="font-[700]">Maximum service temperature</div>
                                <div>140 Bar</div>
                            </div>

                            <div className="grid grid-cols-2 bg-white p-[10px] text-[12px] gap-[20px]">
                                <div className="font-[700]">Compressibility</div>
                                <div>40 to 50%</div>
                            </div>

                            <div className="grid grid-cols-2 bg-gray-100 p-[10px] text-[12px] gap-[20px]">
                                <div className="font-[700]">Recovery</div>
                                <div>10 to 15%</div>
                            </div>
                        </div>
                    </div>

                    <div>
                        <p className="text-[14px] md:text-[16px] font-[300] text-zinc-700 leading-[1.8]">
                            Our stainless-steel reinforced graphite gasket comprises of two outer layers of graphite with a stainless-steel core 0.05mm thick.
                        </p> <br />

                        <b>Applications</b> <br /><br />

                        <p className="text-[14px] md:text-[16px] font-[300] text-zinc-700 leading-[1.8]">
                            This gasket is used in steam system applications, the petrochemical and chemical industries, piping and machinery. It’s excellent sealing abilities are also used where corrosive media is present and can be used at cryogenic temperatures. <br /><br />

                            Stainless steel reinforced graphite gaskets are used in applications such as pumps, fitting and valves with low gasket stresses. It’s excellent sealing abilities are also used where corrosive media is present and can be used at cryogenic temperatures.
                        </p>
                    </div>
                </div>
            </div>

            <div className="border-b-[2px] border-black py-[40px]">
                <span className="font-[700] text-[18px] md:text-[20px] mb-[10px] block">Non-asbestos Gasket</span>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-[30px] md:gap-[60px]">
                    <div>
                        <p className="text-[14px] md:text-[16px] font-[300] text-zinc-700 leading-[1.8]">Our non-asbestos gasket jointing material contains a mixture of aramid and glass fibres with a nitrile rubber binder. It’s an economical, general-purpose material for use in light to medium gasket stress applications. It exhibits good sealing and torque retention properties. Filling the spaces between two or more mating surfaces, generally to prevent leakage from or into the joining objects while under compression.</p> <br />

                        <b>Applications</b> <br /> <br />

                        <p className="text-[14px] md:text-[16px] font-[300] text-zinc-700 leading-[1.8]">
                            Specifically designed to satisfy the growing demand for numerous aggressive chemicals used by industry today including oil, fuels, gases, freons, paper & pulp. It’s Excellent sealing properties can be used in many applications including pipelines, radiators, boilers and many other instances of flanged joints.
                        </p>
                    </div>

                    <div className="">
                        <img src={SCG3} alt="tranos soft-cut gaskets" className="w-full block mb-[10px]" />

                        <div className="border-b border-t border-black">
                            <div className="grid grid-cols-2 bg-gray-100 p-[10px] text-[12px] gap-[20px]">
                                <div className="font-[700]">Gross Density</div>
                                <div>1.7gcm<sup>3</sup> - 2.0gcm<sup>3</sup></div>
                            </div>
                            <div className="grid grid-cols-2 bg-white p-[10px] text-[12px] gap-[20px]">
                                <div className="font-[700]">Compressibility</div>
                                <div>5%-15%</div>
                            </div>
                            <div className="grid grid-cols-2 bg-gray-100 p-[10px] text-[12px] gap-[20px]">
                                <div className="font-[700]">Standard Thickness</div>
                                <div>0.25 - 6.0mm Non-metallic range
                                    0.80 - 6.0mm Metallic range</div>
                            </div>

                            <div className="grid grid-cols-2 bg-white p-[10px] text-[12px] gap-[20px]">
                                <div className="font-[700]">Colour</div>
                                <div>Green & white (unless specified)</div>
                            </div>

                            <div className="grid grid-cols-2 bg-gray-100 p-[10px] text-[12px] gap-[20px]">
                                <div className="font-[700]">Operating Temperature</div>
                                <div>Max Peak Temp. 440°C
                                    Max Continuous Temp. 350°C
                                    Max Continuous Temp. with steam 250°C
                                    Max Operating Pressure 150 Kg/ cm2</div>
                            </div>

                            <div className="grid grid-cols-2 bg-white p-[10px] text-[12px] gap-[20px]">
                                <div className="font-[700]">Conformity</div>
                                <div>Conforms to BS-7531-Grade X</div>
                            </div>


                        </div>
                    </div>
                </div>
            </div>

            <div className="border-b-[2px] border-black py-[40px]">
                <span className="font-[700] text-[18px] md:text-[20px] mb-[10px] block">Stainless Steel Reinforced Graphite Gasket</span>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-[30px] md:gap-[60px]">
                    <div className="">
                        <img src={SCG4} alt="tranos soft-cut gaskets" className="w-full block mb-[10px]" />

                        <div className="border-b border-t border-black">
                            <div className="grid grid-cols-2 bg-gray-100 p-[10px] text-[12px] gap-[20px]">
                                <div className="font-[700]">Graphite Purity</div>
                                <div>99% minimum</div>
                            </div>
                            <div className="grid grid-cols-2 bg-white p-[10px] text-[12px] gap-[20px]">
                                <div className="font-[700]">Stainless steel foil tanged</div>
                                <div>0.05mm thick 1.4401 316</div>
                            </div>
                            <div className="grid grid-cols-2 bg-gray-100 p-[10px] text-[12px] gap-[20px]">
                                <div className="font-[700]">Maximum service temperature</div>
                                <div>550°C in oxidising conditions.</div>
                            </div>

                            <div className="grid grid-cols-2 bg-white p-[10px] text-[12px] gap-[20px]">
                                <div className="font-[700]">Maximum service temperature</div>
                                <div>750°C in inert and reducing conditions</div>
                            </div>

                            <div className="grid grid-cols-2 bg-gray-100 p-[10px] text-[12px] gap-[20px]">
                                <div className="font-[700]">Maximum service temperature</div>
                                <div>140 Bar</div>
                            </div>

                            <div className="grid grid-cols-2 bg-white p-[10px] text-[12px] gap-[20px]">
                                <div className="font-[700]">Compressibility</div>
                                <div>40 to 50%</div>
                            </div>

                            <div className="grid grid-cols-2 bg-gray-100 p-[10px] text-[12px] gap-[20px]">
                                <div className="font-[700]">Recovery</div>
                                <div>10 to 15%</div>
                            </div>
                        </div>
                    </div>

                    <div>
                        <p className="text-[14px] md:text-[16px] font-[300] text-zinc-700 leading-[1.8]">
                            Our PTFE gaskets work efficiently at both low and high temperatures.
                        </p> <br />

                        <b>Applications</b> <br /><br />

                        <p className="text-[14px] md:text-[16px] font-[300] text-zinc-700 leading-[1.8]">
                            This gasket offers useful properties in various applications such as chemical resistance, thermal stability, cryogenic properties, low co-efficient of friction, low surface energy, low dielectric constant, high volume and surface resistivity and flame resistance. <br /><br />

                            These properties allow the use of the gasket in several fields such as: <br /><br />
                        </p>

                        <ul className="text-[14px] md:text-[16px] font-[300] text-zinc-700 leading-[1.8] ml-[20px] list-disc">
                            <li>Chemical</li>
                            <li>Electrical and Electronic</li>
                            <li>Petrochemical</li>
                            <li>Automotive</li>
                            <li>Mechanical</li>
                            <li>Medical</li>
                            <li>Aeronautics</li>
                            <li>Semiconductor and Food Industry</li>
                        </ul>
                    </div>
                </div>
            </div>

            <p className="text-[14px] text-zinc-600 mt-[40px]">For further enquiries: <br />
                Call +234 1 271 7120 or send us an email at <span className="text-tranos-primary">info@tranos.ng</span></p>
        </div>
    </main>
}