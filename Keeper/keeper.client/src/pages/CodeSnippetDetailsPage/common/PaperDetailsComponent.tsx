import { Typography } from '@mui/material';
import {
  typographyPaperMediumCaption,
  typographyPaperSmallCaption,
  typographyPaperBasicCaption,
} from '../../../styles/typography/typographyCaptions';
import CodeEditorComponent from './CodeEditorComponent';

interface PaperDetailsComponentProps {
  title: string;
  createdAt: string;
  description: string;
  code: string;
  programmingLanguage: string;
}

const PaperDetailsComponent: React.FC<PaperDetailsComponentProps> = ({
  code,
  createdAt,
  description,
  programmingLanguage,
  title,
}) => {
  return (
    <>
      <Typography variant="h4" sx={typographyPaperMediumCaption}>
        {title}
      </Typography>
      <Typography variant="caption" sx={typographyPaperSmallCaption}>
        {new Date(createdAt).toLocaleDateString()}
      </Typography>
      <Typography variant="h5" sx={typographyPaperBasicCaption}>
        {description}
      </Typography>
      <CodeEditorComponent code={code} programmingLanguage={programmingLanguage} />
    </>
  );
};

export default PaperDetailsComponent;
