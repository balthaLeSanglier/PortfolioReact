import { Box, CircularProgress, Stack, Typography } from "@mui/material";

interface CustomCircularProgressProps {
    title: String;
    content: React.ReactNode;
    progress: number;
}

const CustomCircularProgress: React.FC<CustomCircularProgressProps> = ({ title, progress, content }) => {
    return (
        <Stack direction="column"
            justifyContent="center"
            alignItems="center"
            spacing={1}>
            <Box position="relative" display="inline-flex">
                <CircularProgress size={100} variant="determinate" value={progress} sx={{ backgroundColor: '#ddd', borderRadius: '50%' }} />
                <Box
                    top={4}
                    left={0}
                    bottom={0}
                    right={0}
                    position="absolute"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                >
                    <Typography variant="caption" color="black">
                        {content}
                    </Typography>
                </Box>
            </Box>
            <Typography color="text.secondary">
                {title}
            </Typography>
        </Stack>

    );
};

export default CustomCircularProgress;