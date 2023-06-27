import React from "react";
import PropTypes from "prop-types";
import styles from "../Navbar.module.scss";

export default function CollapseButton({
    onClick,
    isCollapsed,
}: CollapseButton) {
    return (
        <button onClick={onClick} className={"absolute"}>
            <span>Minimize Side Menu</span>
            <div>{"<"}</div>
        </button>
    );
}

interface CollapseButton {
    isCollapsed: boolean;
    onClick: React.MouseEventHandler<HTMLButtonElement>;
}
