import Navbar from "@layout/navbar";
import styles from "./Layout.module.scss";
import { NavRoute } from "@layout/navbar/nav-routes";

export default function Layout({
    routes,
    children,
}: {
    routes: Array<NavRoute>;
    children: React.ReactNode;
}) {
    return (
        <div className={styles.layout}>
            <Navbar routes={routes} />
            <div className={styles.content}>{children}</div>
        </div>
    );
}
