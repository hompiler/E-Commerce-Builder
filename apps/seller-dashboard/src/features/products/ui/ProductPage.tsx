import productsRepository from "@features/products/data";
import styles from "./SingleProduct.module.css";

export const getServerSideProps = () => {
    const data = productsRepository.getAll();

    return {
        props: {
            data,
        }
    }
}


interface propTypes {
    data: [];
}

export default function ProductPage(props: propTypes) {
    return <div/>
}