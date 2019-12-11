import axios from 'axios';

const domain = 'http://api-dds.tuan-ltu.com';

export default {
    callApi: async json => {
        const { url, body } = json;
        try {
            let data = await axios.post(domain + url, body);
            return data;
        } catch (error) {
            console.log(error);
        }
    }
};
