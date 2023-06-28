import Product from "@features/products/domain/models/product";
import Table from "@components/tables/table";
import { useMemo } from "react";
import { TableColumn } from "@components/tables/table/Table";
import { EditLightIcon } from "@icons";

export default function ProductsTable({ products }: { products: Product[] }) {
    const columns = useMemo<Array<TableColumn<Product>>>(
        () => [
            {
                title: "Variant",
                dataIndex: "name",
                render: (_, record) => (
                    <div className="row gap-3">
                        <img
                            className="w-[45px] h-[45px] rounded-[5px]"
                            src={record.imageUrl}
                            alt={record.name}
                        />
                        <p className="body2">{record.name}</p>
                    </div>
                ),
            },
            {
                title: "Price Range",
                dataIndex: "priceFormatted",
            },
            {
                title: "Quantity",
                dataIndex: "quantity",
            },
            {
                title: "Sales",
                dataIndex: "sales",
            },
        ],
        []
    );

    return (
        <Table
            columns={columns}
            dataSource={products}
            selection={"checkbox"}
            actions={[
                {
                    title: "Edit",
                    icon: <EditLightIcon />,
                    onClick: (record) => {},
                },
            ]}
        />
    );
}
