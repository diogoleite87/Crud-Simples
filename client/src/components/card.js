import React from "react";

export default function Card(props) {

    return <div className="card-container">
        <h1>{props.name}</h1>
        <p>{props.cost}</p>
        <p>{props.category}</p>
    </div>
}