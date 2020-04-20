import React from 'react';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import Button from '@material-ui/core/Button';

import ModalConfirm from '../modalConfirm/modalConfirm';
import { deleteHotel } from '../../services/services';
import EditModal from '../editModal/editModal';
import { message } from 'antd';

// import '../editModal/editModal.css';

export default function Hotel({ hotel }) {
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

    const handleDeleteHotel = (id, e) => {
        deleteHotel(id);
        setDeleteModalOpen(false);
        setLoading(true);
        setTimeout(() => {
            console.log(id);
            setLoading(false);
           // window.location.reload(false);
            message.info('Reload to See Changes!');
        }, 1500);
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
            <TableRow key={hotel._id}>
                <TableCell>{hotel.name}</TableCell>
                <TableCell>{hotel.address}</TableCell>
                <TableCell>{hotel.status}</TableCell>
                <TableCell>{hotel.roomCount}</TableCell>
                <TableCell>{hotel.price}$</TableCell>
                <TableCell>
                    <Button variant="contained" color="primary" size="small"
                        onClick={(e) => {
                            const id = hotel._id
                            onEditBtnClick(e, id)
                        }}
                        style={{ opacity: '0.9', marginRight: '5px', marginBottom: '2px' }}>
                        Edit
                    </Button>
                    <Button variant="contained" color="secondary" size="small"
                        style={{ opacity: '0.9', marginBottom: '2px' }}
                        onClick={(e) => {
                            const id = hotel._id
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
                onDelete={e => handleDeleteHotel(hotel._id, e)}
            />
            <EditModal
                hotel={hotel}
                open={editModalOpen}
                modalHandleCancel={modalHandleCancel} />
        </>
    )
}
