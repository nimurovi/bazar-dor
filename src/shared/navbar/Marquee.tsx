import React from 'react';
import { FaAngleDown, FaChevronUp } from "react-icons/fa";
import MarqueeText from "react-marquee-text"
import "react-marquee-text/dist/styles.css"
export interface Change {
    dir: "up" | "down";
    pct: number;
}

export interface Market {
    market: string;
    division: string;
    min: number;
    max: number;
}

export interface Product {
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
    change: Change;
    markets: Market[];
}
const Marquee = async () => {
    const response = await fetch("https://api.api-store.workers.dev/api/bazardor/products");
    const products = await response.json();

    return (
        <div className="bg-white  p-2">
            <MarqueeText>
                {
                    products.map((product: Product) => (
                        <div key={product.id} className="flex flex-row items-center gap-1 p-2">
                            <p>{product.categoryIcon}</p>
                            <h3>{product.slug}</h3>
                            <h3>{product.today} tk/{product.unit}</h3>
                            {
                                product.change.dir === "up" ? (
                                    <h3 className="text-red-500 flex items-center gap-1"><FaChevronUp /> {product.change.pct}%</h3>
                                ) : (
                                    <h3 className=" text-green-500 flex items-center gap-1"><FaAngleDown /> {product.change.pct}%</h3>
                                )
                            }
                            <h3></h3>

                        </div>
                    ))}
            </MarqueeText>
        </div>
    );
};

export default Marquee;