import Product from "@features/products/domain/models/product";
import ProductCard from "@features/products/ui/_common/product-card";
import styles from "./AllProducts.module.scss";
import { Pagination } from "antd";
import { useMemo, useState } from "react";

export default function ProductsGrid({ products }: { products: Product[] }) {
    const [page, setPage] = useState(1);
    const pageSize = 10;
    const currentProducts = useMemo(() => {
        const start = (page - 1) * pageSize;
        const end = start + pageSize;
        return products.slice(start, end);
    }, [page, products]);
    return (
        <div>
            <div className={styles.productsGrid}>
                {currentProducts.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
            <div className="row justify-end mt-4">
                <Pagination
                    current={page}
                    total={products.length}
                    onChange={setPage}
                />
            </div>
        </div>
    );
}
