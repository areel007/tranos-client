import React from "react"
import { MENU } from "../utils/menu"
import { Link } from "react-router-dom"

type TSubmenu = {
    menu: string
    to: string
}

type TMobileMenu = {
    isMobileMenuOut: boolean;
    chooseStep: (e: React.MouseEvent<HTMLSpanElement, MouseEvent>, submenu: TSubmenu[] | null) => void;
    step: number;
    submenu: TSubmenu[] | null;
    closeMobileMenu: () => void
}

export const MobileMenu = ({ isMobileMenuOut, closeMobileMenu, step, chooseStep, submenu }: TMobileMenu) => {


    return isMobileMenuOut && <div className="fixed inset-0 z-[9]">
        <div className="absolute inset-0 bg-tranos-primary opacity-[.7]" onClick={closeMobileMenu}></div>
        <div className="h-[50px]"></div>
        {step === 1 ? <ul className="w-full bg-tranos-primary p-[20px] relative z-[8] text-white uppercase text-[12px] flex flex-col gap-[5px]">
            {MENU.map((menu, i) => <li key={i}>
                {menu.submenu ? <span onClick={(e) => chooseStep(e, menu.submenu)} className="flex items-center">
                    {menu.menu}
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4 text-white">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                    </svg>
                </span> : <a href={menu.to}>{menu.menu}</a>}
            </li>)}
        </ul> : <ul className="w-full bg-tranos-primary p-[20px] relative z-[8] text-white uppercase text-[12px] flex flex-col gap-[5px]">
            {submenu?.map((menu, i) => <li key={i} onClick={closeMobileMenu}>
                <Link to={menu.to}>{menu.menu}</Link>
            </li>)}
        </ul>}
    </div>
}