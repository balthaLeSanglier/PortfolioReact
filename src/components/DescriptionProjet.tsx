import { Stack, Typography } from "@mui/material"
import "../styles/Project.css"
type Props = {
    description:string
}

const DescriptionProjet:React.FC<Props> = ({description}) => {
    return (
        <Stack className="DescriptionProjet" style={{transition:"0.5s", borderBottomLeftRadius:8 , borderBottomRightRadius:8}}>
            <Typography  p={1} variant="body1" textAlign={"justify"}>{description}</Typography>
        </Stack>
    )
}

export default DescriptionProjet;