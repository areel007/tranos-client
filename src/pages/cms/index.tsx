import { Link, useLocation, Outlet } from "react-router-dom"
import TranosLogo from "../../assets/images/logo-1.png"
import { useAuth } from "../../contexts/authContext"

const MENU = [
    {
        name: "Home",
        to: "/cms/",
    },
    {
        name: "About",
        to: "/cms/about",
    },
    {
        name: "Services",
        to: "/cms/services",
    },
    {
        name: "News & Insights",
        to: "/cms/news-and-insights",
    },
    {
        name: "Case Studies",
        to: "/cms/case-studies",
    },
    {
        name: "Products",
        to: "/cms/products",
    },
    {
        name: "Settings",
        to: "/cms/settings",
    },
]

export const CMS = () => {
    const { pathname } = useLocation()
    const { logout } = useAuth()

    const handleSignOut = () => {
        logout()
    }

    return <main className="w-screen h-screen">
        <div className="p-[10px] h-[70px] flex items-center justify-between shadow fixed z-[1] w-full bg-white">
            <Link to="/">
                <img src={TranosLogo} alt="tranos thinking further" className="w-[200px]" />
            </Link>

            <div className="flex gap-[10px] items-center">
                <div className="w-[35px] h-[35px] rounded-full bg-tranos-primary flex justify-center items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="w-[20px] h-[20px] fill-white"><path d="M304 128a80 80 0 1 0 -160 0 80 80 0 1 0 160 0zM96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM49.3 464l349.5 0c-8.9-63.3-63.3-112-129-112l-91.4 0c-65.7 0-120.1 48.7-129 112zM0 482.3C0 383.8 79.8 304 178.3 304l91.4 0C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7L29.7 512C13.3 512 0 498.7 0 482.3z" /></svg>
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-[20px] h-[20px] fill-tranos-primary" onClick={handleSignOut}><path d="M377.9 105.9L500.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L377.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1-128 0c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM160 96L96 96c-17.7 0-32 14.3-32 32l0 256c0 17.7 14.3 32 32 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-64 0c-53 0-96-43-96-96L0 128C0 75 43 32 96 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32z" /></svg>
            </div>
        </div>
        <div className="h-[70px]"></div>
        <div className="grid grid-cols-[300px_1fr]">
            <div className="w-[300px] min-h-screen bg-tranos-primary p-[10px] flex flex-col gap-[5px] text-zinc-800 fixed">
                {MENU.map((menu, i) => <Link to={menu.to} className={`shadow-md w-full block p-[10px] ${pathname === menu.to ? 'bg-white text-tranos-primary' : 'text-white'}`} key={i}>{menu.name}</Link>)}
            </div>

            <Outlet />
        </div>
    </main>
}