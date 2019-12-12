import Axios from 'axios';

export const Request = {
    async Header() {
        return await Axios.create({
            baseURL: 'http://api-dds.tuan-ltu.com',
            timeout: 10000,
            headers: { 'Content-Type': 'application/json' }
        });
    },
    async postWithParam(url, body) {
        try {
            const api = await this.Header();
            const res = await api.post(url, body);
            return res.data;
        } catch(err){
            console.log('-----ERROR----------', err);
        }
    }
};
