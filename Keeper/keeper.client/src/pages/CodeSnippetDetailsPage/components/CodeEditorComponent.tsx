import { Editor } from '@monaco-editor/react';

interface CodeEditorComponentProps {
  programmingLanguage: string;
  code: string;
}

const CodeEditorComponent: React.FC<CodeEditorComponentProps> = ({ programmingLanguage, code }) => {
  return (
    <>
      <Editor
        height="50vh"
        defaultLanguage={programmingLanguage.toLowerCase()}
        defaultValue="//your code here"
        value={code}
      />
    </>
  );
};

export default CodeEditorComponent;
