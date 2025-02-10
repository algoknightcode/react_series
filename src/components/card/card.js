import flag from"./flag.png"
import React from "react";
import './card.css';
import countriesData from "../../countriesData";

export default function Card({name}){
    return(
        <div className="country-card">
            <div className="imge">
                <img src ={flag}/>
            </div>
            <div className="content">
                <div className="name">
                   {name}
                </div>
                <div className="population">
                   <span>population : </span> 2,82,721
                </div>
                <div className="region">
                  <span>region : </span>american
                </div>
                <div className="captital">
                  <span>captital :</span>  bridgestown 
                </div>
            </div>
        </div>

    );
}