import axios from 'axios';

export function createHotel(url, data) {
    axios
        .post(`${url}`, data)
        .then(res => {
            console.log(res.data.message);
        })
        .catch(e => {
            const err = {
                ...e
            }
            console.log(err.response.data.message)
        })
}