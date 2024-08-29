import { Stack, Typography } from "@mui/material"
import '../styles/SkillsPanel.css'
type Props = {
    children?: React.ReactNode
    title:String
  };

const TechsPanel: React.FC<Props> = ({children, title}) => {
    return (
            <Stack className="SkillsPanel" spacing={2} direction="column" alignItems={"center"} flex={1}>
            <Typography variant="body3">{title}</Typography>

            {children}
            </Stack>
    )
}

export default TechsPanel;