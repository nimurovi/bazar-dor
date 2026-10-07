import React from 'react';

const Banner = () => {
    const date = new Date().toLocaleDateString("en-US", {
        dateStyle: "full",
    });
    return (
        <section className="container mx-auto rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
            <div className="flex items-center justify-between gap-6">
                <div>
                    <span className="inline-block rounded-full bg-green-100 px-4 py-1 text-sm font-medium text-green-700">
                        {date}
                    </span>

                    <h1 className="mt-3 text-3xl font-bold text-gray-900">
                        Today&apos;s Market Prices at a Glance
                    </h1>

                    <p className="mt-3 text-sm leading-6 text-gray-500">
                        Rice, lentils, oil, vegetables, fish, meat and other essential
                        prices — updated regularly so you can easily track market price
                        changes.
                    </p>

                    <button className="mt-5 rounded-md bg-green-600 px-5 py-2.5 text-sm font-semibold text-white shadow-md transition hover:bg-green-700">
                        View All Prices
                    </button>
                </div>

                <div className="shrink-0">
                    <img
                        src="/bazar-hero.png"
                        alt="Market basket"
                        className="object-contain"
                    />
                </div>
            </div>
        </section>
    );
}


export default Banner;