import axios from 'axios';

const baseURL = "";

async function compareFaces(data) {
    try {
        /*const response = await axios.post(baseURL, data);
        return response;*/

        return data;

    } catch (error) {
        console.log(error);
    }
}

export default compareFaces;