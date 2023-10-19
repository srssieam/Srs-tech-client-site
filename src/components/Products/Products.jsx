import { useEffect, useState } from "react";

const Products = () => {
    const [loadedProducts, setLoadedProducts] = useState([]);
    useEffect(() => {
        fetch('http://127.0.0.1:9000/products')
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setLoadedProducts(data);
            })
    }, [])
    const { productName, brandName, productImg, productType, price, rating, description } = loadedProducts;
    return (
        <div className="md:my-11 lg:my-16 p-4 md:p-10 lg:p-0 max-w-[1320px] mx-auto">
            <h1 className="text-5xl font-handlee font-semibold text-center ">Our featured products</h1>
        </div>
    );
};

export default Products;