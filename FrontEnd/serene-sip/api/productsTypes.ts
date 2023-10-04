export interface Product {
    id: number;
    image: string;
    title: string;
    price: number;
}

interface Data {
    products: Product[];
}

declare const data: Data;
export default data;