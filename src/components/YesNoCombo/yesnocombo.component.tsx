import { FormControl, InputLabel, Select, SxProps } from "@mui/material";
import { useState } from "react";

interface YesNoComboProps {
    label: string,
    id: string,
    onChange: (e?: boolean) => Promise<void>,
    sx?: SxProps
}

export default function YesNoCombo({ onChange, label, id, sx }: YesNoComboProps) {
    const [value, setValue] = useState<number>(-1);

    const internalChange = async (value: any) => {
        await setValue(value.target.value);
        await onChange(value.target.value !== undefined
            ? value.target.value === "1"
            : undefined
        )
    }

    return <FormControl variant="standard">
        <InputLabel>{label}</InputLabel>
        <Select
            native
            key={'id-yes-no-combo'}
            onChange={internalChange}
            id={id}
            value={value}
            label={'Teste'}
            sx={sx ?? { width: 380, mb: '20px' }}
            inputProps={{
                name: 'type-interval',
                id: 'type-id-interval',
                shrink: 'true'
            }}
        >
            <option aria-label="None" value="-1" />
            <option value={'0'}>Não</option>
            <option value={'1'}>Sim</option>
        </Select>
    </FormControl>
}