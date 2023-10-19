import { useLoaderData } from "react-router-dom";
import { RiDeleteBinLine } from 'react-icons/ri';
import { BiEditAlt } from 'react-icons/bi';
import { FiEye } from 'react-icons/fi';


const AllAddedProducts = () => {
    const products = useLoaderData();
    console.log(products)
    return (
        <div className="max-w-[1320px] px-4 lg:px-0 mx-auto my-12">
            <h1 className="text-5xl font-handlee font-semibold text-center my-6">Your all added products</h1>
            <div>
                <h3 className="text-2xl">Total products: {products.length}</h3>
            </div>
            <div>
                {
                    products?.map(product => <div key={product._id}>
                        <div className="card lg:card-side bg-base-100 shadow-2xl my-16">
                            <figure className=" px-7 h-[200px] w-[200px]"><img src={product.productImg} className="h-full w-full object-fill" alt="Album" /></figure>
                            <div className="card-body md:text-lg flex-1">
                                <h2 className="card-title md:text-2xl">{product.productName}</h2>
                                <p><strong>Brand:</strong> {product.brandName}</p>
                                
                                <p><strong> Price:</strong> ${product.price}</p>
                            </div>
                            <div className="card-actions flex justify-center gap-2 lg:justify-end items-center m-5">
                                <button className="btn bg-red-700 hover:bg-red-800  text-white normal-case"><RiDeleteBinLine className="text-3xl"></RiDeleteBinLine></button>
                                <button className="btn bg-red-700 hover:bg-red-800  text-white normal-case"><BiEditAlt className="text-3xl"></BiEditAlt></button>
                                <button className="btn bg-red-700 hover:bg-red-800  text-white normal-case"><FiEye className="text-3xl"></FiEye></button>
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