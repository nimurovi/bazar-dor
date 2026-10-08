import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
export interface Category {
    id: string;
    slug: string;
    nameBn: string;
    icon: string;
}
const Catagories = async () => {
    const response = await fetch("https://api.api-store.workers.dev/api/bazardor/categories");
    const categories = await response.json();

    return (
        <>
        
            <div className="container mx-auto flex flex-wrap gap-4 p-4 bg-white ">
                {categories.map((category: Category) => (
                    <Link href={`/catagories/${category.id}`} key={category.id} >
                        <div className="flex flex-row items-center gap-1 p-2  ">
                            <div>{category.icon}</div>
                            <h3>{category.slug}</h3>

                        </div>
                    </Link>
                ))}
            </div>
        </>
    );
};

export default Catagories;