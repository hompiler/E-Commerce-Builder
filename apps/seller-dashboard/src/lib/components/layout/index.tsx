import Navbar from "@layout/navbar";
import styles from "./Layout.module.scss";
import { NavRoute } from "@layout/navbar/nav-routes";

export default function Layout({ children }: { children: React.ReactNode }) {
    const routes: Array<NavRoute> = [
        {
            path: "/",
            name: "Dashboard",
            icon: "home",
        },
        {
            path: "/products",
            name: "Products",
            icon: "products",
        }
    ]
    return (
        <div className={styles.layout}>
            {/*<Navbar routes={[]} />*/}
            <div>{children}</div>
        </div>
    );
}
