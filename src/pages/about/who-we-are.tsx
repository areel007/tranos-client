import StripImage from "../../assets/images/about-banner.jpg"
import { Strip } from "../../components/Strip";
import { useEffect, useState } from "react";
import axios from "axios";


export const WhoWeAre = () => {

    const [bannerImg, setBannerImg] = useState<string | ArrayBuffer | null>('')
    const [values, setValues] = useState({
        ourValues: '',
        canDo: '',
        proactive: '',
        surpassing: '',
        continuous: '',
        responsibility: '',
    })
    const [visionMission, setVisionMission] = useState({
        vision: '',
        mission: '',
    })

    const fetchBannerImg = async () => {
        const response = await axios.get("https://tranos-api.onrender.com/api/v1/about/banner/66b29f74b604222828b438be")

        setBannerImg(response.data.banner.banner)



    }

    const fetchValues = async () => {
        const response = await axios.get("https://tranos-api.onrender.com/api/v1/about/values/660713c095fbba010a3c5995")
        const { ourValues, canDo, proactive, surpassing, continuous, responsibility } = response.data.values
        setValues({
            ...values,
            ourValues,
            canDo,
            proactive,
            surpassing,
            continuous,
            responsibility
        })

    }

    const fetchVisionMission = async () => {
        const response = await axios.get("https://tranos-api.onrender.com/api/v1/about/vision-mission/6607150395fbba010a3c59a5")

        const { vision, mission } = response.data.visionMission


        setVisionMission({
            ...visionMission,
            vision,
            mission,
        })

    }

    useEffect(() => {
        fetchBannerImg()
        fetchValues()
        fetchVisionMission()
    }, [])

    return (
        <main>
            <div className="h-[50px] lg:h-[70px]"></div>
            <Strip title="Who we are" img={StripImage} />
            <div className="py-[30px] md:py-[40px] lg:py-[60px] max-w-[1100px] w-[90%] mx-auto">
                <img src={bannerImg as string} alt="tranos nigeria" />

                <div className="my-[30px] md:my-[60px] max-w-[900px] w-[100%]">
                    <span className="uppercase text-[14px] md:text-[18px] text-tranos-primary block mb-[10px]">who we are</span>
                    <p className="text-[14px] md:text-[16px] font-[200]">
                        <span className="text-[18px] md:text-[22px]">
                            Tranos is the engineering and manufacturing leader adding value to lives through innovative solutions.
                        </span>
                        <br /><br />
                        <span>
                            We are an internationally recognized and reputable brand specialising in engineering, manufacturing and the provision of technical solutions.
                        </span>
                        <br /><br />
                        <span>
                            By working closely with customers and leveraging on knowledge and technology, we have developed products and solutions for various customers in different industries.
                        </span>
                        <br /><br />
                        <span>
                            At Tranos, quality and safety are paramount. To ensure consistent safety and quality in our operations, we have obtained certifications for quality (ISO 9001:2015) and safety (ISO 45001:2018).
                        </span>
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2">
                    <div className="p-[30px] md:p-[50px] bg-[#f5efd7]">
                        <div className="flex items-center gap-[10px] mb-[10px]">
                            <span className="uppercase text-[18px]">our vision</span>
                            <svg data-v-68c46367="" id="Capa_1" enableBackground="new 0 0 512.032 512.032" viewBox="0 0 512.032 512.032" xmlns="http://www.w3.org/2000/svg" className="w-[30px] h-[30px]"><g data-v-68c46367=""><path data-v-68c46367="" d="m428.702 7.78 7.759 28.957-320.556 85.41 7.77 28.998-57.955 15.53 7.765 28.978-28.978 7.765-15.529-57.956-28.978 7.765 38.823 144.889 28.978-7.765-15.529-57.956 28.978-7.765 7.765 28.978 57.956-15.529 7.749 28.919 63.964-16.861c4.04 5.982 9.48 10.945 15.845 14.416l-107.834 217.463h-35.695v30h54.305l95.695-192.985v162.985h-30v30h90v-30h-30v-162.985l95.695 192.985h54.305v-30h-35.695l-107.833-217.463c13.129-7.159 22.307-20.67 23.404-36.374l174.409-46.547 7.769 28.992 28.978-7.765-54.352-202.843zm-318.475 209.086-7.765-28.978 28.978-7.765 7.765 28.978zm42.432-73.464 233.59-62.239 23.302 86.963-116.678 31.139c-8.144-11.627-21.631-19.25-36.872-19.25-23.489 0-42.821 18.094-44.818 41.074l-35.219 9.284zm103.341 96.614c-8.271 0-15-6.729-15-15s6.729-15 15-15 15 6.729 15 15-6.729 15-15 15zm182.535-79.625-23.298-86.951 28.989-7.724 23.295 86.939z"></path></g></svg>
                        </div>

                        <p className="text-[18px] md:text-[24px] font-[200]">
                            {visionMission.vision}
                        </p>
                    </div>

                    <div className="p-[30px] md:p-[50px] bg-tranos-primary text-white font-[200]">
                        <div className="flex items-center gap-[10px] mb-[10px]">
                            <span className="uppercase text-[18px]">our mission</span>
                            <svg data-v-68c46367="" viewBox="0 0 512 512.00069" fill="white" xmlns="http://www.w3.org/2000/svg" className="w-[30px] h-[30px] fill-white"><path data-v-68c46367="" d="m256.855469 178.625c7.046875 0 12.753906-5.710938 12.753906-12.753906 0-7.042969-5.707031-12.753906-12.753906-12.753906-56.347657 0-102.027344 45.679687-102.027344 102.03125 0 56.347656 45.679687 102.027343 102.027344 102.027343 56.351562 0 102.03125-45.679687 102.03125-102.027343 0-7.046876-5.710938-12.753907-12.753907-12.753907-7.042968 0-12.753906 5.707031-12.753906 12.753907 0 42.261718-34.257812 76.523437-76.523437 76.523437-42.261719 0-76.523438-34.261719-76.523438-76.523437 0-42.265626 34.261719-76.523438 76.523438-76.523438zm0 0"></path> <path data-v-68c46367="" d="m500.199219 179.394531c-2.214844-6.691406-9.433594-10.320312-16.128907-8.105469-6.539062 2.164063-10.179687 9.125-8.230468 15.730469 38.140625 121.457031-29.398438 250.835938-150.855469 288.976563-121.453125 38.140625-250.832031-29.398438-288.972656-150.855469-38.144531-121.457031 29.398437-250.835937 150.851562-288.976563 44.960938-14.117187 93.164063-14.117187 138.121094 0 6.75 2.035157 13.871094-1.785156 15.90625-8.535156 2.003906-6.648437-1.671875-13.675781-8.277344-15.824218-134.863281-42.3125-278.496093 32.714843-320.808593 167.582031-42.3125 134.863281 32.71875 278.496093 167.582031 320.808593 134.867187 42.3125 278.496093-32.714843 320.808593-167.582031 15.648438-49.875 15.648438-103.34375.003907-153.21875zm0 0"></path> <path data-v-68c46367="" d="m281.144531 91.117188c.066407-7.261719-5.511719-13.332032-12.753906-13.875-3.808594-.324219-7.621094-.648438-11.53125-.648438-98.613281 0-178.554687 79.941406-178.554687 178.554688 0 98.609374 79.941406 178.550781 178.554687 178.550781 98.609375 0 178.550781-79.941407 178.550781-178.550781 0-4.613282-.28125-9.222657-.847656-13.800782-1.019531-7-7.519531-11.847656-14.519531-10.828125-7 1.015625-11.847657 7.519531-10.832031 14.519531.039062.265626.085937.527344.140624.792969.277344 3.089844.550782 6.152344.550782 9.308594.003906 84.527344-68.515625 153.046875-153.039063 153.054687-84.527343.003907-153.046875-68.519531-153.050781-153.042968-.003906-84.523438 68.511719-153.046875 153.039062-153.050782h.003907c3.164062 0 6.230469.273438 9.3125.546876l2.390625.199218c6.664062.285156 12.296875-4.886718 12.578125-11.550781.003906-.0625.003906-.121094.007812-.179687zm0 0"></path> <path data-v-68c46367="" d="m333.378906 114.855469v45.734375l-85.539062 85.539062c-5.066406 4.894532-5.207032 12.96875-.3125 18.035156 4.894531 5.066407 12.96875 5.207032 18.035156.3125.105469-.101562.210938-.207031.3125-.3125l85.539062-85.539062h45.734376c3.382812 0 6.625-1.34375 9.019531-3.738281l76.519531-76.523438c4.980469-4.980469 4.980469-13.054687 0-18.035156-2.390625-2.390625-5.632812-3.734375-9.015625-3.734375h-38.261719v-38.261719c0-7.042969-5.710937-12.753906-12.757812-12.75-3.378906 0-6.621094 1.34375-9.011719 3.734375l-76.523437 76.523438c-2.394532 2.390625-3.738282 5.632812-3.738282 9.015625zm25.507813 5.28125 51.015625-51.015625v20.226562c0 7.042969 5.710937 12.753906 12.753906 12.753906h20.226562l-51.015624 51.015626h-32.980469zm0 0"></path></svg>
                        </div>

                        <p className="text-[14px] md:text-[18px] font-[200]">
                            {visionMission.mission}
                        </p>
                    </div>
                </div>

                <div className="py-[30px] md:py-[40px] lg:py-[60px]">
                    <div className="flex items-center gap-[10px] mb-[10px]">
                        <span className="uppercase text-[14px] md:text-[18px] text-tranos-primary">our values</span>
                        <svg data-v-68c46367="" id="Capa_1" enableBackground="new 0 0 512 512" fill="#172673" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" className="w-[30px] h-[30px] fill-tranos-primary"><g data-v-68c46367=""><path data-v-68c46367="" d="m82.886 356.115c-4.031 56.002 11.003 100.74 45.614 120.722 40.101 23.153 89.277 4.999 127.45-20.981 38.007 25.799 87.638 44.025 127.55 20.981 39.994-23.09 48.957-74.542 45.566-120.7 41.963-20.029 82.934-53.614 82.934-100.136 0-46.509-40.95-80.097-82.934-100.137 3.397-46.224-5.605-97.628-45.566-120.699-34.654-20.009-80.995-10.609-127.543 20.986-38.43-26.163-87.493-44.058-127.457-20.986-34.611 19.983-49.645 64.72-45.614 120.722-42.074 20.095-82.886 53.685-82.886 100.114 0 46.415 40.789 80.008 82.886 100.114zm56.201-167.614c-5.194 8.997-10.025 18.008-14.512 27-4.1-13.918-7.222-27.603-9.296-40.867 12.523-4.785 25.911-8.885 39.975-12.261-5.558 8.4-10.96 17.109-16.167 26.128zm25.98 15c10.02-17.355 20.922-33.717 32.451-48.826 18.855-2.42 38.466-3.674 58.482-3.674s39.627 1.254 58.482 3.674c11.529 15.109 22.431 31.471 32.451 48.826 10.017 17.349 18.734 34.966 26.052 52.5-7.319 17.534-16.036 35.15-26.052 52.5-10.02 17.354-20.922 33.717-32.451 48.826-18.855 2.42-38.466 3.674-58.482 3.674s-39.627-1.254-58.482-3.674c-11.529-15.109-22.431-31.471-32.451-48.826-10.017-17.35-18.734-34.966-26.053-52.5 7.319-17.534 16.037-35.15 26.053-52.5zm90.933-109.966c10.415 8.409 20.67 17.925 30.641 28.401-10.097-.62-20.325-.935-30.641-.935s-20.543.315-30.641.935c9.971-10.476 20.226-19.992 30.641-28.401zm100.739 68.835c14.067 3.377 27.457 7.477 39.982 12.263-2.075 13.267-5.197 26.953-9.298 40.874-4.51-9.053-9.35-18.07-14.51-27.006-5.172-8.958-10.574-17.679-16.174-26.131zm30.684 134.125c4.101 13.92 7.223 27.607 9.298 40.874-12.526 4.786-25.915 8.886-39.982 12.263 5.6-8.451 11.002-17.172 16.174-26.13 5.16-8.938 10-17.954 14.51-27.007zm-131.423 121.972c-10.415-8.409-20.67-17.925-30.641-28.401 10.098.62 20.325.935 30.641.935 10.315 0 20.543-.315 30.641-.935-9.971 10.475-20.226 19.992-30.641 28.401zm-116.913-94.966c5.206 9.017 10.604 17.729 16.16 26.127-14.062-3.376-27.447-7.475-39.969-12.26 2.074-13.265 5.196-26.949 9.296-40.867 4.488 8.992 9.319 18.003 14.513 27zm4.413 127.356c-21.091-12.177-32.288-42.092-31.156-82.617 21.24 7.482 44.465 13.211 68.951 17.054 15.834 19.626 32.476 36.813 49.37 51.212-34.544 21.263-66.066 26.532-87.165 14.351zm225 0c-21.112 12.19-52.661 6.906-87.231-14.392 17.133-14.609 33.745-31.85 49.354-51.159 24.517-3.842 47.77-9.576 69.033-17.067 1.132 40.526-10.065 70.441-31.156 82.618zm113.5-194.856c0 24.454-20.705 49.249-57.032 68.611-4.083-22.231-10.726-45.338-19.684-68.611 8.958-23.273 15.601-46.379 19.684-68.611 36.327 19.362 57.032 44.157 57.032 68.611zm-113.5-194.856c21.091 12.177 32.288 42.092 31.156 82.617-21.263-7.491-44.517-13.224-69.033-17.067-15.608-19.308-32.22-36.547-49.351-51.156 25.679-15.819 61.321-29.351 87.228-14.394zm-225 0c25.882-14.944 61.49-1.447 87.16 14.353-16.89 14.396-33.527 31.589-49.358 51.209-24.489 3.843-47.717 9.572-68.958 17.055-1.132-40.525 10.065-70.44 31.156-82.617zm-56.539 126.283c4.016 21.891 10.596 44.972 19.7 68.573-9.105 23.601-15.685 46.681-19.7 68.573-36.283-19.357-56.961-44.136-56.961-68.573 0-24.438 20.678-49.216 56.961-68.573z"></path> <path data-v-68c46367="" d="m256 334.636 61.817-61.818c17.544-17.544 17.544-46.091 0-63.635-17.059-17.059-44.214-17.509-61.817-1.722-17.606-15.79-44.762-15.335-61.817 1.722-17.544 17.544-17.544 46.091 0 63.635zm-40.604-104.24c5.848-5.847 15.361-5.847 21.209 0l19.395 19.396 19.396-19.396c5.848-5.847 15.361-5.847 21.209 0 5.866 5.868 5.865 15.342 0 21.209l-40.605 40.604-40.604-40.604c-5.865-5.865-5.866-15.342 0-21.209z"></path></g></svg>
                    </div>

                    <p className="max-w-[900px] w-full font-[300] text-[14px] md:text-[16px] leading-[1.6]">
                        {values.ourValues}
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[20px] md:gap-[60px]">
                    <div>
                        <span className="uppercase block border-b border-black mb-[10px] text-[14px] md:text-[16px]" style={{ color: 'rgb(9, 151, 82)' }}>Can-Do Attitude</span>
                        <p className="text-[14px] md:text-[16px] leading-[1.8] font-[300]">
                            {values.canDo}
                        </p>
                    </div>

                    <div>
                        <span className="uppercase block border-b border-black mb-[10px] text-[14px] md:text-[16px]" style={{ color: 'rgb(250, 168, 49)' }}>Proactive Problem Solving</span>
                        <p className="text-[14px] md:text-[16px] leading-[1.8] font-[300]">
                            {values.proactive}
                        </p>
                    </div>

                    <div>
                        <span className="uppercase block border-b border-black mb-[10px] text-[14px] md:text-[16px]" style={{ color: 'rgb(0, 152, 218)' }}>Surpassing Expectations</span>
                        <p className="text-[14px] md:text-[16px] leading-[1.8] font-[300]">
                            {values.surpassing}
                        </p>
                    </div>

                    <div>
                        <span className="uppercase block border-b border-black mb-[10px] text-[14px] md:text-[16px]" style={{ color: 'rgb(112, 79, 191)' }}>Continuous Learning</span>
                        <p className="text-[14px] md:text-[16px] leading-[1.8] font-[300]">
                            {values.continuous}
                        </p>
                    </div>

                    <div>
                        <span className="uppercase block border-b border-black mb-[10px] text-[14px] md:text-[16px]" style={{ color: 'rgb(234, 51, 56)' }}>Responsibility & Accountability</span>
                        <p className="text-[14px] md:text-[16px] leading-[1.8] font-[300]">
                            {values.responsibility}
                        </p>
                    </div>

                </div>
            </div>
        </main>
    )
}