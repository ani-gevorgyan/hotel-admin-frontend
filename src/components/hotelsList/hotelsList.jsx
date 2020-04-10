import React, { useEffect } from 'react';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

import Hotel from '../hotel/hotel';
import { getAllHotels } from '../../services/services';

export default function HotelsList() {
    const url = 'http://localhost:4000/api/v1/hotels'
    const [hotels, setHotel] = React.useState([]);

    useEffect(() => {
        const res = getAllHotels(url);
        res
            .then(res => {
                setHotel(res.data);
            })
            .catch(err => console.log(err))
    }, [])

    return (
        <>
            <TableHead>
                <TableRow>
                    <TableCell style={{ fontWeight: '1000' }}>Hotel</TableCell>
                    <TableCell style={{ fontWeight: '1000' }}>Address</TableCell>
                    <TableCell style={{ fontWeight: '1000' }}>Status</TableCell>
                    <TableCell style={{ fontWeight: '1000' }}>Room Count</TableCell>
                    <TableCell style={{ fontWeight: '1000' }}>Price</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {hotels.map((hotel) => (
                    <Hotel hotel={hotel} />
                ))}
            </TableBody>
        </>
    )
}
