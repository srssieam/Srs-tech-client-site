import { Link, useLoaderData } from "react-router-dom";
import { RiDeleteBinLine } from 'react-icons/ri';
import { BiEditAlt } from 'react-icons/bi';
import { FiEye } from 'react-icons/fi';
import Swal from "sweetalert2";
import { useState } from "react";


const AllAddedProducts = () => {
    const loadedProducts = useLoaderData();
    console.log(loadedProducts);
    const [product, setProduct]=useState(loadedProducts);

    const handleDelete = _id => {
        console.log(typeof _id);

        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            console.log(result.isConfirmed);
            if (result.isConfirmed) {
                fetch(`http://127.0.0.1:9000/products/${_id}`, {
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
                            const remaining = loadedProducts.filter(p => p._id !== _id);
                            console.log(remaining);
                            setProduct(remaining);
                        }
                    })
            }
        })
    }

    return (
        <div className="max-w-[1320px] px-4 lg:px-0 mx-auto my-12">
            <h1 className="text-5xl font-handlee font-semibold text-center my-6">Your all added products</h1>
            <div>
                <h3 className="text-2xl">Total products: {product.length}</h3>
            </div>
            <div>
                {
                    product?.map(product => <div key={product._id}>
                        <div className="card lg:card-side bg-base-100 shadow-2xl my-16">
                            <figure className=" px-7 h-[200px] w-[200px]"><img src={product.productImg} className="h-full w-full object-fill" alt="Album" /></figure>
                            <div className="card-body md:text-lg flex-1">
                                <h2 className="card-title md:text-2xl">{product.productName}</h2>
                                <p><strong>Brand:</strong> {product.brandName}</p>

                                <p><strong> Price:</strong> ${product.price}</p>
                            </div>
                            <div className="card-actions flex justify-center gap-2 lg:justify-end items-center m-5">
                                <button onClick={()=>handleDelete(product._id)} className="btn bg-red-700 hover:bg-red-800  text-white normal-case"><RiDeleteBinLine className="text-3xl"></RiDeleteBinLine></button>
                                <Link to={`/editProducts/${product._id}`}><button className="btn bg-red-700 hover:bg-red-800  text-white normal-case"><BiEditAlt className="text-3xl"></BiEditAlt></button></Link>
                                <Link to={`/product-details/${product._id}`}><button className="btn bg-red-700 hover:bg-red-800  text-white normal-case"><FiEye className="text-3xl"></FiEye></button></Link>
                            </div>
                        </div>
                    </div>
                    )
                }
            </div>
        </div>
    );
};

export default AllAddedProducts;