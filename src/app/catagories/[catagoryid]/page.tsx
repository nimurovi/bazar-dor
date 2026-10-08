import ProductCard from '@/components/Productcard';
import { Product } from '@/shared/navbar/Marquee';
import React from 'react';

const page =async ({ params }: { params: { catagoryid: string } }) => {
    const { catagoryid } =await params;
    const res= await fetch(`https://api.api-store.workers.dev/api/bazardor/products?category=${catagoryid}`);
    const products = await res.json();
    
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 p-4">
            {products.map((product: Product) => (
                <div key={product.id}>
                     <ProductCard item={product} />
                </div>
            ))}
        </div>
    );
};

export default page;