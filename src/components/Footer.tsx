import { Divider, Grid, Typography } from "@mui/material"
import { FaGit, FaGitAlt } from "react-icons/fa"
import "../styles/Footer.css"
import { Stack } from "@mui/system"

const Footer: React.FC = () => {
    return (
        <section>
            <Grid container direction={"row"} justifyContent="center"
                padding={"1%"}
                columnSpacing={2}
                bgcolor={"white"}>
                <Grid item>
                    <Typography color={"text.primary"}>Fait avec React</Typography>
                </Grid>
                <Grid item><Divider orientation="vertical"></Divider></Grid>
                <Grid item>

                    <Typography color={"text.primary"}><a target="_blank" href="https://github.com/balthaLeSanglier/PortfolioReact"><Stack spacing={3} direction={"row"} justifyContent={"center"} alignItems={"center"}>Accès au GIT<FaGitAlt />                    </Stack>
                    </a></Typography>
                </Grid>
            </Grid>
        </section>
    )
}

export default Footer