export interface Product {
    _id?:string,
    id?:string,
    lang:string,
    name: string,
    image: string,
    description:string,
    brand: string,
    category: string,
    price: number,
    countInStock: number,
    rating: number,
    numReviews: number,
    vertical: string,
    agent:string,
    owner:string
}
