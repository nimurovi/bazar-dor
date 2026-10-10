import { notFound } from 'next/navigation';
import React from 'react';
export type Market = {
    market: string;
    division: string;
    min: number;
    max: number;
};

export type Item = {
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
const page = async ({ params }: { params: { productid: string } }) => {
    const { productid } = await params;
    const res = await fetch(`https://api-store-indol.vercel.app/api/bazardor/products/${productid}`);
    const product = await res.json();

    if (!res.ok) {
        notFound();
    }
 
    if (!product || !product.id || !product.slug) {
        notFound();
    }

    return (
        <div className="min-h-screen bg-[#f3f8f4] py-8">
            <div className="mx-auto max-w-7xl px-4">
                {/* Breadcrumb */}
                <div className="mb-6 text-xs text-gray-500">
                    Home <span className="mx-2">›</span>
                    {product.categoryNameBn} <span className="mx-2">›</span>
                    {product.nameBn}
                </div>

                {/* Product Header */}
                <div className="mb-4 flex items-center justify-between rounded-xl border border-[#dfe7e1] bg-white p-5">
                    <div className="flex items-center gap-4">
                        <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-[#f1f6f2] text-3xl">
                            {product.image}
                        </div>

                        <div>
                            <h1 className="text-xl font-bold text-[#1d2b23]">
                                {product.nameBn}
                            </h1>

                            <p className="mt-1 text-sm text-gray-500">
                                Per {product.unit} · {product.categoryNameBn}
                            </p>

                            <p className="mt-1 text-xs text-gray-500">
                                Price increased compared to yesterday · {product.today - product.yesterday} Taka
                            </p>
                        </div>
                    </div>

                    <div className="rounded-xl bg-[#f1f6f2] px-5 py-3 text-center">
                        <p className="text-xs text-gray-500">Today&apos;s Average Price</p>

                        <p className="text-2xl font-bold text-[#26352c]">
                            {product.today}
                        </p>

                        <p className="text-xs text-gray-500">Taka / kg</p>

                        <p className="mt-1 text-xs font-semibold text-red-500">
                            ▲ {product.change?.pct}%
                        </p>
                    </div>
                </div>

                {/* Main Card */}
                <div className="rounded-xl border border-[#dfe7e1] bg-white p-4">
                    {/* Price Summary */}
                    <h2 className="mb-3 text-sm font-bold text-[#26352c]">
                        Price Summary
                    </h2>

                    <div className="mb-5 grid grid-cols-1 gap-3 sm:grid-cols-3">
                        {/* Minimum Price */}
                        <div className="rounded-xl border border-[#dfe7e1] p-4">
                            <p className="text-xs text-gray-500">Minimum Price</p>

                            <p className="mt-1 text-lg font-bold text-green-600">
                                {Math.min(...product.markets.map((item: Market) => item.min))} Taka
                            </p>

                            <p className="mt-1 text-[10px] text-gray-500">
                                Among the latest market prices
                            </p>
                        </div>

                        {/* Maximum Price */}
                        <div className="rounded-xl border border-[#dfe7e1] p-4">
                            <p className="text-xs text-gray-500">Maximum Price</p>

                            <p className="mt-1 text-lg font-bold text-red-500">
                                {Math.max(...product.markets.map((item: Market) => item.max))} Taka
                            </p>

                            <p className="mt-1 text-[10px] text-gray-500">
                                Among the latest market prices
                            </p>
                        </div>

                        {/* Last Month */}
                        <div className="rounded-xl border border-[#dfe7e1] p-4">
                            <p className="text-xs text-gray-500">Last Month&apos;s Price</p>

                            <p className="mt-1 text-lg font-bold text-green-600">
                                {product.lastMonth} Taka
                            </p>

                            <p className="mt-1 text-[10px] text-gray-500">
                                Per {product.unit}
                            </p>
                        </div>
                    </div>

                    {/* Market Prices */}
                    <h2 className="mb-3 text-sm font-bold text-[#26352c]">
                        Today&apos;s Market Prices
                    </h2>

                    <div className="overflow-hidden rounded-xl border border-[#dfe7e1]">
                        <table className="w-full border-collapse text-xs">
                            <thead>
                                <tr className="bg-[#f7faf8] text-left text-gray-500">
                                    <th className="px-3 py-3 font-medium">Market</th>
                                    <th className="px-3 py-3 font-medium">Division</th>
                                    <th className="px-3 py-3 text-right font-medium">
                                        Minimum
                                    </th>
                                    <th className="px-3 py-3 text-right font-medium">
                                        Maximum
                                    </th>
                                    <th className="px-3 py-3 text-right font-medium">
                                        Average
                                    </th>
                                </tr>
                            </thead>

                            <tbody>
                                {product.markets.map((market: Market, index: number) => {
                                    const average = ((market.min + market.max) / 2).toFixed(2);

                                    return (
                                        <tr
                                            key={`${market.market}-${index}`}
                                            className="border-t border-[#dfe7e1] text-[#37443c] odd:bg-white even:bg-[#f4f8f5]"
                                        >
                                            <td className="px-3 py-2.5 font-medium">
                                                {market.market}
                                            </td>

                                            <td className="px-3 py-2.5">
                                                {market.division}
                                            </td>

                                            <td className="px-3 py-2.5 text-right">
                                                {market.min} Taka
                                            </td>

                                            <td className="px-3 py-2.5 text-right">
                                                {market.max} Taka
                                            </td>

                                            <td className="px-3 py-2.5 text-right font-medium">
                                                {average} Taka
                                            </td>
                                        </tr>
                                    );
                                })}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default page;


