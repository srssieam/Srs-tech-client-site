import Swal from "sweetalert2";


const AddProduct = () => {
    const handleAddProduct = e => {
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
        const newProduct = { productName, brandName, productImg, productType, price, rating, description }

        fetch('https://srs-tech-server-5eckq1xjm-srs-sieams-projects.vercel.app/products', {
            method: 'POST',
            body: JSON.stringify(newProduct),
            headers: {
                'Content-type': 'application/json',
            },
        })
            .then(res => res.json())
            .then(data => {
                console.log(data.insertedId);
                if (data.insertedId) {
                    Swal.fire(
                        'Good job!',
                        'Coffee added successfully',
                        'success'
                    )
                    form.reset();
                }
            })

    }
    return (
        <div className=" md:my-11 lg:my-24 text-2xl font-semibold space-y-7 m-4">
            <h1 className="text-5xl font-handlee font-semibold text-center ">Add new product</h1>
            <div className="lg:p-0">
                <form onSubmit={handleAddProduct} className="w-full md:w-3/4 lg:w-1/2 mx-auto space-y-6">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-2xl font-semibold font-handlee">Product name</span>
                        </label>
                        <input type="text" name="productName" placeholder="Enter product name" className="input border border-[#218171]" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-2xl font-semibold font-handlee">Brand name</span>
                        </label>
                        <input type="text" name="brandName" placeholder="Enter brand name" className="input border border-[#218171]" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-2xl font-semibold font-handlee">Product image</span>
                        </label>
                        <input type="text" name="productImg" placeholder="Enter product image url" className="input border border-[#218171]" required />
                    </div>


                    <div className="form-control text-xl">
                        <label htmlFor="productType" className="label">
                            <span className="label-text text-2xl font-semibold font-handlee">Select Product Type:</span>
                        </label>
                        <select className="input border border-[#218171]" id="productType" name="productType" defaultValue='Select type'>
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
                        <input type="text" name="price" placeholder="Enter price" className="input border border-[#218171]" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-2xl font-semibold font-handlee">Rating</span>
                        </label>
                        <input type="number" name="rating" placeholder="Enter rating" className="input border border-[#218171]" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-2xl font-semibold font-handlee">Short description</span>
                        </label>
                        <textarea cols="50" rows="5" name="description" placeholder="Type short description" className=" textarea border border-[#218171] resize-none" required />
                    </div>
                    <div className="form-control my-4">
                        <button className="btn bg-[#144940] normal-case text-xl max-w-max mx-auto hover:bg-[#28685d] text-white">Add product</button>
                    </div>
                </form>
            </div>

        </div>
    );
};

export default AddProduct;