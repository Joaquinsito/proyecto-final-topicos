import React from "react";

const ItemProduct = (props) => (
    <ul>
        <li>Name:{props.name}</li>
        <li>Description:{props.description}</li>
        <li>Price:{props.price}</li>
        <li>Stock:{props.stock}</li>
    </ul>
)

export default ItemProduct;