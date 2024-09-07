import { HeaderGap } from "../components/HeaderGap"

export const Contacts = () => {
    return <main>
        <HeaderGap />
        <div className="h-[300px] md:h-[600px] w-full">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.195728210628!2d3.3371101147712516!3d6.62259239521101!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b93d87a75be81%3A0xa33f864929d315a4!2s22a%20Guinness%20Rd%2C%20Ogba%20101233%2C%20Ikeja!5e0!3m2!1sen!2sng!4v1648549974042!5m2!1sen!2sng" width="800" height="600" style={{ border: 0 }} className="w-full h-full" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>

        <div className="max-w-[1100px] w-[90%] mx-auto py-[30px] md:py-[40px] lg:py-[60px] grid grid-cols-1 lg:grid-cols-2 gap-[20px] md:gap-[20px]">
            <div>
                <p className="text-[25px] md:text-[35px] lg:text-[45px] text-tranos-primary font-[300] leading-[1] mb-[20px]">
                    Find the best Tranos solutions for your business.
                </p>

                <span className="text-zinc-800 text-[14px] md:text-[16px]">Contact us to find out about our products</span>
            </div>

            <form className="w-full grid grid-cols-1 md:grid-cols-2 gap-[10px] md:gap-[20px]">
                <div className="flex flex-col gap-[5px]">
                    <label className="text-[14px] text-zinc-700">Firstname</label>
                    <input type="text" className="p-[10px] shadow-md border border-zinc-300" />
                </div>

                <div className="flex flex-col gap-[5px]">
                    <label className="text-[14px] text-zinc-700">Lastname</label>
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
                    <label className="text-[14px] text-zinc-700">Company</label>
                    <input type="text" className="p-[10px] shadow-md border border-zinc-300" />
                </div>

                <div className="flex flex-col gap-[5px]">
                    <label className="text-[14px] text-zinc-700">Request</label>
                    <input type="text" className="p-[10px] shadow-md border border-zinc-300" />
                </div>

                <div className="flex flex-col gap-[5px]">
                    <label className="text-[14px] text-zinc-700">Product Line</label>
                    <input type="text" className="p-[10px] shadow-md border border-zinc-300" />
                </div>

                <div className="flex flex-col gap-[5px]">
                    <label className="text-[14px] text-zinc-700">URL to your document</label>
                    <input type="text" className="p-[10px] shadow-md border border-zinc-300" />
                </div>

                <div className="flex flex-col gap-[5px]">
                    {/* <label className="invisible">send</label> */}
                    <button className="p-[10px] bg-tranos-primary text-white font-[300]">Send</button>
                </div>
            </form>
        </div>

    </main>
}