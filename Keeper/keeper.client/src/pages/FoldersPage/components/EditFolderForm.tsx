import {
  Dialog,
  DialogTitle,
  DialogContent,
  TextField,
  DialogActions,
  Button,
  DialogContentText,
} from '@mui/material';
import React from 'react';
import { useFolderStore } from '../../../stores/useFolderStore';
import { UpdateFolderDto } from '../../../models/folder';
import { folderFormSx } from '../../../styles/folder/folderFormSx';
import { textFieldSx } from '../../../styles/textFieldSx';
import { dialogButtonSx } from '../../../styles/button/dialogButtonSx';
import { dialogContentTextSx } from '../../../styles/dialog/dialogContentTextSx';

interface EditFolderFormProps {
  onSubmit: (id: string, folder: UpdateFolderDto) => Promise<void>;
}

export default function EditFolderForm({ onSubmit }: EditFolderFormProps) {
  const { editedFolder, setEditedFolder } = useFolderStore();
  const [title, setTitle] = React.useState('');

  React.useEffect(() => {
    if (editedFolder) setTitle(editedFolder.title);
  }, [editedFolder]);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!editedFolder) return;
    await onSubmit(editedFolder.id, { title });
    setEditedFolder(null);
  };

  return (
    <Dialog open={!!editedFolder} sx={folderFormSx} onClose={() => setEditedFolder(null)}>
      <DialogTitle variant="h4">Edit Folder</DialogTitle>
      <DialogContent>
        <DialogContentText variant="h6" sx={dialogContentTextSx}>
          Please enter <strong>a new title</strong> for your folder.
        </DialogContentText>
        <form onSubmit={handleSubmit} id="edit-folder-form">
          <TextField
            sx={textFieldSx}
            required
            fullWidth
            variant="filled"
            name="title"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </form>
      </DialogContent>
      <DialogActions>
        <Button onClick={() => setEditedFolder(null)} sx={dialogButtonSx}>Cancel</Button>
        <Button type="submit" form="edit-folder-form" sx={dialogButtonSx}>
          Save
        </Button>
      </DialogActions>
    </Dialog>
  );
}
