import axios from 'axios';
import {
    message
} from 'antd';

export const errorMessage = (msg = '') => {
    message.error(msg, [10])
}

export const successMessage = (msg) => {
    message.success(msg, [10])
}

export function createHotel(url, data) {
    axios
        .post(url, data)
        .then(res => {
            console.log(res.data.message, res.data.hotel);
            successMessage(res.data.message);
        })
        .catch(e => {
            const err = {
                ...e
            }
            console.log(err)
            errorMessage(err.response.data.error);
        })
}

export const getAllHotels = (url) => {
    return axios
        .get(url)
        .then(res => {
            console.log(res.data);
            successMessage(res.data.message);
            return res.data
        })
        .catch(e => {
            const err = {
                ...e
            }
            console.log(err);
            errorMessage(err.response.data.message)
        })
}

export const getHotelById = (id) => {
    const url = 'http://localhost:4000/api/v1/hotels/' + id;
    return axios
        .get(url)
        .then(res => {
            console.log(res.data);
            return res.data
        })
        .catch(e => {
            const err = {
                ...e
            }
            console.log(err);
            errorMessage(err.response.data.message)
        })
}

export const deleteHotel = (id) => {
    const url = 'http://localhost:4000/api/v1/hotels/' + id;
    axios
        .delete(url)
        .then(res => {
            console.log(res.data);
        })
        .catch(e => {
            const err = {
                ...e
            }
            console.log(err);
            errorMessage(err.response.data.error);
        })
}

export const updateHotel = (url, data) => {
    return axios
        .put(url, data)
        .then(res => {
            console.log(res.data);
            successMessage(res.data.message);
        })
        .catch(e => {
            const err = {
                ...e
            }
            console.log(err)
            errorMessage(err.response.data.error);
        })
}


//------------------ USERS ----------------------//

export const getAllUsers = (url) => {
    return axios
        .get(url)
        .then(res => {
            console.log(res.data);
            successMessage(res.data.message);
            return res.data
        })
        .catch(e => {
            const err = {
                ...e
            }
            console.log(err);
            errorMessage(err.response.data.message)
        })
}


export const updateUser = (url, data) => {
    return axios
        .put(url, data)
        .then(res => {
            console.log(res.data);
            successMessage(res.data.message);
        })
        .catch(e => {
            const err = {
                ...e
            }
            console.log(err)
            errorMessage(err.response.data.error);
        })
}

export const deleteUser = (id) => {
    const url = 'http://localhost:4000/api/v1/users/' + id;
    axios
        .delete(url)
        .then(res => {
            console.log(res.data);
        })
        .catch(e => {
            const err = {
                ...e
            }
            console.log(err);
            errorMessage(err.response.data.error);
        })
}