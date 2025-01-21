import { Button } from "@mui/material";
import { MouseEventHandler, useState } from "react";
import LimitedTextField from "src/components/LimitedTextField/limited-text-field.component";
import { UserInfo } from "./tickets.page";

interface LoginProps {
    onLogin: MouseEventHandler<HTMLButtonElement> | undefined;
    userInfo: UserInfo;
}

export default function Login(props: LoginProps) {
    const [userInfo, setUserInfo] = useState<UserInfo>(props.userInfo);
    return <>
    <h5>{`Bem-vindo(a) de volta!`}</h5>
    <LimitedTextField
        maxLength={80}
        className='txt-box txt-box-small'
        id="senha"
        label="Informe sua senha"
        variant="standard"
        type="password"
        value={userInfo.password}
        onChange={(e) => setUserInfo({ ...userInfo, password: e.target.value })}
        error={!userInfo.password || userInfo.password.trim() === ''}
        helperText={!userInfo.password || userInfo.password.trim() === '' ? 'Campo obrigatório' : ''}
    />
    <Button
        variant="contained"
        onClick={props.onLogin}>
        Salvar
    </Button>
</>
}