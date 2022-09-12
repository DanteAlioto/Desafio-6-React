import React, { useEffect,useState } from "react";
import ItemDetail from "./ItemDetail";
import {products} from "./products";

const ItemDetailContainer = () => {
    const [item,setItem] = useState({})

    useEffect(() => {
        const getProduct = () =>
            new Promise ((res,rej) => {
                const product = products.find((prod) => prod.id === 1);
                setTimeout(() => {
                    res(product);
                },2000);
            });
            getProduct()
            .then((info) =>{
                setItem(info)
            })
            .catch((error) => {
                console.log(error)
            })
    }, [])

    return(
        <div>
            <ItemDetail item ={item}/>
        </div>
    )
}

export default ItemDetailContainer;