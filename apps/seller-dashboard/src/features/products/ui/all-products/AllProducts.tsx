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

export default function AllProducts({
    otherProducts,
}: {
    otherProducts?: Array<Product>;
}) {
    const products1: Array<Product> = [
        new Product(
            "1",
            "Black Men T-Shirt",
            [200, 200],
            3000,
            100,
            "https://img.freepik.com/premium-photo/black-tshirt-mockup-isolated-grey-background_114853-571.jpg",
            "T-Shirt"
        ),
        new Product(
            "1",
            "White Men T-Shirt",
            [300, 350],
            3000,
            0,
            "https://img.freepik.com/premium-photo/white-tshirt-mockup-isolated-grey-background_114853-572.jpg",
            "T-Shirt"
        ),
        new Product(
            "1",
            "Brown Men Trousers",
            [450, 350],
            3000,
            14,
            "https://cdn11.bigcommerce.com/s-axz3gp0dm3/images/stencil/1280x1280/products/3328/20295/MT21-Mens-Sand-Weekday-Pants__18312.1680086886.jpg?c=1",
            "Trousers"
        ),
    ];

    const products = [
        ...(otherProducts ?? []),
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
            <ProductsTable products={products} />
            {/*<ProductsGrid products={products} />*/}
        </Page>
    );
}
