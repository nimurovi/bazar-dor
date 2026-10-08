import SortProducts from '@/components/Sortproduct';
import Link from 'next/link';
const page = async ({ params }: { params: { catagoryid: string } }) => {
    const { catagoryid } = await params;
    const res = await fetch(`https://api.api-store.workers.dev/api/bazardor/products?category=${catagoryid}`);
    const products = await res.json();
    const category = products[0]?.category;
    const icon = products[0]?.categoryIcon;
    if (!products || products.length === 0) {
        return (
            <div className="container mx-auto min-h-[70vh] bg-[#f3f8f4] flex items-center justify-center p-4">
                <div className="text-center bg-white rounded-xl shadow-sm p-10 max-w-md">
                    <div className="text-6xl font-bold text-gray-200">
                        404
                    </div>

                    <h1 className="mt-4 text-2xl font-bold text-gray-800">
                        No products found in this category
                    </h1>

                    <p className="mt-2 text-gray-500">
                        There are no products in this category or the category is incorrect.
                    </p>

                    <Link
                        href="/"
                        className="inline-block mt-6 rounded-lg bg-green-600 px-6 py-3 font-semibold text-white hover:bg-green-700 transition"
                    >
                        Go back to home
                    </Link>
                </div>
            </div>
        );
    }


    return (
        <div className="container mx-auto   p-4 bg-[#f3f8f4]">
            <div className="flex items-center gap-4 p-4 bg-white rounded-xl shadow-sm">
                <div className="rounded-xl bg-gray-100 p-3 text-3xl">
                    {icon}
                </div>
                <div>

                    <h1 className='text-2xl font-bold'>{category}</h1>
                    <h1>Todays price and changes of {products.length} products</h1>
                </div>

            </div>



            <SortProducts products={products} />
        </div>
    );
};

export default page;