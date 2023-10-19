import { useEffect, useState } from "react";
import ProductCard from "./productCard";

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
    
    return (
        <div className="md:my-11 lg:my-16 p-4 md:p-10 lg:p-0 max-w-[1320px] mx-auto">
            <h1 className="text-5xl font-handlee font-semibold text-center ">Our featured products</h1>
            <div className="flex flex-wrap justify-center my-14 gap-6">
                {
                    loadedProducts?.map(product=><ProductCard key={product._id} singleProduct={product}></ProductCard>)
                }
            </div>
        </div>
    );
};

export default Products;