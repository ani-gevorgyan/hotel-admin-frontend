import React from 'react';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import Button from '@material-ui/core/Button';

import ModalConfirm from '../modalConfirm/modalConfirm';
import { deleteUser } from '../../services/services';
import EditUserModal from '../editUserModal/editUserModal';

// import '../editModal/editModal.css';

export default function User({ user }) {
    const [deleteModalOpen, setDeleteModalOpen] = React.useState(false);
    const [editModalOpen, setEditModalOpen] = React.useState(false);
    const [loading, setLoading] = React.useState(false);

    const onDeleteBtnClick = (e) => {
        e.stopPropagation();
        setDeleteModalOpen(true);
    };

    const onEditBtnClick = (e) => {
        e.stopPropagation();
        setEditModalOpen(true);
    };

    const modalHandleCancel = () => {
        setDeleteModalOpen(false);
        setEditModalOpen(false);
    };

    const handleDeleteUser = (id, e) => {
        deleteUser(id);
        setDeleteModalOpen(false);
        setTimeout(() => {
            console.log(id);
            setLoading(true)
            window.location.reload(false);
        }, 500);
    };

    // if (loading) {
    //     return (
    //         <div className='spinner'>
    //             <CircularProgress color='secondary' position='center' />
    //         </div>
    //     )
    // }

    return (
        <>
            <TableRow key={user._id}>
                <TableCell>{user.firstName}</TableCell>
                <TableCell>{user.lastName}</TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell>{user.hotelId ? user.hotelId : '-'}</TableCell>
                <TableCell>
                    <Button variant="contained" color="primary" size="small"
                        onClick={(e) => {
                            const id = user._id
                            onEditBtnClick(e, id)
                        }}
                        style={{ opacity: '0.9', marginRight: '5px', marginBottom: '2px' }}>
                        Edit
                    </Button>
                    <Button variant="contained" color="secondary" size="small"
                        style={{ opacity: '0.9', marginBottom: '2px' }}
                        onClick={(e) => {
                            const id = user._id
                            onDeleteBtnClick(e, id)
                        }}
                    >
                        Delete
                    </Button>
                </TableCell>
            </TableRow>
            <ModalConfirm
                open={deleteModalOpen}
                modalHandleCancel={modalHandleCancel}
                onDelete={e => handleDeleteUser(user._id, e)}
            />
            <EditUserModal
                user={user}
                open={editModalOpen}
                modalHandleCancel={modalHandleCancel} />
        </>
    )
}
