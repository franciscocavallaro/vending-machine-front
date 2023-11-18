import React, {useState} from 'react';
import ProductItem from "../productItem/ProductItem";
import AdminLoginForm from "../adminLoginForm/AdminLoginForms";
import "./styles.css";

const productsData = [
    {id: 1, name: 'Product 1', price: 2.5, image: 'product1.jpg'},
    {id: 2, name: 'Product 2', price: 3.0, image: 'product2.jpg'},
];

const VendingMachine = () => {
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [showAdminLoginForm, setShowAdminLoginForm] = useState(false);

    const handleAdminLogin = () => {
        setShowAdminLoginForm(true);
    };

    const handleCloseAdminLogin = () => {
        setShowAdminLoginForm(false);
    }

    const handleAdminFormSubmit = (username, password) => {
        if (username === 'admin' && password === 'password') {
            setShowAdminLoginForm(false);
            console.log("Admin logged in");
        } else {
            alert('Username or password are incorrect');
        }
    };

    return (
        <div className="vending-machine">
            <div className="product-grid">
                {Array.from({length: 6}, (_, row) => (
                    <div key={`row-${row}`} className="product-row">
                        {Array.from({length: 6}, (_, col) => {
                            const index = row * 5 + col;
                            const product = productsData[index];
                            return (
                                <div key={`col-${col}`}>
                                    <ProductItem
                                        product={product}
                                        onSelect={(product) => setSelectedProduct(product)}
                                    />
                                </div>
                            );
                        })}
                    </div>
                ))}
            </div>

            <div className="selected-product">
                {selectedProduct ? (
                    <div>
                        <h2>Selected Product: {selectedProduct.name}</h2>
                        <p>Price: ${selectedProduct.price}</p>
                    </div>
                ) : (
                    <p>Select a Product</p>
                )}
            </div>

            {!showAdminLoginForm ? (
            <div className="adminLogIn">
                <button onClick={handleAdminLogin}
                        style={{background: "blue", borderRadius: 10, color: "white", borderColor: "white", height: 40, width: 200}}>
                    Admin Log In
                </button>
            </div>) : (
                <div>
                    <button onClick={handleCloseAdminLogin}
                            style={{background: "red", borderRadius: 10, color: "white", borderColor: "white", height: 40, width: 200}}>
                        Close Admin Log In
                    </button>
                </div>
            )}

            {showAdminLoginForm && (
                <AdminLoginForm onSubmit={handleAdminFormSubmit}/>
            )}
        </div>
    );
};

export default VendingMachine;
