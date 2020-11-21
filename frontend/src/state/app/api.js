// api
import { instanceAxios } from '../../utils/api';

export const appAPI = {
    async sendData(namePrev, nameNext, dataPic) {
        try {
            const response = await instanceAxios.post('api', {
                namePrev,
                nameNext,
                dataPic,
            });

            return response.data;
        }
        catch(e) {
            throw new Error(e);
        }
    }
}
