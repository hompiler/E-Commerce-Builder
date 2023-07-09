import useDisableNavigation from "@layout/helpers/layout-context/use-disable-navigation";
import CanvasNav from "@studio/presntation/canvas-components/CanvasNav";
import CanvasFooter from "@studio/presntation/canvas-components/CanvasFooter";
import Product from "@features/products/domain/models/product";
import ProductsGrid from "@features/products/ui/all-products/products-grid";
import React from "react";
import Filters from "@components/filters";

export default function ProductsPage() {
    useDisableNavigation();
    const colors = {
        primary: "#e64f30",
        onPrimary: "#fff",
        background: "#fff",
        onBackground: "#000",
    };

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
        <div>
            <CanvasNav colors={colors} isInDeployment={true} />
            <div className="p-4">
                <Filters />
                <ProductsGrid products={products} />
            </div>
            <CanvasFooter />
        </div>
    );
}
