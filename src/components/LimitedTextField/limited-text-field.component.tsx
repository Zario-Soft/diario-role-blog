import { TextField, TextFieldProps } from "@mui/material";
import { useState } from "react";

type LimitedTextFieldProps = TextFieldProps & {
    maxLength: number,
};

export default function LimitedTextField(props: LimitedTextFieldProps) {
    const [value, setValue] = useState<string>();

    const onChange = async (e: any) => {
        let strValue = (e.target.value as String);
        if (strValue.length <= props.maxLength) {
            setValue(e.target.value);
        }
        else {
            const result = strValue.substring(0, props.maxLength);
            setValue(result);
        }

        props.onChange?.(e);
    }

    return <TextField
        {...props}
        onChange={onChange}
        value={value}
    />
}