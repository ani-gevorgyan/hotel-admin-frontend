import React, { useEffect } from 'react';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

import { getAllUsers } from '../../services/services';
import User from '../user/user';

export default function UsersList() {
    const url = 'http://localhost:4000/api/v1/users';
    const [users, setUser] = React.useState([]);

    useEffect(() => {
        const res = getAllUsers(url);
        res
            .then(res => {
                setUser(res.data);
            })
            .catch(err => console.log(err))
    }, [])

    return (
        <>
            <TableHead>
                <TableRow>
                    <TableCell style={{ fontWeight: '1000' }}>First Name</TableCell>
                    <TableCell style={{ fontWeight: '1000' }}>Last Name</TableCell>
                    <TableCell style={{ fontWeight: '1000' }}>Email</TableCell>
                    <TableCell style={{ fontWeight: '1000' }}>Hotel</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {users.map((user) => (
                    <User user={user} />
                ))}
            </TableBody>
        </>
    )
}
