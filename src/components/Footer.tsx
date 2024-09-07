import { Link } from "react-router-dom"
import TranosLogo from "../assets/images/TRANOS-LOGO-WHITE.svg"
import { useState, useEffect } from "react"
import axios from "axios"

export const Footer = () => {
    const [footer, setFooter] = useState({
        about: "",
        phone: "",
        email: "",
    })
    const getFooter = async () => {
        const response = await axios.get("https://tranos-api.onrender.com/api/v1/footer/664275dea3948f5b352982a0");
        const { about, phone, email } = response.data.footerText
        setFooter({
            about,
            phone,
            email
        })

    }

    console.log(footer);


    useEffect(() => {
        getFooter()
    }, []);
    return (
        <footer className="bg-tranos-primary">
            <div className="max-w-[1400px] w-[90%] mx-auto py-[30px] md:py-[40px] lg:py-[60px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[350px_1fr_1fr] gap-[30px] md:gap-[100px]">
                <div className="flex flex-col gap-[20px]">
                    <img src={TranosLogo} alt="tranos nigeria" className="w-[100px] md:w-[200px]" />
                    <p className="text-[14px] text-white font-[200]">
                        {footer.about ? footer.about : "TRANOS is the engineering and manufacturing leader adding value to lives through innovative solutions."}
                    </p>
                </div>

                <div className="flex gap-[40px] text-[14px]">
                    <div className="text-white font-[200]">
                        <span className="text-[16px] font-[400]">Contacts</span>
                        <p>
                            <span className="capitalize">head office</span> <br />
                            22A Guinness Road, <br />
                            Off ACME Road, <br />
                            Ogba, Ikeja, <br />
                            Lagos - Nigeria <br /><br />
                            T: {footer.phone} <br />
                            E: {footer.email}
                        </p>
                    </div>

                    <div className="text-white font-[200]">
                        <span className="text-[16px] font-[400]">Factory 2</span>
                        <p>
                            Plot 8A, Block C, <br />
                            Ogba Industrial Estate, <br />
                            ACME Road, <br />
                            Lagos <br /><br />
                        </p>
                    </div>
                </div>

                <div className="flex gap-[40px] justify-between">
                    <ul className="text-[14px] text-white font-[200]">
                        <li>
                            <Link to="/who-we-are" className="hover:underline">About</Link>
                        </li>
                        <li>
                            <Link to="/leadership" className="hover:underline">Products</Link>
                        </li>
                        <li>
                            <Link to="/industries-we-serve/power-and-energy" className="hover:underline">Industries We Serve</Link>
                        </li>
                        <li>
                            <Link to="/services" className="hover:underline">Services</Link>
                        </li>
                        <li>
                            <Link to="/case-studies" className="hover:underline">Case Studies</Link>
                        </li>
                        <li>
                            <Link to="/news-and-insights" className="hover:underline">News & Insights</Link>
                        </li>
                    </ul>

                    <div className="flex gap-[20px]">
                        <a href="https://facebook.com/tranosng" target="_blank">
                            <svg data-v-cc8b6d02="" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" className="w-[20px] h-[20px] fill-white"><path data-v-cc8b6d02="" d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"></path></svg>
                        </a>

                        <a href="https://x.com/tranosng" target="_blank">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-[20px] h-[20px] fill-white"><path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z" /></svg>
                        </a>

                        <a href="https://instagram.com/tranosng" target="_blank">
                            <svg data-v-cc8b6d02="" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="w-[20px] h-[20px] fill-white"><path data-v-cc8b6d02="" d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"></path></svg>
                        </a>

                        <a href="https://linkedin.com/tranosng" target="_blank">
                            <svg data-v-cc8b6d02="" width="31" height="30" viewBox="0 0 31 30" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-[20px] h-[20px] fill-white"><path data-v-cc8b6d02="" d="M0.687006 29.6507V8.69809H6.49808V29.6507H0.687006ZM3.60618 5.99717C2.74225 5.99717 2.00109 5.71071 1.3827 5.13778C0.773399 4.55577 0.46875 3.86007 0.46875 3.05071C0.46875 2.25043 0.773399 1.56384 1.3827 0.990916C2.00109 0.408898 2.74225 0.117889 3.60618 0.117889C4.47011 0.117889 5.20673 0.408898 5.81603 0.990916C6.43442 1.56384 6.74362 2.25043 6.74362 3.05071C6.74362 3.86007 6.43442 4.55577 5.81603 5.13778C5.20673 5.71071 4.47011 5.99717 3.60618 5.99717Z" fill="white"></path> <path data-v-cc8b6d02="" d="M16.9641 17.5375V29.6507H11.1531V8.69809H16.6913V12.3948H16.9369C17.4007 11.1762 18.1782 10.2122 19.2695 9.50291C20.3608 8.78448 21.6839 8.42527 23.239 8.42527C24.6941 8.42527 25.9627 8.74356 27.0449 9.38014C28.127 10.0167 28.9682 10.9261 29.5684 12.1083C30.1686 13.2815 30.4687 14.6819 30.4687 16.3098V29.6507H24.6577V17.3465C24.6668 16.0642 24.3394 15.0639 23.6755 14.3455C23.0117 13.6179 22.0977 13.2542 20.9337 13.2542C20.1516 13.2542 19.4605 13.4224 18.8602 13.7589C18.2691 14.0954 17.8053 14.5865 17.4689 15.2321C17.1415 15.8687 16.9732 16.6372 16.9641 17.5375Z" fill="white"></path></svg>
                        </a>
                    </div>

                </div>

                <span className="text-white text-[14px] font-[200]">&copy; 2024 Tranos. All rights reserved.</span>
            </div>
        </footer>
    )
}