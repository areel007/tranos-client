import { ProductBanner } from "../../../components/ProductBanner"
import Banner from "../../../assets/images/cable-mgt-main-banner.jpg"
import { CableManagementFlippableCard } from "../../../components/CableManagementFlippableCard"
import { CABLEMANAGEMENT } from "../../../utils/products"
import "./CableManagement.css"

export const CableManagement = () => {
    return (
        <main>
            <div className="h-[50px] lg:h-[70px]"></div>
            <ProductBanner img={Banner} />

            <div className="py-[30px] md:py-[40px] lg:py-[60px] max-w-[1100px] w-[90%] mx-auto cable__management__grid">

                {CABLEMANAGEMENT.map((item, i) => <CableManagementFlippableCard key={i} frontImg={item.frontImage} backImg={item.backImage} to={item.to} />)}
            </div>
        </main>
    )
}