import { Stack, Typography } from "@mui/material";

type Props = {
    asset: React.ReactNode
    title: String
};


const Asset: React.FC<Props> = ({ asset, title }) => {
    return (
        <Stack spacing={2} direction="column" alignItems={"center"} flex={1} width={"100%"}>
            {asset}
            <Typography variant="body3" textAlign={"center"}>{title}</Typography>
        </Stack>
    )
}

export default Asset;