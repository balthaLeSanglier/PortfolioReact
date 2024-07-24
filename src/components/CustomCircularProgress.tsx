import { Box, CircularProgress, Stack, Typography } from "@mui/material";
import { useEffect, useRef, useState } from "react";

interface CustomCircularProgressProps {
    title: String;
    content: React.ReactNode;
    progress: number;
}

const CustomCircularProgress: React.FC<CustomCircularProgressProps> = ({ title, progress, content }) => {

    const elementRef = useRef<HTMLDivElement | null>(null);
    const [actualProgress, setProgress] = useState<number>(0)

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    if (elementRef.current) {
                        setProgress(progress);
                    }
                } else {
                    if (elementRef.current) {
                        setProgress(0)
                    }
                }
            },
            { threshold: 0.5 }
        );

        if (elementRef.current) {
            observer.observe(elementRef.current);
        }

        return () => {
            if (elementRef.current) {
                observer.unobserve(elementRef.current);
            }
        };
    }, []);

    return (
        <Stack ref={elementRef} direction="column"
            justifyContent="center"
            alignItems="center"
            spacing={1}>
            <Box position="relative" display="inline-flex">
                <CircularProgress thickness={1} size={100} variant="determinate" value={actualProgress} sx={{ backgroundColor: '#ddd', borderRadius: '50%' }} />
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