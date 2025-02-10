import React from "react";
import countriesData from "../../countriesData";
import Card from "../card/card";
import "./cd.css";

export default function Countries_list(){
    const array = countriesData.map((a)=> {
       /* console.log(a);*/
       return <Card name = {country.name.common}/>
    })
   
    return(
        <div className="count_data">
            {
                array
            }
            

        </div>
    );
}