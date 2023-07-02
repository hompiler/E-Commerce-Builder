import useDisableNavigation from "@layout/helpers/layout-context/use-disable-navigation";
import StoreCreationPage from "@features/store/ui";

export default function Creation() {
    useDisableNavigation();
    return <StoreCreationPage />;
}
