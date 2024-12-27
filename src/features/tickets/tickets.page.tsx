import React, { useState, useEffect, useMemo } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import StickyHeader from 'src/components/StickyHeader';
import GlobalStyle from 'src/global-style';
import TicketsService, { UserExistsDto } from './tickets.service';
import LimitedTextField from 'src/components/LimitedTextField/limited-text-field.component';
import { Button } from '@mui/material';

type UserInfo = UserExistsDto & {
    password?: string;
    confirmation?: string;
}

export default function Tickets() {
    const [searchParams] = useSearchParams();
    const navigate = useNavigate();
    const user = searchParams.get("user");
    const [isLoading, setIsLoading] = useState(true);
    const [isSuccess, setIsSuccess] = useState(false);
    const [userInfo, setUserInfo] = useState<UserInfo>();
    const service = useMemo(() => new TicketsService(), []);

    useEffect(() => {
        if (!user) {
            navigate('/');
            return;
        }
        service.checkUserExists(user)
            .then((response) => {
                if (response === "") {
                    navigate('/');
                } else {
                    setUserInfo(response);
                    setIsLoading(false);
                }
            });
    }, [user, navigate, service]);

    if (!user) {
        return null;
    }

    const confirmationHelpText = () => {
        if (userInfo?.password !== userInfo?.confirmation) {
            return 'As senhas não conferem';
        }

        if (!userInfo?.confirmation || userInfo.confirmation.trim() === '') {
            return 'Campo obrigatório';
        }

        return null;
    }

    const isConfirmationError = (): boolean => confirmationHelpText() !== null;

    const onConfirm = async () => {
        if (isConfirmationError()) {
            return;
        }

        if (userInfo?.password) {

            const saved = await service.savePassword(user, userInfo.password);
            await setIsSuccess(saved);
            await setUserInfo(undefined);
        }
    }

    const onLogin = async () => {
        if (userInfo?.password) {
            const saved = await service.performLogin(user, userInfo.password);
            console.log(saved);
            await setUserInfo(undefined);
        }
    }

    return <>
        <GlobalStyle />
        <StickyHeader />
        <div className="container">
            {isLoading && <h1>{'CARREGANDO...'}</h1>}

            {!isLoading && <h1>{`Usuário '${user}'`}</h1>}

            {userInfo && userInfo.hasPassword && <>
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
                    onClick={onLogin}>
                    Salvar
                </Button>
            </>}

            {isSuccess && <>
                <h1>{`Senha cadastrada com sucesso!`}</h1>
                <a href={window.location.href}>Efetuar login</a>
            </>}

            {userInfo && !userInfo.hasPassword && <>
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
                    error={isConfirmationError()}
                    helperText={confirmationHelpText()}
                />

                <Button
                    variant="contained"
                    onClick={onConfirm}>
                    Salvar
                </Button>
            </>}
        </div>
    </>
}