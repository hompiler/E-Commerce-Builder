import StoreCreationLayout from "./store-creation-layout";
import StoreNameSelection from "@features/store/ui/store-name";

export default function StoreCreationPage() {
    const pages = {
        "1": {
            title: "Create Your First Store",
            child: <StoreNameSelection />,
        },
        "2": {
            title: "What are you selling?",
        },
    };

    const page = pages["1"];
    return (
        <StoreCreationLayout title={page.title}>
            {page.child}
        </StoreCreationLayout>
    );
}
