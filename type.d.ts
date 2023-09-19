type Post = {
    "userId": number,
    "id": number,
    "title": string,
    "body": string,
}

type User = {
    "id": number,
    "name": string,
    "username": string,
    "email": string,
    "address": {
        "street": string,
        "suite": string,
        "city": string,
        "zipcode": string,
        "geo": {
            "lat": string,
            "lng": string
        }
    },
    "phone": string,
    "website": string,
    "company": {
        "name": string,
        "catchPhrase": string,
        "bs": string
    }
}

type Products = {
    "id": number,
    "title": string,
    "price": number,
    "description": string,
    "category": string,
    "image": string,
    "rating": { "rate": number, "count": number }
}

type ProductsDummy = {
    "id": number,
    "title": string,
    "description": string,
    "price": number,
    "discountPercentage": number,
    "rating": number,
    "stock": number,
    "brand": string,
    "category": string,
    "thumbnail": string,
    "images": [string, string, string, string, string]
}

type ProductsDummy2 = {
    "products": string[
    {
        "id": number,
        "title": string,
        "description": string,
        "price": number,
        "discountPercentage": number,
        "rating": number,
        "stock": number,
        "brand": string,
        "category": string,
        "thumbnail": string,
        "images": [string, string, string, string, string]
    }
    ],
    "total": number,
    "skip": number,
    "limit": number
}