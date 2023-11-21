import React, {useEffect, useState} from "react";
import "./styles.css";
import {useNavigate} from "react-router-dom";
import ProductItem from "../productItem/ProductItem";
import {fetchProducts, restock} from "../../service/apis";

const Restocker = () => {

    const navigate = useNavigate();
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [productAmount, setProductAmount] = useState(0);

    const [productsData, setProductsData] = useState(undefined);
    const [restockTrigger, setRestockTrigger] = useState(false);


    useEffect(() => {
        fetchProducts().then((products) => {
            const updatedProducts = products.reduce((acc, product) => {
                if (product.stock > 1) {
                    const productCopies = Array.from({length: product.stock}, () => ({...product}));
                    acc.push(productCopies);
                } else {
                    acc.push([product]);
                }
                return acc;
            }, []);

            setProductsData(updatedProducts);
        });
    }, [restockTrigger]);

    const handleRestock = () => {
        restock(selectedProduct.productId, productAmount).then(() => {
            navigate("/restocker");
        })
    }

    return (
        <div>
            <h1 className="restock-header">Restocker</h1>

            <div className="vending-machine">
                {productsData && (

                    <div className="product-grid">
                        {Array.from({length: 6}, (_, col) => (
                            <div key={`col-${col}`}>
                                {Array.from({length: 6}, (_, row) => {
                                    const index = row * 6 + col; // Utiliza 6 en lugar de 5 si el índice comienza desde 0

                                    const product = productsData[col]?.[row];
                                    if (product) {
                                        return (
                                            <div key={`row-${row}`} className={`product-row ${product.stock === 0 ? 'out-of-stock' : 'in-stock'}`}>
                                                <ProductItem
                                                    product={product}
                                                    onSelect={(product) => setSelectedProduct(product)}
                                                />
                                            </div>
                                        );
                                    } else {
                                        // Si no hay stock, puedes renderizar un div vacío o null
                                        return <div key={`col-${col}`}/>;
                                    }
                                })}
                            </div>
                        ))}
                    </div>
                )}


                <div className="selected-product">
                    {selectedProduct ? (
                        <div>
                            <h2>Selected Product: {selectedProduct.name}</h2>
                        </div>
                    ) : (
                        <p>Select a Product</p>
                    )}
                </div>

                <input
                    className="restock-input"
                    type="number"
                    placeholder="Product Amount"
                    value={productAmount}
                    onChange={(e) => {
                        const inputValue = e.target.value;
                        if (!isNaN(inputValue) && Number(inputValue) >= 0) {
                            setProductAmount(Number(inputValue));
                        }
                    }}
                />

                <div>
                    <button type="submit"
                            className="restock-button"
                            onClick={handleRestock}
                    >Add Product
                    </button>
                </div>

            </div>

            <div className="backToHome" style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
                <button onClick={() => navigate("/")}
                        style={{
                            background: "blue",
                            borderRadius: 10,
                            color: "white",
                            height: 40,
                            width: 215,
                            marginTop: 20
                        }}>
                    Back to Home
                </button>
            </div>
        </div>
    );
};


export default Restocker;