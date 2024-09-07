import { ProductBanner } from "../../components/ProductBanner"
import Banner from "../../assets/images/power-protection-banner-image-replacement.jpg"
import { ProductTitle } from "../../components/ProductTitle"
import { useState } from "react"
import { PowerProtectionProductCard } from "../../components/power-protection-product-card"
import { LOWVOLTAGE, MEDIUMVOLTAGE } from "../../utils/products"

export const PowerProtection = () => {
    const [isMore, setIsMore] = useState(false)

    return (
        <main>
            <div className="h-[50px] lg:h-[70px]"></div>
            <ProductBanner img={Banner} />
            <div className="max-w-[1100px] w-[90%] mx-auto py-[30px] md:py-[40px] lg:py-[60px]">
                <div className="max-w-[900px] w-full mb-[40px]">
                    <ProductTitle customStyles="text-tranos-primary border-blue-400 text-[18px] md:text-[20px]" title="power protection & distribution" />
                    <p className="text-[18px] md:text-[22px] font-[200] text-zinc-700 mb-[20px]">
                        Tranos is Nigeria’s foremost manufacturer of high-quality low voltage electrical power distribution and control systems for industrial, commercial, infrastructural, and residential applications. {!isMore && <span className="text-tranos-primary cursor-pointer font-[500] text-[16px] hover:underline" onClick={() => setIsMore(true)}>...read more</span>}
                    </p>
                    {isMore && <p className="text-zinc-700 font-[300] text-[14px] md:text-[16px] leading-[1.8]">
                        We are specialists in the design, manufacturing, and assembly of electrical power distribution, protection and control panels. Our capabilities cover a broad range of industries and applications for low voltage panels are from 63A to 6,300A. <br /><br />

                        Our portfolio of electrical power distribution, protection and control products are produced using high-quality materials and some of the best available components. Our Tranos Elite range of products is designed to provide safety and peace of mind to our customers at very affordable prices. <span className="text-tranos-primary cursor-pointer font-[500] text-[16px] hover:underline" onClick={() => setIsMore(false)}>read less</span>
                    </p>}
                </div>

                <div>
                    <div className="mb-[40px]">
                        <ProductTitle customStyles="border-blue-400 text-tranos-primary" title="low voltage power distribution panels & switchgears" />

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-[20px]">
                            {LOWVOLTAGE.map((item, i) => <PowerProtectionProductCard key={i} img={item.img} title={item.title} to={item.to} />)}
                        </div>
                    </div>

                    <div>
                        <ProductTitle customStyles="border-blue-400 text-tranos-primary" title="medium voltage power switchgears" />
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-[20px]">
                            {MEDIUMVOLTAGE.map((item, i) => <PowerProtectionProductCard key={i} img={item.img} title={item.title} to={item.to} />)}
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}