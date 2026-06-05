import { products } from "./products";
import type { Product } from "../../../shared/types/product";

export async function getProducts():  Promise<Product[]> {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products);
        }, 1000); // Simulate a delay of 1 second
    }); 
}