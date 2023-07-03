import React from "react";
import styles from "./AllProducts.module.scss";
import Page from "@layout/page";
import Button from "@components/buttons/Button";
import { PlusIcon } from "@icons";
import ProductsGrid from "@features/products/ui/all-products/products-grid";
import Product from "@features/products/domain/models/product";
import ProductsTable from "@features/products/ui/all-products/products-table";
import Link from "next/link";
import useDisableNavigation from "@layout/helpers/layout-context/use-disable-navigation";
import Filters from "@components/filters";

export default function AllProducts({}) {
    const products1: Array<Product> = [
        new Product(
            "1",
            "Ravin Men T-Shirt",
            [300, 350],
            3000,
            250,
            "https://eg.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/70/365271/1.jpg?2008",
            "T-Shirt"
        ),
        new Product(
            "1",
            "Ravin Men T-Shirt",
            [300, 350],
            3000,
            250,
            "https://eg.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/70/365271/1.jpg?2008",
            "T-Shirt"
        ),
        new Product(
            "1",
            "Ravin Men T-Shirt",
            [300, 350],
            3000,
            250,
            "https://eg.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/70/365271/1.jpg?2008",
            "T-Shirt"
        ),
    ];

    const products = [
        ...products1,
        ...products1,
        ...products1,
        ...products1,
        ...products1,
    ];
    return (
        <Page
            title={"Products"}
            actions={
                <Link href={"/products/add"}>
                    <Button icon={<PlusIcon />}>Add Product</Button>
                </Link>
            }
            className={styles.container}
        >
            <Filters />
            {/*<ProductsTable products={products} />*/}
            <ProductsGrid products={products} />
        </Page>
    );
}
