import React from "react";
import styles from "./ProductCard.module.scss";
import Product from "@features/products/domain/models/product";
import Image from "next/image";
import products from "@/pages/products";

export default function ProductCard({ product }: { product: Product }) {
    return (
        <div className={styles.container}>
            <div className={styles.imageContainer}>
                <img src={product.imageUrl} alt={product.name} />
                <p className={styles.category}>{product.category}</p>
                <p
                    className={styles.quantity}
                    style={{
                        backgroundColor: product.quantityStatusColor,
                    }}
                >
                    {product.quantity === 0
                        ? "Out of Stock"
                        : `${product.quantity} Left`}
                </p>
            </div>
            <p className="button-md">{product.name}</p>
            <div className="row-between">
                <p className={[styles.sub, "text-gray-500"].join(" ")}>
                    {product.priceRange[0]}EGP - {product.priceRange[1]}EGP
                </p>
                <p className={styles.sub}>{product.sales} Sales</p>
            </div>
        </div>
    );
}
