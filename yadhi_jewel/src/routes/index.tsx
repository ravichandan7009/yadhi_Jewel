import { createBrowserRouter } from "react-router-dom";
import  App from "../app/App";
import HomePage from "../features/products/pages/HomePage";
import ProductsPage from "../features/products/pages/ProductsPage";
import CartDemo from "../features/products/components/cartDemo";


export const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        children: [
            {
                index : true,
                element: <HomePage/>
            },
            {
                path : "products",
                element : <ProductsPage/>
            },
            {
                path: "cart",
                element: <CartDemo/>
            }

        ]
    }
]);