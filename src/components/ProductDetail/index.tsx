import React, { useEffect, useState } from "react";
import { apiFetchDetails } from "../../utils/apiFetch";
import formatMoney from "../../utils/formatMoney";
import { useLocation } from "@reach/router";
import "./styles.scss";

interface Product {
    picture: string;
    title: string;
    condition: string;
    sold_quantity: number;
    price: {
      amount: number;
    };
    description: string;
  }

const ProductDetail: React.FC = () => {
    const location = useLocation();
    const [product, setProduct] = useState<Product | null>(null)
    useEffect(() => {
        getDetail()
    }, [])

    const getDetail = async () => {
        const match = location.pathname.match(/\/items\/([^/]+)/);
        if (match) {
            const id = match[1];
            const results  = await apiFetchDetails(id);
            setProduct({...results.item})
        } else {
            console.log("No se encontró ningún ID en la ruta.");
        }
    }
   
    return (
        <div className="product-detail">
            <div className="product-images">
                <img src={product?.picture} alt={product?.title} />
                <div className="product-info">
                    <p className="product-new">{product?.condition === "used" ? "Usado" : "Nuevo"} - {product?.sold_quantity} vendidos</p>
                    <h1 className="product-title">{product?.title}</h1>
                    <p className="product-price">{formatMoney(product?.price?.amount)}</p>
                <button className="add-to-cart">Comprar</button>
            </div>
            </div>

            <div className="product-description-container">
                <h2 className="product-description">Descripción del producto</h2>
                <p className="product-description-info">{product?.description}</p>
            </div>
        </div>
    );
};

export default ProductDetail;
