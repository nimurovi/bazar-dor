 
import CategoriesClient from '@/components/CategoriesClient';
 
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
        
            <CategoriesClient categories={categories} />
        </>
    );
};
export default Catagories;

