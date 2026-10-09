'use client';
 
import { Category } from '@/shared/navbar/Categories';
import Link from 'next/link';
import { usePathname } from 'next/navigation';


const CategoriesClient = ({
    categories,
}: {
    categories: Category[];
}) => {
    const pathname = usePathname();

    return (
        <div className="container mx-auto flex flex-wrap gap-4 bg-white p-4">
            {categories.map((category) => {
                const isActive =
                    pathname === `/categories/${category.id}`;

                return (
                    <Link
                        href={`/categories/${category.id}`}
                        key={category.id}
                        className={`rounded-lg px-4 py-2 transition ${isActive
                                ? 'bg-green-600 text-white'
                                : 'bg-gray-100 text-gray-700 hover:bg-green-100'
                            }`}
                    >
                        <div className="flex flex-row items-center gap-1 p-2  ">
                            <div>{category.icon}</div>
                            <h3>{category.slug}</h3>

                        </div>
                    </Link>
                );
            })}
        </div>
    );
};

export default CategoriesClient;