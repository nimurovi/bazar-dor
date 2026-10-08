import SortProducts from '@/components/Sortproduct';

const page = async ({ params }: { params: { catagoryid: string } }) => {
    const { catagoryid } = await params;
    const res = await fetch(`https://api.api-store.workers.dev/api/bazardor/products?category=${catagoryid}`);
    const products = await res.json();
    const category = products[0]?.category;
    const icon = products[0]?.categoryIcon;



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