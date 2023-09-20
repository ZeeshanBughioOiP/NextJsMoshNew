"use client"
import React, { useEffect, useState } from 'react';
import allProducts from '@/lib/getProducts'; // Make sure to import the Products type
import Link from 'next/link';
import Image from 'next/image';

interface ProductListProps {
    limit: number;
    showAll: boolean;
}

async function fetchProducts(): Promise<Products[]> {
    const productsData = await allProducts();
    return productsData;
}

function ProductList({ limit, showAll }: ProductListProps) {
    const [products, setProducts] = useState<Products[]>([]);

    useEffect(() => {
        fetchProducts().then((data) => {
            setProducts(showAll ? data : data.slice(0, limit));
        });
    }, [limit, showAll]);

    return (
        <div className='flex flex-wrap gap-5 justify-center my-5'>
            {products.map((product) => {
                return (
                    <Link
                        key={product.id}
                        href={`/products/${product.id}`}
                        className="block max-w-full card w-products bg-base-100 shadow-xl"
                    >
                        <figure className="relative">
                            <Image src={product.image} alt={product.title} width={300} height={300} />
                            <span className="px-5 py-2 rounded-full bg-orange-600 absolute top-3 left-3 uppercase">
                                {product.category}
                            </span>
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title text-not-more-1">{product.title}</h2>
                            <p className="my-4 text-not-more-2">{product.description}</p>
                            <div className="card-actions w-full">
                                <button className="btn btn-primary bg-orange-600 hover:bg-blue-800 text-white transition-all rounded-xl capitalize w-full">
                                    Buy Now
                                </button>
                            </div>
                        </div>
                    </Link>
                );
            })}
        </div>
    );
}

export default ProductList;
