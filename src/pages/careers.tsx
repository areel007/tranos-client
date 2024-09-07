import { HeaderGap } from "../components/HeaderGap"
import { Strip } from "../components/Strip"
import CareerBanner from "../assets/images/CAREER.jpg"
import CareersImg from "../assets/images/career2.jpg"

export const Careers = () => {
    return <main>
        <HeaderGap />
        <Strip img={CareerBanner} title="Careers" />

        <div className="py-[30px md:py-[40px] lg:py-[60px] max-w-[1100px] w-[90%] mx-auto">
            <img src={CareersImg} alt="tranos careers" className="w-full block mb-[40px] md:mb-[60px]" />

            <p className="text-[200] text-zinc-800 leading-[1.8] mb-[20px] md:mb-[40px] max-w-[900px] w-full">
                <span className="leading-[1.6] block mb-[10px] md:mb-[20px] text-[20px] md:text-[22px] lg:text-[24px] font-[300] text-zinc-800">
                    We welcome passionate people looking for challenging and fulfilling career opportunities in Engineering and Manufacturing.
                </span>

                At Tranos, we provide an environment filled with opportunities for you to express yourself through smart work, creativity and innovation, explore and challenge yourself to achieve even higher competence and a personal sense of dignity and satisfaction over your achievement. Join our brilliant team!
            </p>

            <div>
                <span className="text-tranos-primary text-[20px] md:text-[26px] lg:text-[32px] block mb-[20px]">Get in touch with us</span>

                <form className="max-w-[700px] w-full grid grid-cols-1 md:grid-cols-2 gap-[20px_20px] md:gap-[20px_40px]">
                    <div className="flex flex-col gap-[5px]">
                        <label className="text-[14px] text-zinc-700">Name</label>
                        <input type="text" className="p-[10px] shadow-md border border-zinc-300" />
                    </div>

                    <div className="flex flex-col gap-[5px]">
                        <label className="text-[14px] text-zinc-700">Age</label>
                        <input type="text" className="p-[10px] shadow-md border border-zinc-300" />
                    </div>

                    <div className="flex flex-col gap-[5px]">
                        <label className="text-[14px] text-zinc-700">Email</label>
                        <input type="email" className="p-[10px] shadow-md border border-zinc-300" />
                    </div>

                    <div className="flex flex-col gap-[5px]">
                        <label className="text-[14px] text-zinc-700">Phone Number</label>
                        <input type="text" className="p-[10px] shadow-md border border-zinc-300" />
                    </div>

                    <div className="flex flex-col gap-[5px]">
                        <label className="text-[14px] text-zinc-700">Years of Experience</label>
                        <input type="text" className="p-[10px] shadow-md border border-zinc-300" />
                    </div>

                    <div className="flex flex-col gap-[5px]">
                        <label className="text-[14px] text-zinc-700">Designation</label>
                        <input type="text" className="p-[10px] shadow-md border border-zinc-300" />
                    </div>

                    <div className="flex flex-col gap-[5px]">
                        <label className="text-[14px] text-zinc-700">URL to your document</label>
                        <input type="text" className="p-[10px] shadow-md border border-zinc-300" />
                    </div>

                    <div className="flex flex-col gap-[5px]">
                        <label className="invisible">send</label>
                        <button className="p-[10px] bg-tranos-primary text-white font-[300]">Send</button>
                    </div>
                </form>
            </div>
        </div>
    </main>
}