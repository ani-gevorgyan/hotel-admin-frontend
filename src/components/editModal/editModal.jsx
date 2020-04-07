import React, { useState, useEffect } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';

import { updateHotel } from '../../services/services';

export default function EditModal({ open, modalHandleCancel, onEdit, hotel }) {
    const [name, setName] = useState('');
    const [address, setAddress] = useState('');
    const [roomCount, setRoomCount] = useState(1);
    const [price, setPrice] = useState();
    const [status, setStatus] = useState('active');
    const [isPriceNumber, setIsPriceNumber] = useState(true);
    const [isCountNumber, setIsCountNumber] = useState(true);

    useEffect(() => {
        setName(hotel.name)
        setAddress(hotel.address)
        setRoomCount(hotel.roomCount)
        setPrice(hotel.price)
        setStatus(hotel.status)
    }, [hotel])

    const handleStatusChange = (e) => {
        let status = e.target.value;
        setStatus(status);
    }

    const handlePriceChange = (e) => {
        let price = +e.target.value;
        if (isNaN(price)) {
            setIsPriceNumber(false);
        } else if (typeof price === 'number') {
            setPrice(price);
            setIsPriceNumber(true);
        }
    }
    const handleRoomCountChange = (e) => {
        let roomCount = +e.target.value;
        if (isNaN(roomCount)) {
            setIsCountNumber(false);
        } else if (typeof roomCount === 'number') {
            setRoomCount(roomCount);
            setIsCountNumber(true);
        }
    }
    const handleAddressChange = (e) => {
        let address = e.target.value;
        setAddress(address);
    }
    const handleNameChange = (e) => {
        let name = e.target.value;
        setName(name);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        let url = 'http://localhost:4000/hotels/' + hotel._id;
        const data = {
            name,
            address,
            roomCount,
            price,
            status
        }
        updateHotel(url, data);
        modalHandleCancel();
        setTimeout(() => {
            console.log(data);
            window.location.reload(true);
        }, 500);
    }

    return (
        <>
            <Dialog open={open} onClose={modalHandleCancel}>
                <DialogTitle>Edit Hotel</DialogTitle>
                <DialogContent>
                    <TextField
                        required
                        id="name"
                        name="name"
                        label="Hotel name"
                        fullWidth
                        autoComplete="name"
                        onChange={e => handleNameChange(e)}
                        value={name}
                    />
                    <TextField
                        required
                        id="address"
                        name="address"
                        label="Address line "
                        fullWidth
                        autoComplete="address"
                        onChange={e => handleAddressChange(e)}
                        value={address}
                    />
                    <TextField
                        required
                        id="roomCount"
                        name="roomCount"
                        label="Room Count"
                        fullWidth
                        autoComplete="roomCount"
                        onChange={e => handleRoomCountChange(e)}
                        helperText={isCountNumber ? '' : 'Input should be a number'}
                        error={!isCountNumber}
                        value={roomCount}
                    />
                    <TextField
                        required
                        id="price"
                        name="price"
                        label="Price"
                        fullWidth
                        autoComplete="price"
                        onChange={e => handlePriceChange(e)}
                        helperText={isPriceNumber ? '' : 'Input should be a number'}
                        error={!isPriceNumber}
                        value={price}
                    />
                    <FormControl className='status-field' required>
                        <InputLabel>Status</InputLabel>
                        <Select value={status} onChange={e => handleStatusChange(e)}>
                            <MenuItem value={'active'}>Active</MenuItem>
                            <MenuItem value={'inactive'}>Inactive</MenuItem>
                        </Select>
                    </FormControl>
                </DialogContent>
                <DialogActions>
                    <Button onClick={modalHandleCancel} color="primary">
                        Cancel
                    </Button>
                    <Button onClick={e => handleSubmit(e)} color="primary">
                        Save
                    </Button>
                </DialogActions>
            </Dialog>
        </>
    );
}
