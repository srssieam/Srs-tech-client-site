import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import Rating from "react-rating";
import { AiFillStar } from 'react-icons/ai';
import Swal from "sweetalert2";



const ProductDetails = () => {
    const { id } = useParams();
    console.log(id);
    const loadedData = useLoaderData();
    console.log(loadedData)
    const [productData, setProductData] = useState({})

    useEffect(() => {
        const findProductData = loadedData?.find(product => product?._id === id);
        setProductData(findProductData)
    }, [id, loadedData])
    console.log(productData)

    const { productName, brandName, productImg, productType, price, rating, description } = productData;

    const handleAddToCart=()=> {
    fetch('http://127.0.0.1:9000/cart', {
        method: 'POST',
        body: JSON.stringify(productData),
        headers: {
            'Content-type': 'application/json',
        },
    })
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
            if (data.insertedId) {
                Swal.fire(
                    'Good job!',
                    'Added to cart successfully',
                    'success'
                )
            }
        });
}


return (
    <div className="max-w-[1320px] mx-auto p-4 lg:p-0">
        <div className="card lg:card-side bg-base-100 shadow-2xl my-16">
            <figure className=" px-7 flex-1"><img src={productImg} alt="Album" /></figure>
            <div className="card-body md:text-lg flex-1">
                <h2 className="card-title md:text-2xl">{productName}</h2>
                <p><strong>Brand:</strong> {brandName}</p>
                <p><strong>Product type:</strong> {productType}</p>
                <p className="flex items-center gap-4"><strong>Rating:</strong> <Rating
                    emptySymbol={<AiFillStar className="text-green-300 text-3xl"></AiFillStar>}
                    fullSymbol={<AiFillStar className="text-green-700 text-3xl"></AiFillStar>}
                    initialRating={rating}
                    readonly
                /></p>
                <p><strong> Price:</strong> ${price}</p>
                <p>{description}</p>
                <div className="card-actions justify-end">
                    <button onClick={handleAddToCart} className="btn bg-[#144940] hover:bg-[#28685d] text-white normal-case">Add to Cart</button>
                </div>
            </div>
        </div>
    </div>
);
};

export default ProductDetails;