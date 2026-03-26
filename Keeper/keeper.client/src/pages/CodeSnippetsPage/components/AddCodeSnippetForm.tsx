import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Autocomplete from '@mui/material/Autocomplete';
import { dialogContentTextSx } from '../../../styles/dialog/dialogContentTextSx';
import { addFolderFormSx } from '../../../styles/folder/addFolderFormSx';
import { textFieldSx } from '../../../styles/textFieldSx';
import { CreateCodeSnippetDto } from '../../../models/codeSnippet';
import { theme } from '../../../theme';
import { dialogButtonSx } from '../../../styles/button/dialogButtonSx';
import { LanguageOption, programmingLanguages } from '../../../models/programmingLanguages';
import { autocompleteSx } from '../../../styles/autocompleteSx';
import { Box } from '@mui/material';
import { getLanguageIcon } from '../../../models/languageIcons';
import { optionBoxSx } from '../../../styles/box/optionBoxSx';
import { slotPropsSx } from '../../../styles/slotPropsSx';

interface AddCodeSnippetFormProps {
  folderId: string;
  open: boolean;
  onClose: () => void;
  onSubmit: (codeSnippet: CreateCodeSnippetDto) => void;
}

export default function AddCodeSnippetForm({
  open,
  onClose,
  onSubmit,
  folderId,
}: AddCodeSnippetFormProps) {
  const [selectedLanguage, setSelectedLanguage] = React.useState<LanguageOption>(
    programmingLanguages.find((l) => l.value === 'Other')!
  );

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const title = formData.get('title') as string;
    const description = formData.get('description') as string;
    const code = '//some code';
    onSubmit({ title, description, programmingLanguage: selectedLanguage.value, code, folderId });
    onClose();
  };

  return (
    <Dialog
      sx={addFolderFormSx}
      color={theme.palette.background.paper}
      open={open}
      onClose={onClose}
    >
      <DialogTitle variant="h4">+ Add Code Snippet...</DialogTitle>
      <DialogContent>
        <DialogContentText variant="h6" sx={dialogContentTextSx}>
          Please, enter a title for your code snippet.
        </DialogContentText>
        <form onSubmit={handleSubmit} id="add-code-snippet-form">
          <TextField
            sx={textFieldSx}
            autoFocus
            required
            margin="dense"
            name="title"
            placeholder="Title"
            fullWidth
            variant="filled"
          />
          <DialogContentText variant="h6" sx={dialogContentTextSx}>
            Please, enter a description for your code snippet.
          </DialogContentText>
          <TextField
            sx={textFieldSx}
            autoFocus
            required
            margin="dense"
            name="description"
            placeholder="Description"
            fullWidth
            variant="filled"
          />
        </form>
        <DialogContentText variant="h6" sx={dialogContentTextSx}>
          Please, select a programming language for your code snippet.
        </DialogContentText>
        <Autocomplete
          sx={autocompleteSx}
          disableClearable
          options={programmingLanguages}
          groupBy={(option) => option.label[0].toUpperCase()}
          getOptionLabel={(option) => option.label}
          value={selectedLanguage}
          onChange={(_, newValue) => setSelectedLanguage(newValue)}
          slotProps={{
            paper: {
              sx: slotPropsSx
            }
          }}
          renderOption={(props, option) => (
            <Box component="li" {...props} sx={optionBoxSx}>
              <Box sx ={{mr: 2}}>
                {getLanguageIcon(option.value)}
              </Box>
              {option.label}
            </Box>
          )}
          renderInput={(params) => (
            <TextField
              {...params}
              sx={textFieldSx}
              margin="dense"
              variant="filled"
            />
          )}
        />
      </DialogContent>
      <DialogActions>
        <Button sx={dialogButtonSx} onClick={onClose}>
          Cancel
        </Button>
        <Button type="submit" sx={dialogButtonSx} form="add-code-snippet-form">
          Add
        </Button>
      </DialogActions>
    </Dialog>
  );
}
