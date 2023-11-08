import React from "react";
import {useNavigate} from "react-router-dom";
import "./styles.css";

const Statistics = () => {

    const navigate = useNavigate();

    const mockTransacctions = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j"];
    const mostSoldProducts = ["Ibupirac", "Paracetamol", "Aspirina"]
    const totalDayRevenue = 1000;


    return (
        <div className="statistics">
            <h1>Statistics</h1>

            <h2 className="bold">Last 10 Transactions</h2>
            {mockTransacctions.map((transaction) => (
                <text>
                    {transaction}
                </text>
                )
            )}

            <h2 className="bold">Most sold Products</h2>
            {mostSoldProducts.map((product) => (
                    <text>
                        {product}
                    </text>
                )
            )}

            <h2 className="bold">Day Revenue</h2>
            {totalDayRevenue}


            <div className="backToHome" style={{display: "flex", justifyContent: "center", alignItems: "center"}}>

                <button onClick={() => navigate("/")}
                        style={{
                            background: "blue",
                            borderRadius: 10,
                            color: "white",
                            height: 40,
                            width: 200,
                            marginTop: 50
                        }}>
                    Back to Home
                </button>
            </div>
        </div>


    );
}

export default Statistics;