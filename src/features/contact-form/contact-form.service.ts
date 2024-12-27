import { BOT_TOKEN, GROUP_ID } from 'src/infrastructure/env';
import { HttpClient } from 'src/infrastructure/httpclient.component';

export class ContactFormService {
    private readonly request: HttpClient;
    private readonly SEND_URL: string = `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage?chat_id=${GROUP_ID}&parse_mode=Markdown&text=`;
    constructor() {
        this.request = new HttpClient();
    }

    public async sendMessage(message: string): Promise<void> {
        await this.request.post(`${this.SEND_URL}${encodeURI(message)}`, { baseURL: '' });
    }
}


export default ContactFormService;