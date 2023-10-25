import React from "react";
import {useNavigate} from "react-router-dom";

const Statistics = () => {

    const navigate = useNavigate();

    return (
        <div className="statistics">
            <h1 style={{display: "flex", justifyContent: "center", alignItems: "center"}}>Estadísticas</h1>

            <div className="BackToHome" style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
                <button onClick={() => navigate("/home")}
                        style={{
                            background: "blue",
                            borderRadius: 10,
                            color: "white",
                            height: 40,
                            width: 200,
                        }}>
                    Volver al inicio
                </button>
            </div>
        </div>


    );
}

export default Statistics;