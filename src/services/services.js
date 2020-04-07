import axios from 'axios';

export function createHotel(url, data) {
    axios
        .post(url, data)
        .then(res => {
            console.log(res.data.message, res.data.hotel);
        })
        .catch(e => {
            const err = {
                ...e
            }
            console.log(err)
        })
}

export const getAllHotels = (url) => {
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
        })
}

export const getHotelById = (id) => {
    const url = 'http://localhost:4000/hotel/' + id;
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
        })
}

export const deleteHotel = (id) => {
    const url = 'http://localhost:4000/hotels/' + id;
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
        })
}

export const updateHotel = (url, data) => {
    return axios
        .put(url, data)
        .then(res => {
            console.log(res.data)
        })
        .catch(e => console.log(e))
}