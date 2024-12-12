import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from "@mui/material";
import { FC } from "react";
import ClearIcon from '@mui/icons-material/Clear';
import CheckIcon from '@mui/icons-material/Check';

import './confirmation-dialog.scss';

interface Props {
  onYes: () => void;
  onNo: () => void;
  open: boolean;
  title: string;
  message: string;
}

const ConfirmationDialog: FC<Props> = ({ onYes, onNo, open, title, message }) => {

  return <Dialog
    className="confirmation-dialog"
    open={open}
    onClose={ onNo }
    aria-labelledby="alert-dialog-title"
    aria-describedby="alert-dialog-description"
    >
    <DialogTitle className="dialog-title">
      { title }
    </DialogTitle>
    <DialogContent>
      <DialogContentText className="dialog-text">
        { message }
      </DialogContentText>
    </DialogContent>
    <DialogActions className="dialog-action">
      <Button startIcon={ <ClearIcon /> } variant="outlined" onClick={ onNo }>Нет</Button>
      <Button startIcon={ <CheckIcon /> } variant="contained" onClick={ onYes } autoFocus>
        Да
      </Button>
    </DialogActions>
  </Dialog>;
}

export default ConfirmationDialog;
