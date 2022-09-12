import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import ItemList from "./ItemList";
import ItemCount from "./ItemCount";
import products from "./products";

const ItemListContainer = () => {
    const [items, setItems] = useState([]);

    useEffect(() => {

        const getProductos = new Promise((resolve) => {
            setTimeout(() => {
                resolve(products);
            }, 2000);
        });

        getProductos.then((respuesta) => {
            setItems(respuesta);
        });
    }, []);


    return(
        <div className="container">
            <p>Hola Tutora!</p>

            <ItemList items = {items}/>
            <hr />
        </div>
    )
}

export default ItemListContainer;
