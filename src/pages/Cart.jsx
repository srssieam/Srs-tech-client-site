import Rating from "react-rating";
import { useLoaderData } from "react-router-dom";
import { AiFillStar } from 'react-icons/ai';
import Swal from "sweetalert2";
import { useState } from "react";

const Cart = () => {
    const products = useLoaderData();
    const productPrice = products.map(total => parseFloat(total.price));
    const total = productPrice.reduce((preValue, currentValue) => preValue + currentValue, 0);
    console.log(productPrice);
    console.log(total)
    console.log(products)

    const [product, setProduct]=useState(products)

    const handleDelete = _id => {
        console.log(_id);

        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://127.0.0.1:9000/cart/${_id}`, {
                    method: 'DELETE',
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                            )
                            const remaining = products.filter(p => p._id !== _id);
                            setProduct(remaining);
                        }
                    })

            }
        })
    }

    return (
        <div className="max-w-[1320px] px-4 lg:px-0 mx-auto my-12">
            <h1 className="text-5xl font-handlee font-semibold text-center my-6">Your Shopping Cart</h1>
            <div className="md:flex md:justify-between">
                <h3 className="text-2xl">Total products: {products.length}</h3>
                <h3 className="text-2xl">Total price: ${total}</h3>
            </div>
            <div className="">
                {
                    product?.map(product => {
                        return <div key={product._id}>
                            <div>
                                <div className="card lg:card-side bg-base-100 shadow-2xl my-16">
                                    <figure className=" px-7 h-[200px] w-[200px]"><img src={product.productImg} className="h-full w-full object-fill" alt="Album" /></figure>
                                    <div className="card-body md:text-lg flex-1">
                                        <h2 className="card-title md:text-2xl">{product.productName}</h2>
                                        <p><strong>Brand:</strong> {product.brandName}</p>
                                        <p className="flex items-center gap-4"><strong>Rating:</strong> <Rating
                                            emptySymbol={<AiFillStar className="text-green-300 text-3xl"></AiFillStar>}
                                            fullSymbol={<AiFillStar className="text-green-700 text-3xl"></AiFillStar>}
                                            initialRating={product.rating}
                                            readonly
                                        /></p>
                                        <p><strong> Price:</strong> ${product.price}</p>
                                    </div>
                                    <div className="card-actions justify-end items-center">
                                        <button onClick={() => handleDelete(product._id)} className="btn bg-red-700 hover:bg-red-800 m-7 text-white normal-case">Delete</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    })
                }
            </div>
        </div>
    );
};

export default Cart;