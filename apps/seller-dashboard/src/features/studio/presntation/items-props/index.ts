import LinearContainer from "@studio/domain/models/linear-container";
import LinearContainerProps from "./linear-container-props";
import Item from "@studio/domain/models/item";
import CommonProps from "./linear-container-props";

const ItemsProps = {
    [LinearContainer.name]: LinearContainerProps,
    [Item.name]: CommonProps,
};

export function getPropsForItem(item: Item) {
    console.log({ item: item.constructor.name, class: ItemsProps[item.constructor.name] });
    return ItemsProps[item.constructor.name] ?? CommonProps;
}

export default ItemsProps;
