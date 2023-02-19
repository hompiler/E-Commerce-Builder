import React, {useState} from "react";
import styles from "./BuilderLayout.module.css";

export default function BuilderLayout({}) {

    const fields = {
        display: {
            values: ["flex", "grid"],
            default: "flex",
            title: "Display",
        },
        flexDirection: {
            values: ["row", "column"],
            title: "Direction",
        },
        justifyContent: {
            values: ["space-between", "flex-start", "flex-end", "center"],
            default: "flex-start",
            title: "Justify Content",
        },
        alignItems: {
            values: ["space-between", "flex-start", "flex-end", "center"],
            default: "flex-start",
            title: "Align Items",
        },
        backgroundColor: {
            values: ["transparent", "red", "blue"],
            title: "Background Color",
        },
    }
    const [containerStyles, setContainerStyles] = React.useState({});


    const [selectedElement, setSelectedElement] = useState(undefined);
    const [elements, setElements] = useState([
        {
            content: "HaHa",
            styles: {},
        },
        {
            content: "HoHo",
            styles: {},
        },
        {
            content: "HeHe",
            styles: {},
        },
    ]);

    function onFieldChange(key, value) {
        console.log({key, value})
        const copy = {...containerStyles};
        copy[key] = value;
        setContainerStyles(copy);
    }

    function onItemFieldChange(key, value) {
        const elementsCopy = [...elements];
        const stylesCopy = {...elementsCopy[selectedElement].styles}
        stylesCopy[key] = value;
        elementsCopy[selectedElement].styles = stylesCopy;
        setElements(elementsCopy);
    }

    return (
        <div className={styles.builderLayout}>
            <header/>
            <nav></nav>
            <aside>{
                Object.keys(fields).map(fieldKey => {
                    // @ts-ignore
                    const field = fields[fieldKey];
                    return <div key={fieldKey}>
                        <h3>{field.title}</h3>
                        <select onChange={(e) => onItemFieldChange(fieldKey, e.target.value)}>
                            {
                                field.values.map(val => <option key={val}>
                                    {val}
                                </option>)
                            }
                        </select>
                    </div>
                })
            }</aside>
            <main>
                <div style={containerStyles}>
                    {
                        elements.map((el, i) => <div onClick={e => setSelectedElement(i)} key={i}
                                                     style={{
                                                         ...el.styles,
                                                         border: selectedElement === i ? "1px solid red" : "none",
                                                     }}>{el.content}</div>)
                    }
                </div>
            </main>
        </div>
    )
}
