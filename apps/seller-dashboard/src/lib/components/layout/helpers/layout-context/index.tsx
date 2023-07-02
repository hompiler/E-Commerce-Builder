import { createContext } from "react";

interface LayoutContextProps {
    isMobile: boolean;
    enableNav: boolean;
    selectLayoutOption: (options: {
        isMobile?: boolean;
        enableNav?: boolean;
    }) => void;
}

const LayoutContext = createContext<LayoutContextProps>({
    isMobile: false,
    enableNav: true,
    selectLayoutOption: (selectLayoutOption) => ({}),
});

export default LayoutContext;
