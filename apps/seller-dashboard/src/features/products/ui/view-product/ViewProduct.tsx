import React from "react";
import styles from "./ViewProduct.module.scss";
import Page from "@layout/page";
import IconButton from "@components/buttons/IconButton";
import { EditLightIcon } from "@icons";
import Button from "@components/buttons/Button";
import ExtendedProductCard from "@features/products/ui/_common/extended-product-card";
import Product from "@features/products/domain/models/product";
import RevenueCard from "@features/products/ui/_common/revenue-card";
import Table from "@components/tables/table";

export default function ViewProduct({}) {
    const product = new Product(
        "1",
        "Ravin Men T-Shirt",
        [300, 350],
        3000,
        250,
        "https://eg.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/70/365271/1.jpg?2008",
        "T-Shirt"
    );
    return (
        <Page
            className={styles.container}
            title={"Product Details"}
            prevTitle={"Product List"}
            actions={
                <>
                    <Button variant={"outline"}>Inventory</Button>
                    <Button className="bg-gray-950">UnPublish</Button>
                </>
            }
        >
            <div className="column lg:row gap-6 h-[206px] ">
                <ExtendedProductCard className="flex-[5]" product={product} />
                <div className="row lg:column h-full flex-[2] gap-4">
                    <RevenueCard
                        title={"Total Sales"}
                        amount={3000}
                        background={"rev-orange.png"}
                    />
                    <RevenueCard
                        title={"Total Revenue"}
                        amount={20000}
                        background={"rev-black.png"}
                    />
                </div>
            </div>

            <h2 className="h6 mt-4">Variants Details</h2>
            <Table dataSource={[]} columns={[]} />
        </Page>
    );
}
