
'use client';

import { useState } from 'react';
import ProductCard from '@/components/Productcard';
import { Product } from '@/shared/navbar/Marquee';

const SortProducts = ({ products }: { products: Product[] }) => {
    const [sort, setSort] = useState<'default' | 'low' | 'high'>('default');

    const sortedProducts = [...products].sort((a, b) => {
        if (sort === 'low') {
            return a.today - b.today;
        }

        if (sort === 'high') {
            return b.today - a.today;
        }

        return 0;
    });

    return (
        <>
             
            <div className="bg-white rounded-xl shadow-sm py-4 mt-4 flex justify-end px-4">
                <select
                    value={sort}
                    className="border rounded-lg px-4 py-2"
                    onChange={(e) =>
                        setSort(
                            e.target.value as 'default' | 'low' | 'high'
                        )
                    }
                >
                    <option value="default">
                        sort: default
                    </option>

                    <option value="low">
                        price: low to high
                    </option>

                    <option value="high">
                        price: high to low
                    </option>
                </select>
            </div>

             
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 py-4">
                {sortedProducts.map((product) => (
                    <div key={product.id}>
                        <ProductCard item={product} />
                    </div>
                ))}
            </div>
        </>
    );
};

export default SortProducts;

