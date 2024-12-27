import { TextField, TextFieldProps } from "@mui/material";
import { useState } from "react";

type LimitedTextFieldProps = TextFieldProps & {
    maxLength: number,
};

export default function LimitedTextField(props: LimitedTextFieldProps) {
    const [value, setValue] = useState(props.value || '');

    const onChange = async (e: any) => {
        let strValue = (e.target.value as String);
        if (strValue.length <= props.maxLength) {
            await setValue(e.target.value);
        }
        else {
            const result = strValue.substring(0, props.maxLength) as any;
            await setValue(result);
        }

        if (props.onChange)
            await props.onChange(e);
    }

    return <TextField
        {...props}
        onChange={onChange}
        value={value}
    />
}