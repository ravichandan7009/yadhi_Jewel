import { useState, useEffect} from "react";
import { getProducts } from "../api/getProducts";
import type { Product } from "../../../shared/types/product";



export function useProducts(){
    const [products, setProducts] = useState <Product[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function fetchProducts() {
            try {
                const data = await getProducts();
                setProducts(data);
            } catch (err) {
                setError(err);
            } finally {
                setLoading(false);
            }
        }
        fetchProducts();
    }, [])
    return{
        products,
        loading,
        error
    }
}