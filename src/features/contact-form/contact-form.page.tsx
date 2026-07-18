import { Checkbox, FormControl, FormControlLabel, InputLabel, Select, TextField } from "@mui/material";
import { useState } from "react";
import StickyHeader from "src/components/StickyHeader";
import './contact-form.css'
import LimitedTextField from "src/components/LimitedTextField/limited-text-field.component";
import moment from "moment";
import { toast } from "react-toastify";
import TelegramService from "src/infrastructure/telegram.service";
import { defineValue, maxTextAllowed, toWords } from "./common-functions";
import { ThemeProvider } from "styled-components";
import { GlobalStyle, useThemeMode } from "src/global-style";
import RoundedButton from "src/components/RoundedButton";

type QuandoVemType = 'Ainda não sabe' | 'Esse ano' | 'Ano que vem' | 'Daqui a dois anos';

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
    quandoVem?: QuandoVemType,
    areaTrabalho?: string,
    perspectivaMalaga?: string,
}

const lastMessageKey = 'lastmessage';

const validateWhatsapp = new RegExp('^[+]*[0-9]{7,}$');

export default function ContactForm() {
    const service = new TelegramService();
    const [form, setForm] = useState<FormValues>({
        quantasPessoasMais: 0,
        temDocumento: false,
        vemComCriancas: false,
        vemComEmpregoGarantido: false,
        jaViveuFora: false,
        falaOutrosIdiomas: false,
        quandoVem: "Ainda não sabe",
        areaTrabalho: '',
        perspectivaMalaga: '',
    } as FormValues);
    const [sent, setSent] = useState<boolean>(false);
    const { themeMode } = useThemeMode();

    const onSendInfo = async () => {
        if (!isFormValid()) return;
        localStorage.setItem(lastMessageKey, moment().toString());

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

        setSent(true);
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

        if (form.whatsapp.trim().length <= 9) {
            toast.error('É necessário informar o DDD e/ou o código do país.');
            return false;
        }

        if (!validateWhatsapp.test(form.whatsapp.trim())) {
            toast.error('O número de Whatsapp deve conter apenas números e o símbolo de + (ex: +553298852-2331).');
            return false;
        }

        return true;
    }

    return <ThemeProvider theme={themeMode}>
        <GlobalStyle theme={themeMode} />
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
                    onChange={(e) => setForm(f => ({ ...f, nome: e.target.value }))}
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
                    onChange={(e) => setForm(f => ({ ...f, whatsapp: e.target.value }))}
                    error={!form.whatsapp || form.whatsapp.trim() === ''}
                    helperText={'Obrigatório (Adicione o código do país. Ex: +553298852-2331)'}
                />
                <LimitedTextField
                    maxLength={30}
                    className='txt-box txt-box-medium'
                    id="email-contato"
                    label="E-mail (opcional)"
                    type="email"
                    variant="standard"
                    value={form.email}
                    onChange={(e) => setForm(f => ({ ...f, email: e.target.value }))}
                />
                <TextField
                    className='txt-box txt-box-medium'
                    id="numero-pessoas"
                    label="Quantas pessoas virão com você?"
                    variant="standard"
                    type="number"
                    value={form.quantasPessoasMais}
                    onChange={(e) => setForm(f => ({ ...f, quantasPessoasMais: parseInt(e.target.value) || 0 }))}
                />

                <div style={{ display: 'flex', flexDirection: 'column' }}>
                    {form.quantasPessoasMais && form.quantasPessoasMais > 0 ? <FormControlLabel
                        control={
                            <Checkbox
                                checked={form.vemComCriancas}
                                onChange={async (e) => setForm(f => ({ ...f, vemComCriancas: e.target.checked }))}
                                name="vem_com_criancas"
                                color="primary"
                            />
                        }
                        label="Virão crianças comigo"
                        id="virao-criancas"
                    /> : <></>}

                    <FormControlLabel
                        control={
                            <Checkbox
                                checked={form.temDocumento}
                                onChange={async (e) => setForm(f => ({ ...f, temDocumento: e.target.checked }))}
                                name="possui_visto"
                                color="primary"
                            />
                        }
                        label="Possuo visto/documentos para viver e trabalhar na Espanha"
                        id="possui-visto"
                    />

                    <FormControlLabel
                        control={
                            <Checkbox
                                checked={form.vemComEmpregoGarantido}
                                onChange={async (e) => setForm(f => ({ ...f, vemComEmpregoGarantido: e.target.checked }))}
                                name="vem_com_emprego_garantido"
                                color="primary"
                            />
                        }
                        label="Estou indo com emprego garantido"
                        id="vem-com-emprego-garantido"
                    />


                    <FormControlLabel
                        control={
                            <Checkbox
                                checked={form.jaViveuFora}
                                onChange={async (e) => setForm(f => ({ ...f, jaViveuFora: e.target.checked }))}
                                name="ja_viveu_fora"
                                color="primary"
                            />
                        }
                        label="Já vivi em outro país além do Brasil"
                        id="ja-viveu-fora"
                    />

                    <FormControlLabel
                        control={
                            <Checkbox
                                checked={form.falaOutrosIdiomas}
                                onChange={async (e) => setForm(f => ({ ...f, falaOutrosIdiomas: e.target.checked }))}
                                name="fala_outros_idiomas"
                                color="primary"
                            />
                        }
                        label="Falo outro(s) idioma(s)"
                        id="outros-idiomas"
                    />
                </div>

                <FormControl variant="standard">
                    <InputLabel
                    shrink
                    >{'Quando pretende se mudar?'}</InputLabel>
                    <Select
                        native
                        key={'quando-pretende-mudar'}
                        onChange={(e) => setForm(f => ({ ...f, quandoVem: e.target.value as QuandoVemType }))}
                        id={'quando-pretende-mudar'}
                        value={form.quandoVem}
                        label={'Teste'}
                        sx={{ width: 380, mb: '20px' }}                        
                    >
                        <option value={'Ainda não sabe'}>Ainda não sei</option>
                        <option value={'Esse ano'}>Esse ano</option>
                        <option value={'Ano que vem'}>Ano que vem</option>
                        <option value={'Daqui a dois anos'}>Daqui a dois anos</option>
                    </Select>
                </FormControl>

                <LimitedTextField
                    maxLength={50}
                    className='txt-box txt-box-medium'
                    id="area-trabalho-atual"
                    label="Área de trabalho atual"
                    variant="standard"
                    value={form.areaTrabalho}
                    onChange={(e) => setForm(f => ({ ...f, areaTrabalho: e.target.value }))}
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
                    onChange={(e) => setForm(f => ({ ...f, perspectivaMalaga: e.target.value }))}
                />

                <RoundedButton caption={'Solicitar Orçamento'} style={{
                    textAlign: 'center'
                }}
                    onClick={onSendInfo}
                />
            </>}
        </div>

    </ThemeProvider>
}
