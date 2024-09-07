import { Strip } from "../../components/Strip"
import Banner from "../../assets/images/about-banner.jpg"
import { NameStrip } from "../../components/NameStrip"
import { useLocation } from "react-router-dom"

export const SingleLeader = () => {
    const location = useLocation()
    const { imgLarge, name, bio } = location.state || {}

    return (
        <main>
            <div className="h-[50px] lg:h-[70px]"></div>
            <Strip title="Leadership" img={Banner} />
            <NameStrip name={name} />
            <section>
                <div className="max-w-[900px] w-[90%] mx-auto py-[30px] md:py-[40px] lg:py-[60px] grid grid-cols-1 md:grid-cols-[250px_1fr] gap-[30px] md:gap-[40px]">
                    {imgLarge ? <img src={imgLarge} alt="tranos leadership" /> : <div className="w-full h-[320px] bg-zinc-100"></div>}
                    <div>
                        <span className="font-[500] text-[18px] md:text-[20px] block mb-[10px] capitalize">{name}</span>
                        <p className="text-[14px] md:text-[16px] font-[300] text-zinc-800 leading-[1.6]" dangerouslySetInnerHTML={{ __html: bio }} />
                    </div>
                </div>
            </section>
        </main>
    )
}