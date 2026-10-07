import React from 'react';
import Image from 'next/image';
export interface Category {
    id: string;
    slug: string;
    nameBn: string;
    icon: string; 
}
const Navlinks =async () => {
    const response = await fetch("https://api.api-store.workers.dev/api/bazardor/categories");
    const categories = await response.json();

    return (
        <div className="container mx-auto flex flex-wrap gap-4 p-4 bg-white ">
            {categories.map((category: Category) => (
                <div key={category.id} className="flex flex-row items-center gap-1 p-2  ">
                    <div>{category.icon}</div>
                    <h3>{category.slug}</h3>
                     
                </div>
            ))}
        </div>
    );
};

export default Navlinks;