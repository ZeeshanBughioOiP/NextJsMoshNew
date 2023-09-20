import type { Metadata } from 'next'
import ProductList from '../components/productslist'
import Filter from '../components/filteration'

export const metadata: Metadata = {
    title: 'Products',
}

export default async function ProductsPage() {

    const content = (
        <section>
            <div className='container mx-auto'>
                <h2 className='text-center lg:text-6xl md:text-3xl text-orange-600 font-extrabold mb-10 mt-5'>Products</h2>
                <div className='text-right'>
                    <Filter />
                </div>
                <ProductList limit={999} showAll={true} />
            </div>
        </section>
    )

    return content
}


