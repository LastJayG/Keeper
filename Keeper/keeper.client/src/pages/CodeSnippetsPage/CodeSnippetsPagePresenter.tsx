import { Box, Grid } from "@mui/material";
import { CodeSnippetShortDto } from "../../models/codeSnippet";
import { theme } from "../../theme";
import CodeSnippetPaperComponent from "./components/CodeSnippetPaperComponent";

interface CodeSnippetsPagePresenterProps {
    codeSnippets: CodeSnippetShortDto[];
}

const CodeSnippetsPagePresenter: React.FC<CodeSnippetsPagePresenterProps> = ({
    codeSnippets
}) => {
    return <>
        <Box
            sx={{
            width: '100%',
            backgroundColor: theme.palette.background.default,
            minHeight: '100vh',
            marginTop: 10,
            }}
        >
        <Grid container rowSpacing={2} alignItems='flex-start' sx={{ justifyContent: 'center', margin: 10}}>

        <Grid size={12} display="flex" justifyContent="center">
                    <Box sx={{ maxWidth: '800px', width: '100%'}}>
                        {(
                            <Grid container spacing={5} padding={4}>
                                {codeSnippets.map((codeSnippet, index) => (
                                    <Grid size={12} key={codeSnippet.id}>
                                        <CodeSnippetPaperComponent
                                            number={index + 1}
                                            title={codeSnippet.title}
                                            createdAt={codeSnippet.createdAt}
                                            language={codeSnippet.programmingLanguage}
                                            //onClick={() => navigate(ROUTES.getCodeSnippets(folder.id))}
                                        />
                                    </Grid>
                                ))}
                            </Grid>
                        )}
                    </Box>
                </Grid>
        </Grid>
        </Box>
    </>
}

export default CodeSnippetsPagePresenter;