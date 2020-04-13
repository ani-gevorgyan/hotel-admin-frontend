import axios from 'axios';
import {
    message
} from 'antd';

import history from '../routes/history';

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
            successMessage('Loaded');
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
            successMessage('Loaded');
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
            successMessage('Loaded');
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
            successMessage('Loaded');
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
            successMessage('Loaded');
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


export const signInAdmin = (data) => {
    const url = 'http://localhost:4000/api/v1/users/admin';
    return axios
        .post(url, data)
        .then(res => {
            console.log(res);
            localStorage.setItem('token', res.headers.authorization);
            if (localStorage.getItem('token') === res.headers.authorization) {
                setTimeout(() => {
                    history.push('/dashboard');
                    window.location.reload(true);
                }, 500);
            }
        })
        .catch(e => {
            const err = {
                ...e
            }
            console.log(err);
        });
}