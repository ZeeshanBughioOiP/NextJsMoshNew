import type { Metadata } from 'next'
import allProducts from '@/lib/getProducts'
import Link from "next/link"
import Image from 'next/image'

export const metadata: Metadata = {
    title: 'Products',
}

export default async function ProductsPage() {
    const productsData: Promise<Products[]> = allProducts()
    const products = await productsData

    const content = (
        <section>
            <div className='container mx-auto'>
                <h2 className='text-center text-6xl text-orange-600 font-extrabold'>Products</h2>
                <div className='flex justify-start flex-wrap'>
                    {products.map(product => {
                        return (
                            <Link key={product.id} href={`/products/${product.id}`} className="card w-1/3 bg-base-100 shadow-xl">
                                <figure className="px-10 pt-10">
                                    <Image src={product.image} alt={product.title} width={300} height={300} />
                                </figure>
                                <div className="card-body items-center text-center">
                                    <h2 className="card-title text-not-more-1">{product.title}</h2>
                                    <p className='my-4 text-not-more-2'>{product.description}</p>
                                    <div className="card-actions w-full">
                                        <button className='btn btn-primary bg-orange-600 hover:bg-red-600 rounded-xl capitalize w-full'>
                                            Buy Now
                                        </button>
                                    </div>
                                </div>
                            </Link>
                        )
                    })}

                </div>
            </div>
        </section>
    )

    return content
}


