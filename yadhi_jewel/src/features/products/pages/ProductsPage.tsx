import ProductCard from "../components/ProductCard";
import { useState,useMemo,useRef, useCallback} from "react";
import SearchBar from "../../../shared/components/SearchBar";

import { useProducts } from "../hooks/useProducts";
function ProductsPage() {
    const { products, loading, error } = useProducts();
    const [searchTerm, setSearchTerm] = useState("");

    const searchRef  =  useRef<HTMLInputElement>(null);

    console.log('searchRef', searchRef.current?.value);

      const handleSearch = useCallback(
        (value: string) => {
            setSearchTerm(value);
        },
        []
);

const filteredProducts = useMemo(() => {
    return products.filter((product) =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
}, [products, searchTerm]);


    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error loading products</div>;

  

    return (
        <div>
            <h2>Products page</h2>
            <SearchBar value={searchTerm} onChange={handleSearch} ref={searchRef} />
            {/* this button focuses the search input which will demonstrate the use of forwardRef */}
            <button
                onClick={() =>
                    searchRef.current?.focus()
                }
            >
                Focus Search is working with forwardRef
            </button>
            <div className="products-grid">
                {filteredProducts.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </div>
    );
}   
export default ProductsPage;


/* when the ref element is in child component, we need to use forwardRef to pass the ref from parent to child component. 
In this case, the SearchBar component is a child component of ProductsPage and we want to focus the input element in SearchBar when the button is clicked. 
By using forwardRef, we can pass the ref from ProductsPage to SearchBar and then to the input element in SearchBar. 
This allows us to call searchRef.current.focus() in ProductsPage and it will focus the input element in SearchBar.*/

/* using forwardRef parent component access all methods of a referred DOM element in child Component.
By using useImperatvieHandle we can also expose custom methods to parent component. 
In this case, we are exposing the focus method of the input element in SearchBar to the parent component ProductsPage.*/

/*ref family
useRef
forwardRef
useImperativeHandle
*/