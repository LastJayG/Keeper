import { Box, Stack, Typography, Chip } from "@mui/material";

interface CodeSnippetPaperProps {
  number: number;
  title: string;
  createdAt: string;
  language: string;
  onClick?: () => void;
}

const CodeSnippetPaperComponent: React.FC<CodeSnippetPaperProps> = ({
  number,
  title,
  createdAt,
  language,
  onClick,
}) => {
  return (
    <Box
      onClick={onClick}
      sx={{
        position: "relative",
        cursor: onClick ? "pointer" : "default",
        "&::before, &::after": {
          content: '""',
          position: "absolute",
          left: "4px",
          right: "-4px",
          borderRadius: "2px",
          backgroundColor: "#c8c0b0",
        },
        "&::before": {
          top: "4px",
          bottom: "-4px",
          zIndex: 0,
        },
        "&::after": {
          top: "8px",
          bottom: "-8px",
          right: "-8px",
          backgroundColor: "#b8b0a0",
          zIndex: -1,
        },
      }}
    >
      <Box
        sx={{
          position: "relative",
          zIndex: 1,
          backgroundColor: "#f5f0e8",
          borderRadius: "2px",
          padding: "24px 28px",
          boxShadow: "0px 2px 8px rgba(0,0,0,0.25), inset 0 0 40px rgba(0,0,0,0.03)",
          backgroundImage: `
            repeating-linear-gradient(
              transparent,
              transparent 27px,
              rgba(180, 160, 120, 0.15) 27px,
              rgba(180, 160, 120, 0.15) 28px
            )
          `,
          transition: "transform 0.2s ease, box-shadow 0.2s ease",
          "&:hover": onClick
            ? {
                transform: "translateY(-3px) rotate(-0.3deg)",
                boxShadow: "0px 8px 20px rgba(0,0,0,0.3), inset 0 0 40px rgba(0,0,0,0.03)",
              }
            : {},
          borderLeft: "3px solid rgba(200, 100, 100, 0.3)",
        }}
      >
       <Stack direction="row" alignItems="flex-start" justifyContent="space-between" gap={2}>
        <Stack spacing={0.5} sx={{ minWidth: 0 }}> 
            <Typography
            variant="caption"
            sx={{ color: "rgba(100, 80, 60, 0.5)", fontFamily: "monospace", fontSize: "11px" }}
            >
            #{number}
            </Typography>
            <Typography
            variant="h6"
            sx={{
                color: "#2c1f0e",
                fontWeight: 600,
                fontFamily: "'Georgia', serif",
                lineHeight: 1.3,
                overflow: "hidden",
                textOverflow: "ellipsis",
                whiteSpace: "nowrap",
            }}
            >
            {title}
            </Typography>
            <Typography
            variant="caption"
            sx={{ color: "rgba(80, 60, 40, 0.6)", fontFamily: "monospace", fontSize: "11px" }}
            >
            {new Date(createdAt).toLocaleDateString()}
            </Typography>
        </Stack>

            <Chip
                label={language}
                size="small"
                sx={{
                flexShrink: 0, 
                backgroundColor: "rgba(180, 140, 80, 0.2)",
                color: "#5c3d1e",
                fontFamily: "monospace",
                fontSize: "11px",
                border: "1px solid rgba(180, 140, 80, 0.4)",
                borderRadius: "4px",
                }}
            />
        </Stack>
      </Box>
    </Box>
  );
};

export default CodeSnippetPaperComponent;