import { useEffect, useState } from "react";
import ProductCard from "./productCard";

const Products = () => {
    const [productLength, setProductLength] = useState(8);
    const [loadedProducts, setLoadedProducts] = useState([]);
    useEffect(() => {
        fetch('https://srs-tech-server.vercel.app/products')
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
                    loadedProducts?.slice(0, productLength).map(product => <ProductCard key={product._id} singleProduct={product}></ProductCard>)
                }
            </div>
            <div className="flex justify-center">
                <button onClick={() => setProductLength(loadedProducts.length)} className="btn bg-[#144940] normal-case text-xl max-w-max hover:bg-[#28685d] text-white">See more</button>
            </div>
        </div>
    );
};

export default Products;