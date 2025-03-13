import { Button } from "@mui/material";
import { useState } from "react";
import StickyHeader from "src/components/StickyHeader";
import GlobalStyle from "src/global-style";
import './contact-form.css'
import LimitedTextField from "src/components/LimitedTextField/limited-text-field.component";
import moment from "moment";
import { toast } from "react-toastify";
import TelegramService from "src/infrastructure/telegram.service";
import { defineValue, maxTextAllowed, toWords } from "./common-functions";

interface FormValues {
    nome: string,
    whatsapp: string,
    email?: string,
    ondeNosConheceu?: string,
    descricaoNegocio?: string,
}

const lastMessageKey = 'lastmessage-partner';

export default function PartnerContactForm() {
    const service = new TelegramService();
    const [form, setForm] = useState<FormValues>({} as FormValues);
    const [sent, setSent] = useState<boolean>(false);

    const onSendInfo = async () => {
        
        if (!isFormValid()) return;
        localStorage.setItem(lastMessageKey, moment().toString());

        const props = Object.getOwnPropertyNames(form).filter(f => f !== 'whatsapp').sort();

        let currentMessage = `!! CONTATO DE ANUNCIANTE !!\n\n`;
        currentMessage += `**Inicio da mensagem de '${form.whatsapp}**'\n\n`;
        props.forEach(async (prop: string) => {
            const tsKey = prop as keyof {};
            currentMessage += `${toWords(prop)}: ${defineValue(form[tsKey])}\n\n`;


            if (currentMessage.length >= maxTextAllowed) {
                await service.sendMessage(currentMessage);
                currentMessage = '';
            }
        });

        if (currentMessage !== '') {
            await service.sendMessage(currentMessage);
        }

        await setSent(true);
    }

    const isFormValid = (): boolean => {
        //prevent several messages at once
        let lastMessage = localStorage.getItem(lastMessageKey);
        if (lastMessage) {
            const lastMessageMinutes = moment().diff(lastMessage, 'minutes');
            if (lastMessageMinutes < 10) {
                toast.error('É necessário aguardar alguns minutos para enviar outro formulário.');

                return false;
            }
        }

        if (!form.nome || form.nome.trim() === '' ||
            !form.whatsapp || form.whatsapp.trim() === '') {
            toast.error('É necessário informar os campos obrigatórios.');
            return false;
        }

        return true;
    }

    return <>
        <GlobalStyle />
        <StickyHeader />
        <div className="container">
            {sent ? <>
                <h5>{'Sua mensagem foi enviada com sucesso!'}</h5>
                <a className="back" href="/">{'Voltar ao inicio'}</a>
            </> : <>
                <h1>Anuncie conosco - Contato</h1>
                <h5>{'Preencha os dados a seguir que entraremos em contato em breve'}</h5>

                <LimitedTextField
                    maxLength={80}
                    className='txt-box txt-box-medium'
                    id="nome"
                    label="Nome e sobrenome"
                    variant="standard"
                    value={form.nome}
                    onChange={(e) => setForm({ ...form, nome: e.target.value })}
                    error={!form.nome || form.nome.trim() === ''}
                    helperText={!form.nome || form.nome.trim() === '' ? 'Campo obrigatório' : ''}
                />

                <LimitedTextField
                    maxLength={30}
                    className='txt-box txt-box-medium'
                    id="wpp-contato"
                    label="Whatsapp"
                    variant="standard"
                    value={form.whatsapp}
                    onChange={(e) => setForm({ ...form, whatsapp: e.target.value })}
                    error={!form.whatsapp || form.whatsapp.trim() === ''}
                    helperText={'Obrigatório (Adicione o código do país. Ex: +553298852-2331)'}
                />
                <LimitedTextField
                    maxLength={30}
                    className='txt-box txt-box-medium'
                    id="email-contato"
                    label="E-mail"
                    type="email"
                    variant="standard"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                />

                <LimitedTextField
                    maxLength={300}
                    className='txt-box txt-box-medium'
                    id="onde-conheceu"
                    label="Onde conheceu o Diário de Rolê?"
                    variant="outlined"
                    multiline
                    rows={4}
                    value={form.ondeNosConheceu}
                    onChange={(e) => setForm({ ...form, ondeNosConheceu: e.target.value })}
                />

                <LimitedTextField
                    maxLength={300}
                    className='txt-box txt-box-medium'
                    id="descricao-negocio"
                    label="Descreva um pouco seu negócio"
                    variant="outlined"
                    multiline
                    rows={4}
                    value={form.descricaoNegocio}
                    onChange={(e) => setForm({ ...form, descricaoNegocio: e.target.value })}
                />

                <Button
                    variant="contained"
                    onClick={onSendInfo}
                >
                    {'Enviar Informações'}
                </Button>
            </>}
        </div>

    </>
}
