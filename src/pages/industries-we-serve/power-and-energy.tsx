import { HeaderGap } from "../../components/HeaderGap"
import { IndustriesWeServeStrip } from "../../components/IndustriesWeServeStrip"
import { IWServeList } from "../../components/IWServeList"
import { IWServeTabStrip } from "../../components/IWServeTabStrip"
import { IWServeTitle } from "../../components/IWServeTitle"
import { INDUSTRIESWESERVE } from "../../utils/industries-we-serve"

import PowerAndEnergyImg from "../../assets/images/industry-we-serve-power.jpg"

export const PowerAndEnergy = () => {

    return <main>
        <HeaderGap />
        <IndustriesWeServeStrip text="industries we serve" background="#172673" />
        <IWServeTabStrip />

        <div className="py-[30px] md:py-[40px] lg:py-[60px] max-w-[1100px] w-[90%] mx-auto">
            <IWServeTitle text="Power & Energy" />
            <p className="text-[13px] text-zinc-800">
                Renewable Energy Companies &bull; Meter Manufacturers &bull; Distribution Companies &bull; Generator Manufacturers
            </p>

            <div className="my-[20px] md:my-[40px]">
                <img src={PowerAndEnergyImg} alt="tranos nigeria" />
            </div>

            <div className="mt-[30px]">
                <IWServeList industries={INDUSTRIESWESERVE} />
            </div>
        </div>
    </main>
}