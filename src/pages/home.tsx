import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";
import { ProductCard } from "../components/product-card";
import { PRODUCTS } from "../utils/products";
import { INDUSTRIES } from "../utils/industries";
import { IndustryCard } from "../components/IndustryCard";
import DummyImg from "../assets/images/dummy.jpg"
import axios from "axios";
import { TPartner } from "../types";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { useEffect, useState } from "react";
import { InewsAndInsights } from "../types";

export const Home = () => {
    const [news, setNews] = useState<InewsAndInsights | null>(null)
    const [heroText, setHeroText] = useState({
        lightTextOne: '',
        lightTextTwo: '',
        boldText: '',
        smallText: '',
    })
    const [heroImageOne, setHeroImageOne] = useState<string | ArrayBuffer | null>('')
    const [heroImageTwo, setHeroImageTwo] = useState<string | ArrayBuffer | null>('')
    const [heroImageThree, setHeroImageThree] = useState<string | ArrayBuffer | null>('')

    const heroImages = [heroImageOne, heroImageTwo, heroImageThree]

    const fetchNewsAndInsight = async () => {
        const response = await axios.get("https://tranos-api.onrender.com/api/v1/blog")

        const news = response.data.blogs[0]

        setNews(news)

    }

    // get hero text
    const getHeroText = async () => {
        const response = await axios.get(
            "https://tranos-api.onrender.com/api/v1/home/hero/66061b705d362abf2116355d"
        );
        const { lightTextOne, lightTextTwo, boldText, smallText } = response.data.heroText;

        setHeroText({
            lightTextOne,
            lightTextTwo,
            boldText,
            smallText
        });
    }

    const getHeroImageOne = async () => {
        const response = await axios.get("https://tranos-api.onrender.com/api/v1/hero-images/hero-image-one/66ad86e5fecf29e43d2df61e");
        setHeroImageOne(response.data.heroImageOne.image)


    };

    const getHeroImageTwo = async () => {
        const response = await axios.get("https://tranos-api.onrender.com/api/v1/hero-images/hero-image-two/66ad86ebfecf29e43d2df620");
        setHeroImageTwo(response.data.heroImageTwo.image)

    };

    const getHeroImageThree = async () => {
        const response = await axios.get("https://tranos-api.onrender.com/api/v1/hero-images/hero-image-three/66ad86f1fecf29e43d2df622");
        setHeroImageThree(response.data.heroImageThree.image)
    };

    // partners
    const [partners, setPartners] = useState<TPartner[] | null>(null);

    const getPartners = async () => {
        const response = await axios.get("https://tranos-api.onrender.com/api/v1/home/partner");
        setPartners(response.data.partners);
    };

    // why
    const [whyText, setWhyText] = useState('')
    const [whyVideo, setWhyVideo] = useState('')

    const getWhyText = async () => {
        const response = await axios.get("https://tranos-api.onrender.com/api/v1/home/why/6606630ab12adcb0cf9e0e97")

        setWhyText(response.data.why.why)

    }

    const getWhyVideo = async () => {
        const response = await axios.get("https://tranos-api.onrender.com/api/v1/home-video/6606e35f1729e5648128af93")

        setWhyVideo(response.data.video.video);

    }

    // our services
    const [ourServices, setOurServices] = useState({
        fabrication: '',
        installation: '',
        maintenance: '',
    })
    const getOurServices = async () => {
        const response = await axios.get("https://tranos-api.onrender.com/api/v1/home/services/66066177b12adcb0cf9e0e7e")
        const { fabrication, installation, maintenance } = response.data.servicesText;

        setOurServices({
            ...ourServices,
            fabrication,
            installation,
            maintenance
        })

    }

    useEffect(() => {
        fetchNewsAndInsight()
        getHeroText()
        getHeroImageOne()
        getHeroImageTwo()
        getHeroImageThree()
        getPartners()
        getWhyText()
        getWhyVideo()
        getOurServices()
    }, [])

    const settings = {
        dots: false,
        infinite: true,
        fade: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 10000,
        pauseOnHover: false,
        arrows: false,
    };

    const industrySettings = {
        dots: false,
        infinite: true,
        fade: false,
        speed: 1000,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 10000,
        pauseOnHover: false,
        arrows: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 4,
                    infinite: true,
                    dots: false,
                }
            },
            {
                breakpoint: 901,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: false,
                }
            },
            {
                breakpoint: 738,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                }
            },
            {
                breakpoint: 672,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                }
            },
            {
                breakpoint: 375,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },
        ]
    }

    const partnerSettings = {
        dots: false,
        infinite: true,
        fade: false,
        speed: 1000,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 10000,
        pauseOnHover: false,
        arrows: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 4,
                    infinite: true,
                    dots: false,
                }
            },
            {
                breakpoint: 901,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: false,
                }
            },
            {
                breakpoint: 738,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                }
            },
        ]
    }

    return (
        <main>
            <div className="h-[50px] xl:h-[70px]"></div>

            {/* hero */}
            <section className="w-full h-[300px] md:h-[70vh] bg-tranos-primary relative">
                <Slider {...settings}>
                    {heroImages.map((hero, i) => <div key={i} className="relative z-[3] slider__wrapper font-sans">
                        <div className={`absolute inset-0 bg-tranos-primary opacity-[0.7] z-[2]`}></div>

                        <div className="relative">
                            <img src={hero as string} alt="tranos, thinking further" className="absolute w-full h-full z-[1] object-cover" />

                            <div className="w-full h-[300px] md:h-[70vh] relative text-white flex flex-col justify-center z-[11]">
                                <div className="max-w-[1200px] w-[90%] mx-auto flex flex-col gap-[10px] md:gap-[30px]">
                                    <p className="font-[200] text-[30px] md:text-[40px] lg:text-[60px] leading-[1]">
                                        <span>{heroText.lightTextOne ? heroText.lightTextOne : 'We are building'}</span> <br />
                                        <span>{heroText.lightTextTwo ? heroText.lightTextTwo : 'a better future...'}</span> <br />
                                        <span className="font-[600] text-[35px] md:text-[40px] lg:text-[65px]">{heroText.boldText ? heroText.boldText : 'Thinking. Further.'}</span>
                                    </p>
                                    <p className="max-w-[550px] w-[100%]">
                                        <span className="text-[14px] md:text-[20px] leading-[1.2] font-[200]">{heroText.smallText ? heroText.smallText : 'TRANOS is the engineering and manufacturing leader adding value to lives through innovative solutions'}<Link to="/who-we-are" className="font-[500] text-[16px]">... Read more</Link></span>
                                    </p>

                                    <Link to="/contacts" className="bg-tranos-primary p-[10px_20px] w-[min-content] whitespace-nowrap capitalize">request for quote</Link>
                                </div>
                            </div>
                        </div>
                    </div>)}
                </Slider>
            </section>

            {/* products */}
            <section className="">
                <div className="max-w-[1100px] w-[90%] mx-auto py-[30px] md:py-[40px] lg:py-[60px] grid grid-grid-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-[270px_270px_270px_270px] gap-[1px]">
                    <div className="w-full h-[270px] md:h-full bg-tranos-primary p-[20px]">
                        <span className="text-[16px] md:text-[18px] capitalize text-white leading-[1] font-[200]">Our Products</span>
                    </div>
                    {PRODUCTS.map((product, i) => <ProductCard key={i} image={product.image} menu={product.menu} to={product.to} />)}

                </div>

            </section>

            {/* services */}
            <section className="bg-gray-100">
                <div className="max-w-[1100px] w-[90%] mx-auto py-[30px] md:py-[40px] lg:py-[60px]">
                    <span className="capitalize block text-center text-[18px] md:text-[20px] lg:text-[24px] text-tranos-primary font-[300] mb-[20px] md:mb-[30px] lg:mb-[40px]">our services</span>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[20px] md:gap-[30px] lg:gap-[50px]">
                        <div>
                            <span className="uppercase text-[14px] md:text-[16px] text-tranos-primary border-b border-tranos-primary block mb-[20px]">fabrication</span>

                            <p className="text-[14px] md:text-[16px] text-zinc-800 font-[300] leading-[1.8]">
                                {ourServices.fabrication}
                            </p>
                        </div>

                        <div>
                            <span className="uppercase text-[14px] md:text-[16px] text-tranos-primary border-b border-tranos-primary block mb-[20px]">installation & commissioning</span>

                            <p className="text-[14px] md:text-[16px] text-zinc-800 font-[300] leading-[1.8]">
                                {ourServices.installation}
                            </p>
                        </div>

                        <div>
                            <span className="uppercase text-[14px] md:text-[16px] text-tranos-primary border-b border-tranos-primary block mb-[20px]">maintenance</span>

                            <p className="text-[14px] md:text-[16px] text-zinc-800 font-[300] leading-[1.8]">
                                {ourServices.maintenance}
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* industries */}
            <section>
                <div className="max-w-[1100px] w-[90%] mx-auto py-[30px] md:py-[40px] lg:py-[60px] industries__slider">
                    <Slider {...industrySettings}>
                        {INDUSTRIES.map((industry, i) => <IndustryCard image={industry.image} name={industry.name} to={industry.to} key={i} />)}
                    </Slider>
                </div>
            </section>

            {/* why choose us */}
            <section className="bg-gray-100">
                <div className="max-w-[1100px] w-[90%] mx-auto py-[30px] md:py-[40px] lg:py-[60px] grid grid-cols-1 lg:grid-cols-2 gap-[30px] lg:gap-[100px]">
                    <div>
                        <span className="text-[18px] md:text-[20px] lg:text-[24px] text-tranos-primary font-[300] capitalize mb-[10px] block">why choose us</span>
                        <p className="text-[14px] md:text-[16px] text-zinc-800 font-[300] leading-[1.8]">
                            {whyText}
                        </p>
                    </div>

                    <div className="w-full h-[299px] bg-tranos-primary">
                        <video src={`https://tranos-api.onrender.com/${whyVideo}`} autoPlay loop muted playsInline className="w-full h-full object-cover" style={{ objectFit: "cover" }}></video>
                    </div>
                </div>
            </section>

            {/* partners */}
            <section className="bg-white">
                <div className="max-w-[1100px] w-[90%] mx-auto py-[30px] md:py-[40px] lg:py-[60px]">
                    <Slider {...partnerSettings}>
                        {partners?.map((partner, i) => <div key={i} className="w-[50px]">
                            <img src={`https://tranos-api.onrender.com/${partner.partner}`} className="w-[150px]" />
                        </div>)}
                    </Slider>
                </div>
            </section>

            {/* news and insights */}

            <section className="bg-gray-100">
                <div className="max-w-[1100px] w-[90%] mx-auto py-[30px] md:py-[40px] lg:py-[60px] grid grid-cols-1 lg:grid-cols-2 gap-[50px] items-center">
                    <div className="w-full h-[350px] bg-tranos-primary">
                        <img src={news?.blogImage ? news.blogImage : DummyImg} className="w-full h-full object" alt="tranos news and insights" />
                    </div>
                    {news ? <div className="flex flex-col gap-[20px] items-start">
                        <span className="capitalize text-[18px] text-zinc-800 font-[700]">{news.title}</span>
                        <p className="text-[16px] text-zinc-700">{news.subtitle}</p>
                        <Link to={`/news-and-insights/${news._id}`} className="p-[10px_20px] bg-tranos-primary text-white">Learn more</Link>
                    </div> : <div className="flex flex-col gap-[20px] items-start">
                        <span className="capitalize">new & insights</span>
                        <p className="text-[18px]">Coming soon</p>
                    </div>}
                </div>
            </section>

            {/* newsletter */}
            <section className="bg-[#111111]">
                <div className="max-w-[1100px] w-[90%] mx-auto py-[30px] md:py-[40px] lg:py-[60px] grid grid-cols-1 md:grid-cols-2 gap-[20px]">
                    <div className="flex items-center gap-[20px]">
                        <svg data-v-34fc8d10="" xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 24 24" className="w-[32px] md:w-[60px] h-[32px] md:h-[60px] fill-tranos-primary" viewBox="0 0 24 24" fill="#000000"><g data-v-34fc8d10=""><rect data-v-34fc8d10="" fill="none" height="24" width="24" x="0"></rect></g><g data-v-34fc8d10=""><path data-v-34fc8d10="" d="M22.47,5.2C22,4.96,21.51,4.76,21,4.59v12.03C19.86,16.21,18.69,16,17.5,16c-1.9,0-3.78,0.54-5.5,1.58V5.48 C10.38,4.55,8.51,4,6.5,4C4.71,4,3.02,4.44,1.53,5.2C1.2,5.36,1,5.71,1,6.08v12.08c0,0.58,0.47,0.99,1,0.99 c0.16,0,0.32-0.04,0.48-0.12C3.69,18.4,5.05,18,6.5,18c2.07,0,3.98,0.82,5.5,2c1.52-1.18,3.43-2,5.5-2c1.45,0,2.81,0.4,4.02,1.04 c0.16,0.08,0.32,0.12,0.48,0.12c0.52,0,1-0.41,1-0.99V6.08C23,5.71,22.8,5.36,22.47,5.2z M10,16.62C8.86,16.21,7.69,16,6.5,16 c-1.19,0-2.36,0.21-3.5,0.62V6.71C4.11,6.24,5.28,6,6.5,6C7.7,6,8.89,6.25,10,6.72V16.62z M19,0.5l-5,5V15l5-4.5V0.5z"></path></g></svg>

                        <span className="text-[14px] md:text-[16px] text-white font-[200]">Newsletter - get updates with latest topics</span>
                    </div>

                    <div className="flex items-center gap-[10px]">
                        <input type="text" placeholder="Your e-mail address" className="p-[10px] bg-transparent border border-gray-300 flex-[3] placeholder:font-[200]" />
                        <button className="flex-[1] p-[10px_20px] bg-tranos-primary text-white font-[200] text-[14px] capitalize">subscribe</button>
                    </div>
                </div>
            </section>
        </main>
    )
}
