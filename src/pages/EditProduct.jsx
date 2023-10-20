import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";


const EditProduct = () => {
    const findProduct = useLoaderData();
    const [product, setProduct] = useState(findProduct)
    const { _id, productName, brandName, productImg, productType, price, rating, description } = product;
    const handleUpdate = e => {
        e.preventDefault();
        const form = e.target;
        const productName = form.productName.value;
        const brandName = form.brandName.value;
        const productImg = form.productImg.value;
        const productType = form.productType.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const description = form.description.value;

        console.log(productName, brandName, productImg, productType, price, rating, description)
        const updateProduct = { _id, productName, brandName, productImg, productType, price, rating, description }
        setProduct(updateProduct);


        // send this specific data with id to the server to update
        fetch(`https://srs-tech-server.vercel.app/products/${_id}`, {
            method: 'PUT',
            body: JSON.stringify(updateProduct),
            headers: {
                'Content-type': 'application/json',
            },
        })
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                if (data.modifiedCount) {
                    Swal.fire(
                        'Good job!',
                        'Product updated successfully',
                        'success'
                    )
                }
            });
    }
    return (
        <div className=" md:my-11 lg:my-24 text-2xl font-semibold space-y-7 m-4">
            <h1 className="text-5xl font-handlee font-semibold text-center ">Update product</h1>
            <div className="lg:p-0">
                <form onSubmit={handleUpdate} className="w-full md:w-3/4 lg:w-1/2 mx-auto space-y-6">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-2xl font-semibold font-handlee">Product name</span>
                        </label>
                        <input type="text" name="productName" placeholder="Enter product name" defaultValue={productName} className="input border border-[#218171]" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-2xl font-semibold font-handlee">Brand name</span>
                        </label>
                        <input type="text" name="brandName" placeholder="Enter brand name" defaultValue={brandName} className="input border border-[#218171]" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-2xl font-semibold font-handlee">Product image</span>
                        </label>
                        <input type="text" name="productImg" placeholder="Enter product image url" defaultValue={productImg} className="input border border-[#218171]" required />
                    </div>


                    <div className="form-control text-xl">
                        <label htmlFor="productType" className="label">
                            <span className="label-text text-2xl font-semibold font-handlee">Select Product Type:</span>
                        </label>
                        <select className="input border border-[#218171]" id="productType" name="productType" defaultValue={productType}>
                            <option value="Select type" disabled>Select Product type</option>
                            <option value="Smartphone">Smartphone</option>
                            <option value="iPhone">iPhone</option>
                            <option value="ipad">ipad</option>
                            <option value="Computer">Computer</option>
                            <option value="Laptop">Laptop</option>
                            <option value="Tablet">Tablet</option>
                            <option value="Headphones">Headphones</option>
                            <option value="Smartwatch">Smartwatch</option>
                            <option value="Camera">Camera</option>
                            <option value="Microphone">Microphone</option>
                            <option value="Television">Television</option>
                            <option value="Earphone">Earphone</option>
                            <option value="Router">Router</option>
                            <option value="Air Conditioner">Air Conditioner</option>
                            <option value="Microwave Oven">Microwave Oven</option>
                            <option value="Washing machine">Washing machine</option>
                            <option value="Fridge">Fridge</option>
                        </select>
                    </div>


                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-2xl font-semibold font-handlee">Price</span>
                        </label>
                        <input type="text" name="price" placeholder="Enter price" defaultValue={price} className="input border border-[#218171]" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-2xl font-semibold font-handlee">Rating</span>
                        </label>
                        <input type="number" name="rating" placeholder="Enter rating" defaultValue={rating} className="input border border-[#218171]" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-2xl font-semibold font-handlee">Short description</span>
                        </label>
                        <textarea cols="50" rows="5" name="description" placeholder="Type short description" defaultValue={description} className=" textarea border border-[#218171] resize-none" required />
                    </div>
                    <div className="form-control my-4">
                        <button className="btn bg-[#144940] normal-case text-xl max-w-max mx-auto hover:bg-[#28685d] text-white">Update</button>
                    </div>
                </form>
            </div>

        </div>
    );
};

export default EditProduct;