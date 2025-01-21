import React, { useState, useEffect, useMemo } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import StickyHeader from 'src/components/StickyHeader';
import GlobalStyle from 'src/global-style';
import TicketsService, { UserExistsDto } from './tickets.service';
import { toast } from 'react-toastify';
import PasswordSuccess from './password-success.component';
import PasswordRegistry from './password-registry.component';
import Login from './login.component';
import TicketsArea from './tickets-area.component';

export type UserInfo = UserExistsDto & {
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
            {<h1>{isLoading ? 'CARREGANDO...' : `Usuário '${user}'`}</h1>}

            {userInfo && userInfo.hasPassword && userInfo.tickets && <TicketsArea
                userInfo={userInfo}
            />}

            {userInfo && userInfo.hasPassword && !localStorage.getItem('token') && <Login
                onLogin={onLogin}
                userInfo={userInfo}
            />}

            {successState === SuccessState.PasswordSaved && <PasswordSuccess />}

            {userInfo && !userInfo.hasPassword && <PasswordRegistry
                onConfirm={onConfirm}
                userInfo={userInfo}
                isConfirmationError={isConfirmationError}
                confirmationHelpText={confirmationHelpText}
            />}
        </div>
    </>
}