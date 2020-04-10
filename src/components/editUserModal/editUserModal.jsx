import React, { useState, useEffect } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import CircularProgress from '@material-ui/core/CircularProgress';

import './editUserModal.css';

import { updateUser } from '../../services/services';

export default function EditModal({ open, modalHandleCancel, user }) {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState(1);
    const [hotel, setHotel] = useState('');
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setFirstName(user.firstName);
        setLastName(user.lastName);
        setEmail(user.email);
        setHotel(user.hotelId);
    }, [])

    const handleHotelChange = (e) => {
        let hotel = e.target.value;
        setHotel(hotel);
    }

    const handleEmailChange = (e) => {
        let email = e.target.value;
        setEmail(email);
    }

    const handleLastNameChange = (e) => {
        let lastName = e.target.value;
        setLastName(lastName);
    }
    const handleFirstNameChange = (e) => {
        let firstName = e.target.value;
        setFirstName(firstName);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        let url = 'http://localhost:4000/api/v1/users/' + user._id;
        const data = {
            firstName,
            lastName,
            email,
            hotelId: hotel,
        }
        updateUser(url, data);
        modalHandleCancel();
        setLoading(true);
        setTimeout(() => {
            console.log(data);
            window.location.reload(true);
        }, 500);
    }

    if (loading) {
        return (
            <div className='spinner'>
                <CircularProgress color='secondary' position='center' />
            </div>
        )
    }

    return (
        <>
            <Dialog open={open} onClose={modalHandleCancel}>
                <DialogTitle>Edit User</DialogTitle>
                <DialogContent>
                    <TextField
                        required
                        id="first-name"
                        name="first-name"
                        label="First Name"
                        fullWidth
                        autoComplete="first name"
                        onChange={e => handleFirstNameChange(e)}
                        value={firstName}
                    />
                    <TextField
                        required
                        id="last-name"
                        name="last-name"
                        label="Last Name"
                        fullWidth
                        autoComplete="last name"
                        onChange={e => handleLastNameChange(e)}
                        value={lastName}
                    />
                    <TextField
                        required
                        id="email"
                        name="email"
                        label="Email Address"
                        fullWidth
                        autoComplete="email"
                        onChange={e => handleEmailChange(e)}
                        value={email}
                    />
                    <TextField
                        required
                        id="hotel"
                        name="hotel"
                        label="Hotel"
                        fullWidth
                        autoComplete="hotel"
                        onChange={e => handleHotelChange(e)}
                        value={hotel}
                    />
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
