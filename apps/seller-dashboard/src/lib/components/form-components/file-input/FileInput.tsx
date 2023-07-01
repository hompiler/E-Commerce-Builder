import React, { useMemo, useRef, useState } from "react";
import FormItemWrapper from "@components/form-components/form/FormItemWrapper";
import FormItemProps from "@components/form-components/_common/form-elements-proptypes";
import type { UploadFile } from "antd/es/upload/interface";
import { Modal, Upload } from "antd";
import type { RcFile, UploadProps } from "antd/es/upload";
import { PlusIcon } from "@icons";

export default function FileInput(props: FileInputProps) {
    return (
        <FormItemWrapper
            {...props}
            className={`lib-file-input ${props.className ?? ""}`}
        >
            <PureFileInput />
        </FormItemWrapper>
    );
}

function PureFileInput({ value, onChange }: any) {
    const [previewOpen, setPreviewOpen] = useState(false);
    const [previewImage, setPreviewImage] = useState("");
    const [previewTitle, setPreviewTitle] = useState("");
    const [fileList, setFileList] = useState<UploadFile[]>([]);

    const handleCancel = () => setPreviewOpen(false);

    const handlePreview = async (file: UploadFile) => {
        if (!file.url && !file.preview) {
            file.preview = await getBase64(file.originFileObj as RcFile);
        }

        setPreviewImage(file.url || (file.preview as string));
        setPreviewOpen(true);
        setPreviewTitle(
            file.name || file.url!.substring(file.url!.lastIndexOf("/") + 1)
        );
    };

    const handleChange: UploadProps["onChange"] = ({ fileList: newFileList }) =>
        setFileList(newFileList);

    const uploadButton = (
        <div>
            <PlusIcon />
            <div style={{ marginTop: 8 }}>Upload</div>
        </div>
    );
    return (
        <div className={"lib-actual-upload"}>
            <Upload
                action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                listType="picture-card"
                fileList={fileList}
                onPreview={handlePreview}
                onChange={handleChange}
            >
                {fileList.length >= 8 ? null : uploadButton}
            </Upload>
            <Modal
                open={previewOpen}
                title={previewTitle}
                footer={null}
                onCancel={handleCancel}
            >
                <img
                    alt="example"
                    style={{ width: "100%" }}
                    src={previewImage}
                />
            </Modal>
        </div>
    );
}

const getBase64 = (file: RcFile): Promise<string> =>
    new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result as string);
        reader.onerror = (error) => reject(error);
    });

interface FileInputProps extends FormItemProps<string> {}
