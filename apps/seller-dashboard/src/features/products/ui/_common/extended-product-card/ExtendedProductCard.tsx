import React from "react";
import styles from "./ExtendedProductCard.module.scss";
import Product from "@features/products/domain/models/product";
import { Rate } from "antd";
import ProductStatusDot from "@features/products/ui/_common/product-card/product-status-dot";

export default function ExtendedProductCard({
    className,
    product,
}: {
    className?: string;
    product: Product;
}) {
    return (
        <div className={[styles.container, className].join(" ")}>
            <div className={styles.imageWrapper}>
                <img src={product.imageUrl} alt={product.name} />
            </div>
            <div className={styles.details}>
                <h1 className="h5">{product.name}</h1>
                <p className="subtitle2">{product.priceFormatted}</p>
                <div className="row">
                    <Rate disabled value={2} />
                    <p className={styles.reviews}>Reviews (2,000)</p>
                </div>
                <p className={styles.desc}>
                    Lorem Ipsum,
                    <br />
                    Lorem Ipsum,
                    <br />
                    Lorem Ipsum,
                    <br />
                    Lorem Ipsum,
                    <br />
                    Lorem Ipsum
                </p>
            </div>

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
            <ProductStatusDot isPublished={false} className={styles.dot} />
        </div>
    );
}
