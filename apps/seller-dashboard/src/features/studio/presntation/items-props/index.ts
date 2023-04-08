import LinearContainer from "@studio/domain/models/linear-container";
import Item from "@studio/domain/models/item";
import CommonProps from "./linear-container-props";
import Element from "@studio/domain/models/element";
import LinearContainerPropsBuilder from "./linear-container-props";
import ElementPropsBuilder from "@studio/presntation/items-props/element-props";
import CommonPropsBuilder from "@studio/presntation/items-props/common-props";
import ImagePropsBuilder from "@studio/presntation/items-props/image-props";
import Image from "@studio/domain/models/image";
import Heading from "@studio/domain/models/heading";
import Button from "@studio/domain/models/button";

const ItemsProps = {
    [LinearContainer.name]: (item: any) =>
        new LinearContainerPropsBuilder(item),
    [Element.name]: (item: any) => new ElementPropsBuilder(item),
    [Item.name]: (item: Item) => new CommonPropsBuilder(item),
    [Image.name]: (item: any) => new ImagePropsBuilder(item),
    [Heading.name]: (item: any) => new ElementPropsBuilder(item),
    [Button.name]: (item: any) => new ElementPropsBuilder(item),
};

export function getPropsForItem(item: Item) {
    return (
        ItemsProps[item.constructor.name]?.(item) ??
        new CommonPropsBuilder(item)
    );
}

export default ItemsProps;
