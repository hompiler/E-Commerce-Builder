import { AllProductsPage } from "@features/products";
import Product from "@features/products/domain/models/product";

export default function AllProductsFinal() {
    return (
        <AllProductsPage
            otherProducts={[
                new Product(
                    "1",
                    "Black Unisex Hoodie",
                    [350, 200],
                    3000,
                    150,
                    "https://static.pullandbear.net/2/photos/2023/V/0/2/p/4596/549/800/4596549800_1_1_3.jpg?t=1677175104145",
                    "Hoodies"
                ),
            ]}
        />
    );
}