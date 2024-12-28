import React, { useState, useEffect, useMemo } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import StickyHeader from 'src/components/StickyHeader';
import GlobalStyle from 'src/global-style';
import TicketsService, { UserExistsDto } from './tickets.service';
import LimitedTextField from 'src/components/LimitedTextField/limited-text-field.component';
import { Button } from '@mui/material';
import { toast } from 'react-toastify';
import TicketCard from './ticket.component';

type UserInfo = UserExistsDto & {
    password?: string;
    confirmation?: string;
    tickets?: any[];
}

enum SuccessState {
    None,
    PasswordSaved,
    LoggedIn
}

export default function Tickets() {
    const [searchParams] = useSearchParams();
    const navigate = useNavigate();
    const user = searchParams.get("user");
    const [isLoading, setIsLoading] = useState(true);
    const [successState, setSuccessState] = useState(SuccessState.None);
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

    useEffect(() => {
        if (!userInfo?.hasPassword || !localStorage.getItem('token')) {
            return;
        }

        service.getUserTickets(user!)
            .then((response) => {
                setUserInfo((prevUserInfo) => ({ ...prevUserInfo, tickets: response.tickets, hasPassword: true }));
            });
    }, [userInfo?.hasPassword, user, service]);

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

            await service.savePassword(user, userInfo.password);
            await setSuccessState(SuccessState.PasswordSaved);
            await setUserInfo(undefined);
        }
    }

    const onLogin = async () => {
        if (!userInfo?.password)
            return;

        const loginResult = await service.performLogin(user, userInfo.password);
        localStorage.setItem('token', loginResult.access_token);
        console.log(loginResult);
        await setUserInfo(undefined);
        await setSuccessState(SuccessState.LoggedIn);

        toast.success('Login realizado com sucesso!');

        window.location.reload();
    }

    return <>
        <GlobalStyle />
        <StickyHeader
            menuItems={[
                { text: 'Inicio', link: window.location.pathname + window.location.search },
            ]}
        />
        <div className="container">
            {isLoading && <h1>{'CARREGANDO...'}</h1>}

            {!isLoading && <h1>{`Usuário '${user}'`}</h1>}

            {userInfo && userInfo.hasPassword && userInfo.tickets && <>
                <h3>{`Seus cupons`}</h3>
                <div style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '10px',
                }}>
                    {userInfo.tickets.map((ticket, index) => <TicketCard
                        key={index}
                        title={ticket.title}
                        text={ticket.description}
                    />
                    )}
                </div>
            </>}
            {userInfo && userInfo.hasPassword && !localStorage.getItem('token') && <>
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

            {successState === SuccessState.PasswordSaved && <>
                <h1>{`Senha cadastrada com sucesso!`}</h1>
                <a href={window.location.href}>Clique aqui para efetuar o login</a>
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