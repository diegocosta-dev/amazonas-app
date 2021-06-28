import { Link } from "react-router-dom";
import data from "../data"
import Rating from "../components/Rating";

const ProductScreen = (props) => {
    const product = data.products.find(p => p._id === props.match.params.id);

    if (!product) {
        return (
            <div className="row center">
                <h1>Product not found</h1>
            </div>
        )
    }

    return (
        <div>
            <Link to="/">Back to results</Link>
            <div className="row top">
                <div className="col-2">
                    <img className="igm larger" src= {product.image} alt={product.name}></img>
                </div>
                <div className="col-1">
                    <ul>
                        <li>
                            <h1>{product.name}</h1>
                        </li>
                        <li>
                            <Rating numReviews={product.numReviews} />
                        </li>
                        <li>Price : ${product.price}</li>
                        <li>
                            Description:
                            <p>{product.description}</p>
                        </li>
                    </ul>
                </div>
                <div className="col-1">
                    <div className="card card-body">
                        <ul>
                            <li>
                                <div className="row">
                                    <div>
                                        Price:
                                    </div>
                                    <div className="price">
                                        ${product.price}
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="row">
                                    <div>
                                        Status:
                                    </div>
                                    <div>
                                       {product.countInStock > 0 ? (
                                        <span className="success">In Stock</span>
                                        ) : (
                                       <span className="error">Unavailable</span>
                                       )}
                                    </div>
                                </div>
                            </li>
                            <li>
                                {product.countInStock === 0 
                                ? <button disabled >Item Unavailable</button>
                                : <button className="primary block">Add to cart</button>}
                                
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default ProductScreen;