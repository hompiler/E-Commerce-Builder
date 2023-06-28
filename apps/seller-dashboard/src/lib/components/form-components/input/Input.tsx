import React from "react";
import PropTypes from "prop-types";
import { Input as AntInput } from "antd";
import FormItemWrapper from "@components/form-components/form/FormItemWrapper";
import FormItemProps from "@components/form-components/_common/form-elements-proptypes";

export default function Input(props: InputProps) {
    const commonProps = {
        placeholder: props.placeholder,
        onChange: props.onChange
            ? (e: React.ChangeEvent<any>) => props.onChange?.(e.target.value, e)
            : undefined,
    };
    return (
        <FormItemWrapper
            {...props}
            className={`lib-input ${props.className ?? ""}`}
        >
            {props.type === "password" ? (
                <AntInput.Password prefix={props.icon} {...commonProps} />
            ) : (
                <AntInput
                    type={props.type}
                    prefix={props.icon}
                    {...commonProps}
                />
            )}
        </FormItemWrapper>
    );
}

interface InputProps extends FormItemProps<string> {
    type?: string;
    icon?: React.ReactNode;
}
