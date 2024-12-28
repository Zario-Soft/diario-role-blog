import { HttpClient } from 'src/infrastructure/httpclient.component';

export interface UserExistsDto {
    hasPassword: boolean;
}

export class TicketsService {
    private readonly request: HttpClient;
    constructor() {
        this.request = new HttpClient();
    }

    public async checkUserExists(userInfo: string): Promise<any> {
        const { data } = await this.request.get(`customers/${userInfo}`);

        return data;
    }

    public async savePassword(userInfo: string, password: string): Promise<boolean> {
        const { data } = await this.request.post(`customers/${userInfo}`, { password });

        return data;
    }

    public async performLogin(userInfo: string, password: string): Promise<{ access_token: string }> {
        const { data } = await this.request.post(`auth/login`, { username: userInfo, password });

        return data;
    }

    public async getUserTickets(userInfo: string): Promise<any> {
        const { data } = await this.request.get(`customers/${userInfo}/tickets`);

        return data;
    }
}


export default TicketsService;