import WarehouseRack from "../../../assets/images/warehouse-rack.jpg"
import TranosRack from "../../../assets/images/TRANOS-RACK.svg"
import { ProductTitle } from "../../../components/ProductTitle"

import PalletRack from "../../../assets/images/pallet-rack.jpg"
import IndustrialShelving from "../../../assets/images/industrial-shelving.jpg"
import Mezzanine from "../../../assets/images/mezzanine.jpg"
import PalletAccessories from "../../../assets/images/pallet-accessories.jpg"

export const Warehouse = () => {
    return (
        <main>
            <div className="h-[50px] lg:h-[70px]"></div>
            <div className="h-[30vh] md:h-[50vh]">
                <img src={WarehouseRack} alt="tranos warehouse storage" className="w-full h-full object-cover" />
            </div>

            <div className="max-w-[1100px] w-[90%] mx-auto py-[30px] md:py-[40px] lg:py-[60px]">
                <div className="mb-[20px] md:mb-[40px]">
                    <img src={TranosRack} alt="tranos rack" className="block mb-[10px]" />
                    <ProductTitle customStyles="border-blue-400 text-[16px] md:text-[18px] lg:text-[20px]" title="Complete Storage Racking Solution" />
                </div>

                <p className="leading-[1.6] text-[14px] md:text-[16px] font-[300]">
                    <span className="text-[18px] md:text-[20px] lg:text-[22px] font-[300] text-zinc-800 block">
                        We design and manufacture racks and storage systems for various needs and applications such as warehouses, factories, stockrooms, offices, schools, and more.
                    </span> <br />

                    Our racks are made from mild steel and powder coated for durability. Also, we offer a wide range of accessories for our various rack shelving systems, all designed to enhance your chosen solution. <br /><br />

                    Our racking solutions help you maximize facility space while simplifying inventory tracking. These include:
                </p>
            </div>

            <div className="bg-gray-100">
                <div className="max-w-[1100px] w-[90%] mx-auto py-[30px] md:py-[40px] lg:py-[60px] grid grid-cols-1 md:grid-cols-2 gap-[30px] md:gap-[60px]">
                    <div>
                        <span className="block font-[700] text-[16px] md:text-[18px] mb-[10px]">Standard Pallet Racks</span>
                        <p className="text-zinc-800 font-[300] leading-[1.6]">
                            Pallet racks are material handling storage systems that keep products on pallets organized within warehouses. When used correctly, they increase warehouse storage density by enabling you to put as many pallets into a single place as possible, while maintaining ease-of-access to the items stored on them. At Tranos, we create custom pallet racking solutions that meets your every storage needs.
                        </p>
                    </div>

                    <img src={PalletRack} alt="tranos warehouse storage" />
                </div>
            </div>


            <div className="bg-white">
                <div className="max-w-[1100px] w-[90%] mx-auto py-[30px] md:py-[40px] lg:py-[60px] grid grid-cols-1 md:grid-cols-2 gap-[30px] md:gap-[60px]">
                    <img src={IndustrialShelving} alt="tranos warehouse storage" />
                    <div>

                        <span className="block font-[700] text-[16px] md:text-[18px] mb-[10px]">Industrial Warehouse Shelving</span>
                        <p className="text-zinc-800 font-[300] leading-[1.6]">
                            Industrial warehouse shelving is ideal for storing hand-picked inventory for order fulfillment of slower-moving SKU's, kitting operations, or small parts assembly. <br /><br />
                            Industrial shelving is available in a variety of strengths, from medium to heavy-duty and extra-heavy-duty capacities. The commercial shelving units also come in several widths, depths, heights, and configurations.
                        </p>
                    </div>


                </div>
            </div>

            <div className="bg-gray-100">
                <div className="max-w-[1100px] w-[90%] mx-auto py-[30px] md:py-[40px] lg:py-[60px] grid grid-cols-1 md:grid-cols-2 gap-[30px] md:gap-[60px]">
                    <div>
                        <span className="block font-[700] text-[16px] md:text-[18px] mb-[10px]">Industrial Mezzanines</span>
                        <p className="text-zinc-800 font-[300] leading-[1.6]">
                            These are one of the most economical ways to maximize the use of your industrial warehouse or storage facility. By building up, you can safely move to otherwise unused space and streamline your operations in the process. At Tranos, we create mezzanine spaces of all varieties, from the most simple access platforms to multilevel complex pick modules. We provides seamless execution from expert design of the spaces through to professional installation.
                        </p>
                    </div>

                    <img src={Mezzanine} alt="tranos warehouse storage" />
                </div>
            </div>

            <div className="bg-white">
                <div className="max-w-[1100px] w-[90%] mx-auto py-[30px] md:py-[40px] lg:py-[60px] grid grid-cols-1 md:grid-cols-2 gap-[30px] md:gap-[60px]">
                    <img src={PalletAccessories} alt="tranos warehouse storage" />
                    <div>

                        <span className="block font-[700] text-[16px] md:text-[18px] mb-[10px]">Pallet Rack Safety Accessories</span>
                        <p className="text-zinc-800 font-[300] leading-[1.6]">
                            Tranos pallet rack safety accessories and design features help prevent damage, ensure usability, and improve overall warehouse safety. Keeping your workers, inventory, and equipment safe promotes productivity and reduces the costs of downtime. Contact our team for a custom warehouse safety solution that meets your facility and equipment needs.
                        </p>
                    </div>


                </div>
            </div>
        </main>
    )
}