import React, { useState } from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import history from '../../routes/history';

import './createHotel.css';

import { createHotel } from '../../services/services';

export default function CreateHotel() {
    const [name, setName] = useState('');
    const [address, setAddress] = useState('');
    const [roomCount, setRoomCount] = useState(1);
    const [price, setPrice] = useState();
    const [status, setStatus] = useState('active');
    const [isPriceNumber, setIsPriceNumber] = useState(true);
    const [isCountNumber, setIsCountNumber] = useState(true);

    const handleSubmit = (e) => {
        e.preventDefault();
        let url = 'http://localhost:4000/api/v1/hotels';
        const data = {
            name,
            address,
            roomCount,
            price,
            status
        }
        createHotel(url, data);
        setTimeout(() => {
            console.log(data);
            history.push('/dashboard');
        }, 1000);
    }

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

    return (
        <div className='create-hotel-wrapper'>
            <form onSubmit={e => handleSubmit(e)}>
                <Typography variant="h4" className='title'>
                    Create Hotel
                </Typography>
                <Grid container spacing={3} className='form-wrapper'>
                    <Grid item xs={12}>
                        <TextField
                            required
                            id="name"
                            name="name"
                            label="Hotel name"
                            fullWidth
                            autoComplete="name"
                            onChange={e => handleNameChange(e)}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            required
                            id="address"
                            name="address"
                            label="Address line "
                            fullWidth
                            autoComplete="address"
                            onChange={e => handleAddressChange(e)}
                        />
                    </Grid>
                    <Grid item xs={12} sm={4}>
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
                        />
                    </Grid>
                    <Grid item xs={12} sm={4}>
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
                        />

                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <FormControl className='status-field' required>
                            <InputLabel>Status</InputLabel>
                            <Select value={status} onChange={e => handleStatusChange(e)}>
                                <MenuItem value={'active'}>Active</MenuItem>
                                <MenuItem value={'inactive'}>Inactive</MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid item xs={12} className='btn-create-hotel'>
                        <Button variant="contained" color="secondary" style={{ opacity: '0.9' }} type="submit">
                            Create Hotel
                        </Button>
                    </Grid>
                </Grid>
            </form>
        </div>
    )
}
