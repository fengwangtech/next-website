import React from 'react';
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import Button from '@mui/material/Button';

const DialogContainer = ({message, onClose, onCancel, onOk, children, width='sm'}) => {
  if (!message) return;

  return (
    <Dialog maxWidth={width} fullWidth={true} open={message !== null}>
        <DialogTitle>{message.title}</DialogTitle>
        <DialogContent dividers>
          {children}
        </DialogContent>
        <DialogActions>
          {onClose && <Button onClick={onClose}>Close</Button>}
          {onCancel && <Button onClick={onCancel}>Cancel</Button>}
          {onOk && <Button onClick={onOk}>Ok</Button>}
        </DialogActions>
    </Dialog>
  )
}
  
export default DialogContainer;
