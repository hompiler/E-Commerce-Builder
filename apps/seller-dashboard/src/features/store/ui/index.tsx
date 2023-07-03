import StoreCreationLayout from "./store-creation-layout";
import StoreNameSelection from "@features/store/ui/store-name";
import StoreSellingType from "@features/store/ui/store-selling-type";

export default function StoreCreationPage() {
    const pages = {
        1: {
            title: "Create Your First Store",
            child: <StoreNameSelection />,
        },
        2: {
            title: "What are you selling?",
            child: <StoreSellingType />,
        },
    };

    const page = pages["2"];
    return (
        <StoreCreationLayout title={page.title}>
            {page.child}
        </StoreCreationLayout>
    );
}
