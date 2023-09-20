import React, { useState } from 'react';
import allProducts from '@/lib/getProducts';


async function Filter() {
    // const [SelectedCategory, setSelectedCategory] = useState('')
    const productsData: Promise<Products[]> = allProducts()
    const products = await productsData

    // const handleCategoryChange = (event: { target: { value: React.SetStateAction<string>; }; }) => {
    //     setSelectedCategory(event.target.value);
    // };

    return (
        <>
            <select className="select select-accent w-full max-w-xs capitalize"
            // onChange={handleCategoryChange} value={SelectedCategory}
            >
                <option disabled selected>Select Categories</option>
                {Array.from(new Set(products.map(product => product.category))).map(category => (
                    <option key={category} value={category}>
                        {category}
                    </option>
                ))}
            </select>
        </>
    );
}

export default Filter;
