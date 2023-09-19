export default async function singleProduct(producttitle: string) {
    const res = await fetch(`https://fakestoreapi.com/products/${producttitle}`)
    if (!res.ok) throw new Error('failed to fetch user')
    return res.json()
}