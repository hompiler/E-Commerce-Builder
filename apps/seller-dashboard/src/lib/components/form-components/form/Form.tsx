import React, { useState } from "react";
import { Form as AntForm, FormInstance } from "antd";
import useFormErrors from "./use-form-errors";
import { DefaultObject } from "@types";

export const useForm = () => AntForm.useForm();

export default function Form(props: FormProps) {
    const _form = useForm();
    const form: FormInstance = (props.form ?? _form) as FormInstance;
    const [errors, setErrors] = useState<Array<DefaultObject>>(
        props.errors ?? []
    );

    useFormErrors(form, errors, () => {
        setErrors([]);
        props.clearErrors?.();
    });
    return (
        <AntForm
            onFinish={props.onFinish}
            layout={props.layout ?? "vertical"}
            className={["form-container", props.className].join(" ")}
        >
            {props.children}
        </AntForm>
    );
}

interface FormProps {
    onFinish: (values: DefaultObject) => any;
    children: React.ReactNode;
    className?: string;
    layout?: "vertical" | "horizontal";
    form?: FormInstance<any>;
    errors?: Array<DefaultObject>;
    clearErrors?: () => any;
}
