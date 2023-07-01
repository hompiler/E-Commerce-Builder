import React from "react";
import PropTypes from "prop-types";
import { Select as AntSelect } from "antd";
import FormItemWrapper from "@components/form-components/form/FormItemWrapper";
import FormItemProps from "@components/form-components/_common/form-elements-proptypes";

export const Option = AntSelect.Option;

export default function Select(props: SelectProps) {
    props.options ??= [];
    return (
        <FormItemWrapper {...props}>
            <AntSelect
                className="lib-select"
                placeholder={props.placeholder}
                allowClear
                mode={props.multiple ? "multiple" : undefined}
                showSearch={props.showSearch}
            >
                {props.options.length > 0
                    ? props.options.map(({ key, ...option }) => (
                          <Option key={key ?? option.name} {...option}>
                              {option.name}
                          </Option>
                      ))
                    : props.children}
            </AntSelect>
        </FormItemWrapper>
    );
}

interface SelectProps extends FormItemProps<string> {
    options?: Array<{
        key: string;
        name: string;
        value: string;
    }>;
    children?: React.ReactNode;
    showSearch?: boolean;
    multiple?: boolean;
}
