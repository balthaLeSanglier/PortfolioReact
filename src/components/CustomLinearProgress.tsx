import { LinearProgress } from "@mui/material";
import { useEffect, useRef, useState } from "react";

type Props = {
    progress:number
}

const CustomLinearProgress:React.FC<Props> = () => {

    const elementRef = useRef<HTMLDivElement | null>(null);
    const [actualProgress, setProgress] = useState<number>(0)

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    if (elementRef.current) {
                        setTimeout(() => {
                            setProgress(100)
                        }, 500);

                    }
                }
            },
            { threshold: 1 }
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


    return(
        <LinearProgress variant="determinate" ref={elementRef}  value={actualProgress}  />
    )
}

export default CustomLinearProgress;