import axios from 'axios';
import {
    message
} from 'antd';
import Cookies from 'js-cookie';

import history from '../routes/history';

export const errorMessage = (msg = '') => {
    message.error(msg, [5])
}

export const successMessage = (msg) => {
    message.success(msg, [5])
}

const ls = localStorage.getItem('token');

const headers = {
    'authorization': `Bearer ${ls}`,
    'Content-Type': 'application/json'
}


export function createHotel(url, data) {
    axios
        .post(url, data, {
            headers
        })
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
        .get(url, {
            headers
        })
        .then(res => {
            successMessage('Loaded');
            return res.data;
        })
        .catch(e => {
            const err = {
                ...e
            }
            errorMessage(err.response.data.error);
            console.log(err);
        });
}

export const getHotelById = (id) => {
    const url = 'http://localhost:4000/api/v1/hotels/' + id;
    return axios
        .get(url, {
            headers
        })
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
        .delete(url, {
            headers
        })
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
            console.log(err);
            errorMessage(err.response.data.error);
        })
}


//------------------ USERS ----------------------//

export const getAllUsers = (url) => {
    return axios
        .get(url, {
            headers
        })
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
            errorMessage(err.response.data.error);
        })
}


export const updateUser = (url, data) => {
    return axios
        .put(url, data, {
            headers
        })
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
        .delete(url, {
            headers
        })
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
    const url = 'http://localhost:4000/api/v1/auth/login';
    return axios
        .post(url, data)
        .then(res => {
            console.log(res);
            if (res.data.token) {
                localStorage.setItem('token', res.data.token);
                setTimeout(() => {
                    // history.push('/dashboard');
                    window.location.reload(true);
                }, 1000);
            }
        })
        .catch(e => {
            const err = {
                ...e
            }
            console.log(err);
            errorMessage(err.response.data.error);
        });
}

export const logOut = () => {
    const url = 'http://localhost:4000/api/v1/auth/logout';
    return axios
        .post(url, {
            headers
        })
        .then(res => {
            localStorage.setItem('token', res.data.data);
            setTimeout(() => {
                //history.push('/');
                window.location.reload(true);
            }, 1000);
        })
        .catch(err => console.log(err))
}