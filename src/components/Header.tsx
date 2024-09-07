import { Link } from "react-router-dom"
import TranosLogo from "../assets/images/TRANOS-LOGO.svg"
import { MENU } from "../utils/menu"

type THeader = {
    isMobileMenuOut: boolean;
    openMobileMenu: () => void;
    closeMobileMenu: () => void;
}

export const Header = ({ isMobileMenuOut, openMobileMenu, closeMobileMenu }: THeader) => {
    return (
        <header className="w-full fixed shadow bg-white z-[10]">
            <div className="max-w-[1400px] w-[90%] mx-auto h-[50px] lg:h-[70px] flex justify-between items-center">
                <Link to="/" onClick={closeMobileMenu}>
                    <img src={TranosLogo} alt="tranos" className="w-[100px] xl:w-[200px]" />
                </Link>

                {/* navigations/menu */}
                <nav className="h-full hidden xl:block">
                    <ul className="flex items-center gap-[20px] h-full relative">
                        {MENU.map((menu, i) => <li key={i} className="flex items-center gap-[2px] group cursor-pointer h-full text-[12px] uppercase text-tranos-primary">
                            <Link to={menu.to}>{menu.menu}</Link>
                            {menu.submenu && <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5 text-tranos-primary">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                            </svg>}
                            {menu.submenu && <ul className="absolute top-[100%] hidden group-hover:block bg-tranos-primary pt-[2px] text-[14px]">
                                {menu.submenu.map((submenu, i) => <li key={i} className="text-white capitalize p-[15px] hover:bg-white hover:text-tranos-primary"><Link to={submenu.to}>{submenu.menu}</Link></li>)}
                            </ul>}
                        </li>)}
                    </ul>
                </nav>

                <div className="flex items-center gap-[5px]">
                    {/* search */}
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 text-tranos-primary">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                    </svg>

                    <div className="flex items-center xl:hidden">

                        {isMobileMenuOut ?
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 text-tranos-primary" onClick={closeMobileMenu}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                            </svg> :
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 text-tranos-primary" onClick={openMobileMenu}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                            </svg>}

                    </div>
                </div>



            </div>
        </header>
    )
}
