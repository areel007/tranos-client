import { Strip } from "../../components/Strip"
import StripImg from "../../assets/images/about-banner.jpg"
import { Management } from "../../utils/leadership"
import { LeadershipCard } from "../../components/LeadershipCard"
import "../../assets/custom-css/leadership.css"

export const Leadership = () => {
    return (
        <main>
            <div className="h-[50px] lg:h-[70px]"></div>
            <Strip title="Leadership" img={StripImg} />
            <div className="max-w-[1000px] w-[90%] mx-auto py-[30px] md:py-[40px] lg:py-[60px]">
                <span className="block text-[16px] md:text-[20px] mb-[40px] md:mb-[60px]">Executive Management Team</span>

                <div className="leadership__grid">
                    {Management.map((leader, i) => <LeadershipCard key={i} to={`/leadership/${leader.name}`} bio={leader.bio} imgLarge={leader.imgLarge} name={leader.name} position={leader.position} img={leader.img} />)}
                </div>
            </div>
        </main>
    )
}