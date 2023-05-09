import React, { useMemo, useRef, useState } from "react";
import styles from "./FileInput.module.scss";
import PropTypes from "prop-types";
import { Input } from "antd";
import formElementsProptypes from "@components/form-components/common/form-elements-proptypes";
import FormItemWrapper from "@components/form-components/form/FormItemWrapper";
import { CloseButtonIcon } from "@lib/assets/icons";

export default function FileInput(props) {
    const ref = useRef();
    const [files, setFiles] = useState([]);
    const isDataExists = useMemo(() => files.length > 0, [files]);

    function onDrop(ev) {
        ev.preventDefault();
        const dt = ev.dataTransfer;
        const files = dt.files;
        setFiles(files);
    }

    return (
        <FormItemWrapper {...props}>
            <Input
                ref={ref}
                {...props}
                type={"file"}
                files={files ?? props.defaultValue}
                onChange={(e) => setFiles(e.target.files)}
            />
            <div
                onDropCapture={onDrop}
                onDrop={onDrop}
                className={styles.uploaderWrapper}
                data-exist={isDataExists}
            >
                {isDataExists && (
                    <div
                        className={styles.removeButton}
                        onClick={() => {
                            setFiles([]);
                        }}
                    >
                        <CloseButtonIcon />
                    </div>
                )}
                <div
                    className={styles.uploader}
                    onClick={() => {
                        if (ref.current?.input?.click)
                            ref.current.input.click();
                    }}
                >
                    {props.icon && <span>{props.icon}</span>}
                    {isDataExists ? (
                        <p className={styles.files}>
                            <span>
                                {files.length > 1
                                    ? "Multiple files"
                                    : files[0].name}
                            </span>
                            {"  "}
                            <strong>Replace file</strong>
                        </p>
                    ) : (
                        <p className={styles.placeholder}>
                            {props.placeholder ?? "Upload file"}
                        </p>
                    )}
                </div>
            </div>
        </FormItemWrapper>
    );
}

FileInput.propTypes = {
    ...formElementsProptypes,
    files: PropTypes.array,
};
