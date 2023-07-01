import React from "react";
import FormItemWrapper from "@components/form-components/form/FormItemWrapper";
import { Input } from "antd";
import FormItemProps from "@components/form-components/_common/form-elements-proptypes";

export default function TextArea(props: TextAreaProps) {
    return (
        <FormItemWrapper {...props} className="lib-input-area">
            <Input.TextArea
                value={props.value}
                placeholder={props.placeholder}
                onChange={
                    props.onChange
                        ? (e) => props.onChange?.(e.target.value, e)
                        : undefined
                }
            />
        </FormItemWrapper>
    );
}

interface TextAreaProps extends FormItemProps<string> {}
