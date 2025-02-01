import { Button, TextField } from "@mui/material";
import { useState } from "react";
import StickyHeader from "src/components/StickyHeader";
import GlobalStyle from "src/global-style";
import './contact-form.css'
import YesNoCombo from "src/components/YesNoCombo/yesnocombo.component";
import LimitedTextField from "src/components/LimitedTextField/limited-text-field.component";
import ContactFormService from "./contact-form.service";
import moment from "moment";
import { toast } from "react-toastify";

interface FormValues {
    nome: string,
    whatsapp: string,
    email?: string,
    quantasPessoasMais?: number,
    temDocumento?: boolean,
    vemComCriancas?: boolean,
    vemComEmpregoGarantido?: boolean,
    jaViveuFora?: boolean,
    falaOutrosIdiomas?: boolean,
    ajudaSobreTecnologia?: boolean,
    quandoVem?: string,
    areaTrabalho?: string,
    perspectivaMalaga?: string,
}

export default function ContactForm() {
    const service = new ContactFormService();
    const [form, setForm] = useState<FormValues>({} as FormValues);
    const [sent, setSent] = useState<boolean>(false);

    const toWords = (text: string) => {
        const result = text.replace(/([A-Z])/g, " $1");
        return result.charAt(0).toUpperCase() + result.slice(1);
    }

    const defineValue = (value: any) => {
        if ((typeof value) === 'boolean')
            return value === true ? 'Sim' : 'Não'

        return value;
    }

    const onSendInfo = async () => {
        const maxTextAllowed = 1700;
        if (!isFormValid()) return;
        localStorage.setItem('lastmessage', moment().toString());

        const props = Object.getOwnPropertyNames(form).filter(f => f !== 'whatsapp').sort();

        let currentMessage = `**Inicio da mensagem de '${form.whatsapp}**'\n\n`;
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
        let lastMessage = localStorage.getItem('lastmessage');
        if (lastMessage) {
            const lastMessageMinutes = moment().diff(lastMessage, 'minutes');
            if (lastMessageMinutes < 10) {
                toast.error('É necessário aguardar alguns minutos para enviar outro formulário.');

                return false;
            }
        }

        if (!form.nome || form.nome.trim() === '') return false;
        if (!form.whatsapp || form.whatsapp.trim() === '') return false;

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
                <h1>Formulario de contato</h1>
                <h5>{'Preencha os dados a seguir para que nosso orçamento seja o mais assertivo para o seu caso.'}</h5>

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
                <TextField
                    className='txt-box txt-box-medium'
                    id="numero-pessoas"
                    label="Quantas pessoas virão com você?"
                    variant="standard"
                    type="number"
                    value={form.quantasPessoasMais}
                    onChange={(e) => setForm({ ...form, quantasPessoasMais: parseInt(e.target.value) })}
                />

                {form.quantasPessoasMais && form.quantasPessoasMais > 0 ? <YesNoCombo
                    id="virao-criancas"
                    label='Virão crianças com você?'
                    onChange={async (e) => await setForm({ ...form, vemComCriancas: e })}
                /> : <></>}

                <YesNoCombo
                    id="possui-visto"
                    label='Possui visto para viver e trabalhar na Espanha?'
                    onChange={async (e) => await setForm({ ...form, temDocumento: e })}
                />

                <YesNoCombo
                    id="ja-vem-com-emprego"
                    label='Já vem com emprego garantido?'
                    onChange={async (e) => await setForm({ ...form, vemComEmpregoGarantido: e })}
                />

                <YesNoCombo
                    id="ajuda-sobre-tecnologia"
                    label='Trabalha/pretende trabalhar na área de Tecnologia em Málaga?'
                    onChange={async (e) => await setForm({ ...form, ajudaSobreTecnologia: e })}
                />

                <YesNoCombo
                    id="morou-em-outro-local"
                    label='Já morou em outro país além do Brasil?'
                    onChange={async (e) => await setForm({ ...form, jaViveuFora: e })}
                />

                <YesNoCombo
                    id="outros-idiomas"
                    label='Fala outro(s) idioma(s)?'
                    onChange={async (e) => await setForm({ ...form, falaOutrosIdiomas: e })}
                />

                <LimitedTextField
                    maxLength={25}
                    className='txt-box txt-box-medium'
                    id="quando-pretende-mudar"
                    label="Quando pretende se mudar?"
                    variant="standard"
                    value={form.quandoVem}
                    onChange={(e) => setForm({ ...form, quandoVem: e.target.value })}
                />

                <LimitedTextField
                    maxLength={50}
                    className='txt-box txt-box-medium'
                    id="area-trabalho-atual"
                    label="Área de trabalho atual"
                    variant="standard"
                    value={form.areaTrabalho}
                    onChange={(e) => setForm({ ...form, areaTrabalho: e.target.value })}
                />

                <LimitedTextField
                    maxLength={300}
                    className='txt-box txt-box-medium'
                    id="perspectivas-malaga"
                    label="Quais suas perspectivas sobre Málaga?"
                    variant="outlined"
                    multiline
                    rows={4}
                    value={form.perspectivaMalaga}
                    onChange={(e) => setForm({ ...form, perspectivaMalaga: e.target.value })}
                />

                <Button
                    variant="contained"
                    onClick={onSendInfo}
                >
                    Solicitar Orçamento
                </Button>
            </>}
        </div>

    </>
}
