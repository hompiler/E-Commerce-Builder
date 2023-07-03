import Button from "@components/buttons/Button";
import Image from "next/image";
import { Checkbox } from "antd";
import { useState } from "react";

export default function StoreSellingType() {
    const items = [
        {
            key: "furniture",
            name: "Furniture",
        },
        {
            key: "clothing",
            name: "Clothing",
        },
        {
            key: "technology",
            name: "Technology",
        },
    ];

    const [selectedItem, setSelectedItem] = useState<string>();
    return (
        <div className="column gap-10">
            <ul className="column gap-10 no-bullets">
                {items.map((item) => {
                    return (
                        <SellingItem
                            key={item.key}
                            item={item}
                            selected={selectedItem === item.key}
                            onClick={() => setSelectedItem(item.key)}
                        />
                    );
                })}
            </ul>
            <Button width={"large"}>Confirm</Button>
        </div>
    );
}

function SellingItem({
    item,
    selected,
    onClick,
}: {
    item: {
        key: string;
        name: string;
    };
    selected: boolean;
    onClick?: () => void;
}) {
    return (
        <li
            onClick={onClick}
            className={[
                "row gap-4 rounded-[10px] bordered border-[2px] p-4 cursor-pointer ",
                "hover:border-primary-400  transition-all",
                selected
                    ? "border-primary-400 bg-primary-100 hover:bg-primary-100"
                    : "bg-white hover:bg-gray-200",
            ].join(" ")}
        >
            <Image
                src={`/images/store/${item.key}.svg`}
                alt={item.name}
                width={40}
                height={40}
            />
            <p>{item.name}</p>
            <Checkbox
                className="ms-auto w-[24px] h-[24px] pointer-events-none"
                checked={selected}
            />
        </li>
    );
}
