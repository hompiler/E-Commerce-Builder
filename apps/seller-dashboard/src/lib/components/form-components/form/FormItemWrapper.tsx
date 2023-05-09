import React from "react";
import { Form as AntForm } from "antd";
import useFormRules from "../_common/use-form-rules";
import FormItemProps from "@components/form-components/_common/form-elements-proptypes";

export default function FormItemWrapper(props: FormItemWrapper<any>) {
    const rules = useFormRules(props);

    return (
        <AntForm.Item
            className={`lib-form-item ${props.className ?? ""}`}
            name={props.name}
            id={props.id}
            label={props.label}
            rules={[...rules]}
        >
            {props.children}
        </AntForm.Item>
    );
}

interface FormItemWrapper<T> extends FormItemProps<T> {
    children: React.ReactNode;
}
