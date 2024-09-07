interface IProductTabStrip {
    tabs: React.ReactNode;
}

export const ProductTabStrip = ({ tabs }: IProductTabStrip) => <div className="bg-zinc-100">
    <div className="max-w-[1100px] w-[90%] mx-auto py-[7px] text-[14px]">
        {tabs}
    </div>
</div>