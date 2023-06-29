import { TableColumn } from "@components/tables/table/Table";

const variantsColumns: Array<TableColumn> = [
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
        title: "Price",
        dataIndex: "price",
    },
    {
        title: "Quantity",
        dataIndex: "quantity",
    },
    {
        title: "Sales",
        dataIndex: "sales",
    },
    {
        title: "Revenue",
        dataIndex: "revenue",
    },
    {
        title: "SKU",
        dataIndex: "sku",
    },
];
