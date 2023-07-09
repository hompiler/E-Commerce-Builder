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
        new Product(
            "1",
            "Black Unisex Hoodie",
            [350, 200],
            3000,
            150,
            "https://static.pullandbear.net/2/photos/2023/V/0/2/p/4596/549/800/4596549800_1_1_3.jpg?t=1677175104145",
            "Hoodies"
        ),
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
