type Market = {
    market: string;
    division: string;
    min: number;
    max: number;
};

type MarketItem = {
    id: number;
    slug: string;
    nameBn: string;
    category: string;
    categoryNameBn: string;
    categoryIcon: string;
    unit: string;
    image: string;
    today: number;
    yesterday: number;
    lastWeek: number;
    lastMonth: number;
    change: {
        dir: "up" | "down";
        pct: number;
    };
    markets: Market[];
};

const ProductCard = ({ item }: { item: MarketItem }) => {
    return (
        <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
            {/* Product */}
            <div className="flex items-center gap-4">
                <div className="rounded-xl bg-gray-100 p-3 text-3xl">
                    {item.image}
                </div>

                <div>
                    <h3 className="text-xl font-semibold text-gray-900">
                        {item.slug}
                    </h3>

                    <p className="mt-1 text-sm text-gray-500">
                        Per {item.unit}
                    </p>
                </div>
            </div>

            {/* Today's Price */}
            <div className="mt-5">
                <p className="text-sm text-gray-500">
                    Today&apos;s Price
                </p>

                <div className="mt-1 flex items-center justify-between">
                    <h2 className="text-2xl font-bold text-gray-900">
                        ৳{item.today}
                    </h2>

                    <span
                        className={`rounded-full px-3 py-1 text-sm font-medium ${item.change.dir === "up"
                                ? "bg-red-50 text-red-600"
                                : " bg-green-50 text-green-600"
                            }`}
                    >
                        {item.change.dir === "up" ? "▲" : "▼"} {item.change.pct}%
                    </span>
                </div>
            </div>


        </div>
    );
};

export default ProductCard;