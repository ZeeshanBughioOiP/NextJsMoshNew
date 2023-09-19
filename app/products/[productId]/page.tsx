import SingleProduct from "@/lib/getSingleProduct"
import { Suspense } from "react"
import type { Metadata } from 'next'
import Image from "next/image"

type Params = {
    params: {
        productId: string
    }
}

export async function generateMetadata({ params: { productId } }: Params): Promise<Metadata> {
    const productsData: Promise<Products> = SingleProduct(productId)
    const products: Products = await productsData

    return {
        title: products.title,
        description: `This is the page of ${products.title}`
    }

}

export default async function ProductDetails({ params: { productId } }: Params) {
    const productsData: Promise<Products> = SingleProduct(productId)
    const products: Products = await productsData

    return (
        <div className="container mx-auto">
            <Suspense fallback={<h2>Loading...</h2>}>
                <div className="flex items-center">
                    <div className="imageportion w-2/4">
                        <Image src={products.image} width={500} height={500} alt={products.title} />
                    </div>
                    <div className="productdetails w-2/4">
                        <h2 className="text-orange-600 text-4xl font-extrabold">{products.title}</h2>
                        <p>{products.description}</p>
                        <h3 className="px-5 py-2 bg-orange-600 inline-block rounded-xl uppercase">{products.category}</h3>
                        <h6 className="font-extrabold text-orange-600 text-3xl">${products.price}</h6>
                        <div className="ratings">
                            <span>{products.rating.rate}/5</span>
                        </div>
                        <div className="items-remaining">
                            <h5>Items Remaining: <span>{products.rating.count}</span></h5>
                        </div>
                        <button className="btn btn-secondary capitalize bg-orange-600 hover:bg-blue-700 transition-all rounded-lg">Add To Cart</button>
                    </div>
                </div>
            </Suspense>
        </div>
    )
}