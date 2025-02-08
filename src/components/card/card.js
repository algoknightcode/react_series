import flag from"./flag.png"
import React from "react";
import './card.css';

export default function Card(){
    return(
        <div className="country-card">
            <div className="imge">
                <img src ={flag}/>
            </div>
            <div className="content">
                <div className="name">
                    Barbados
                </div>
                <div className="population">
                    population: 2,82,721
                </div>
                <div className="region">
                    region: american
                </div>
                <div className="captital">
                    captital: bridgestown 
                </div>
            </div>
        </div>

    );
}