import { DefaultObject } from "@types";
import React from "react";

export default interface FormItemProps<T> {
    name?: string;
    label?: string;
    id?: string;
    required?: boolean;
    requiredMessage?: string;
    rules?: Array<DefaultObject>;
    value?: T;
    onChange?: (value: T, e: React.ChangeEvent<any>) => void;
    noForm?: boolean;
    placeholder?: string;
    disabled?: boolean;
    className?: string;
}
