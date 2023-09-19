export default async function allProducts() {
    const res = await fetch(`https://fakestoreapi.com/products`)
    if (!res.ok) throw new Error('failed to fetch products')
    return res.json()
}