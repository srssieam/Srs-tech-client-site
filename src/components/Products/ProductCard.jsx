import Rating from "react-rating";
import { AiFillStar } from 'react-icons/ai';
import { Link } from "react-router-dom";


const ProductCard = ({ singleProduct }) => {
    const {_id, productName, brandName, productImg, productType, price, rating, description } = singleProduct;
    return (
        <div>
            <div className="relative flex flex-col text-gray-700 bg-white border border-base-400 shadow-2xl w-72 rounded-xl bg-clip-border">
                <div className="relative mx-4 mt-4 overflow-hidden text-gray-700 bg-white h-80 rounded-xl bg-clip-border">
                    <img
                        src={productImg}
                        className=" w-full h-full"
                    />
                </div>
                <div className="p-6">
                    <div className="flex items-center justify-between mb-2">
                        <p className="block font-sans text-base antialiased font-medium leading-relaxed text-blue-gray-900">
                            {productName}
                        </p>
                        <p className="block font-sans text-base antialiased font-medium leading-relaxed text-blue-gray-900">
                            ${price}
                        </p>
                    </div>
                    <p>
                        <Rating
                            emptySymbol={<AiFillStar className="text-green-300 text-3xl"></AiFillStar>}
                            fullSymbol={<AiFillStar className="text-green-700 text-3xl"></AiFillStar>}
                            initialRating={rating}
                            readonly
                        />
                    </p>
                </div>
                <div className="p-6 pt-0">
                    <Link to={`/product-details/${_id}`}>
                        <button
                            className="block w-full select-none rounded-lg bg-blue-gray-900/10 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-blue-gray-900 transition-all hover:scale-105 focus:scale-105 focus:opacity-[0.85] active:scale-100 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                            type="button"
                        >
                            Show details
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;