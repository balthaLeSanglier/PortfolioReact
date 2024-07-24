import { Typography } from "@mui/material"
import "../styles/TechUsed.css"
type Props = {
    techName:string
}

const TechUsed:React.FC<Props> = ({techName})=> {
    return (
        <div className="techUsed">
            <Typography color={"text.secondary"}>{techName}</Typography>
        </div>
    )
}

export default TechUsed;