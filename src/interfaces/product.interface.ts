export interface Product {
    productId: number;
    name: string;
    price: number;
    type: number; 
}

export interface IGetProduct {
    err: boolean,
    data: Product[];
}
