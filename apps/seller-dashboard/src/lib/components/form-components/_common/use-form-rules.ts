import React, { useMemo } from "react";
import FormItemProps from "@components/form-components/_common/form-elements-proptypes";
import { DefaultObject } from "@types";

export default function useFormRules<T>(props: FormItemProps<T>) {
    return useMemo(() => {
        const rules: Array<DefaultObject> = [];
        rules.concat(props.rules);
        if (props.required)
            rules.push({
                required: true,
                message: props.requiredMessage ?? "This field is required",
            });

        return rules;
    }, [props.required, props.requiredMessage, props.rules]);
}
