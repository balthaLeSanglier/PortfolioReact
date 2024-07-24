import { Grid, Stack, Typography } from "@mui/material"
import CustomLinearProgress from "./CustomLinearProgress"

type Props = {
    skill: string
    progress: number
}



const SkillLearned: React.FC<Props> = ({ skill, progress }) => {

    

    return (
        <Grid container>
            <Grid xs={7}>
                <Typography variant="subtitle2" color={"text.secondary"}>{skill}</Typography>
            </Grid>
            <Grid xs={5} >
                <Stack height="100%" justifyContent={"center"}>
                    <CustomLinearProgress progress={progress}></CustomLinearProgress>
                </Stack>
            </Grid>
        </Grid>
    )
}

export default SkillLearned;