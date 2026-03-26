import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { CreateFolderDto } from '../../../models/folder';
import { dialogContentTextSx } from '../../../styles/dialog/dialogContentTextSx';
import { addFolderFormSx } from '../../../styles/folder/addFolderFormSx';
import { textFieldSx } from '../../../styles/textFieldSx';
import { dialogButtonSx } from '../../../styles/button/dialogButtonSx';

interface AddFolderFormProps {
  open: boolean;
  onClose: () => void;
  onSubmit: (folder: CreateFolderDto) => void;
}

export default function AddFolderForm({ open, onClose, onSubmit }: AddFolderFormProps) {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const title = formData.get('title') as string;
    onSubmit({ title });
    onClose();
  };

  return (
    <Dialog sx={addFolderFormSx} open={open} onClose={onClose}>
      <DialogTitle variant="h4">+ Add Folder...</DialogTitle>
      <DialogContent>
        <DialogContentText variant="h6" sx={dialogContentTextSx}>
          Please enter a title for your folder.
        </DialogContentText>
        <form onSubmit={handleSubmit} id="add-folder-form">
          <TextField
            sx={textFieldSx}
            autoFocus
            required
            margin="dense"
            name="title"
            placeholder="Folder Title"
            fullWidth
            variant="filled"
          />
        </form>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} sx={dialogButtonSx}>Cancel</Button>
        <Button type="submit" form="add-folder-form" sx={dialogButtonSx}>
          Add
        </Button>
      </DialogActions>
    </Dialog>
  );
}
