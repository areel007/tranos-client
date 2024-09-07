import { ProductBanner } from "../../../components/ProductBanner"
import Banner from "../../../assets/images/enclosures-main-banner-2.jpg"
import { ProductTitle } from "../../../components/ProductTitle"
import "./Enclosures.css"
import { EnclosuresCard } from "../../../components/EnclosuresCard"
import { ENCLOSURES } from "../../../utils/products"

export const Enclosures = () => {
    return (
        <main>
            <div className="h-[50px] lg:h-[70px]"></div>
            <ProductBanner img={Banner} />

            <div className="py-[30px] md:py-[40px] lg:py-[60px]">
                <div className="max-w-[900px] w-[90%] mx-auto">
                    <ProductTitle title="Enclosures" customStyles="border-blue-400 text-[18px] md:text-[22px] lg:text-[24px]" />

                    <p className="text-[18px] md:text-[20px] lg:text-[22px] leading-[1.8] font-[300] text-zinc-700">
                        Tranos designs and manufactures a broad range of enclosures for electrical, mechanical and information technology or data applications. Branded ‘Encase’, our enclosures are designed and manufactured according to various standards. This depends also on their applications. Some of these standards include IEC 60529 , IEC 60529, IEC 62208, IEC 62271- 202, NEMA 250.
                    </p>
                </div>

                <div className="max-w-[1100px] w-[90%] mx-auto mt-[40px] enclosures__grid">
                    {ENCLOSURES.map((item, i) => <EnclosuresCard key={i} img={item.img} title={item.name} to={item.to} />)}
                </div>
            </div>
        </main>
    )
}