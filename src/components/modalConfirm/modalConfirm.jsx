import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

export default function ModalConfirm({
    modalHandleCancel,
    open,
    onDelete
}) {
    return (
        <>
            <Dialog
                open={open}
                onClose={modalHandleCancel}
            >
                <DialogTitle >{"Delete Hotel?"}</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Are you sure you want to delete this hotel?
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={modalHandleCancel} color="primary">
                        Cancel
                    </Button>
                    <Button onClick={onDelete} color="secondary" autoFocus>
                        Delete
                    </Button>
                </DialogActions>
            </Dialog>
        </>
    )
}
