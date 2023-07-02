import { useContext, useEffect } from "react";
import LayoutContext from "@layout/helpers/layout-context/index";

export default function useDisableNavigation() {
    const { selectLayoutOption } = useContext(LayoutContext);
    useEffect(() => {
        selectLayoutOption({ enableNav: false });
        return () => {
            selectLayoutOption({ enableNav: true });
        };
    }, []);
}
