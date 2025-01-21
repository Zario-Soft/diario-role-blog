import { Button } from "@mui/material";
import { MouseEventHandler, ReactNode, useState } from "react";
import LimitedTextField from "src/components/LimitedTextField/limited-text-field.component";
import { UserInfo } from "./tickets.page";

interface PasswordRegistryProps {
    onConfirm: MouseEventHandler<HTMLButtonElement> | undefined;
    userInfo: UserInfo;
    isConfirmationError(): boolean;
    confirmationHelpText(): ReactNode;
}

export default function PasswordRegistry(props: PasswordRegistryProps) {
    const [userInfo, setUserInfo] = useState<UserInfo>(props.userInfo);

    return <>
        <h5>{`Vamos começar cadastrando sua senha!`}</h5>
        <LimitedTextField
            maxLength={80}
            className='txt-box txt-box-small'
            id="senha"
            label="Informe uma senha"
            variant="standard"
            type="password"
            value={userInfo.password}
            onChange={(e) => setUserInfo({ ...userInfo, password: e.target.value })}
            error={!userInfo.password || userInfo.password.trim() === ''}
            helperText={!userInfo.password || userInfo.password.trim() === '' ? 'Campo obrigatório' : ''}
        />

        <LimitedTextField
            maxLength={80}
            className='txt-box txt-box-small'
            id="senha"
            label="Confirme sua senha"
            variant="standard"
            type="password"
            value={userInfo.confirmation}
            onChange={(e) => setUserInfo({ ...userInfo, confirmation: e.target.value })}
            error={props.isConfirmationError()}
            helperText={props.confirmationHelpText()}
        />

        <Button
            variant="contained"
            onClick={props.onConfirm}>
            Salvar
        </Button>
    </>
}