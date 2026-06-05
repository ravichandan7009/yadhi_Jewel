import React from "react";
import type { Product } from "../../../shared/types/product";


interface Props { 
    product : Product;
}

function ProductCard(props: Props) {
    const { product } = props;
    return (
        <div>
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <p>Price: ${product.price}</p>
        </div>
    );
}

export default React.memo(ProductCard);