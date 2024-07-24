import { Grid, Typography } from "@mui/material";
import { AiOutlineHtml5, AiOutlinePython } from "react-icons/ai";
import { CgCPlusPlus } from "react-icons/cg";
import { FaGitAlt, FaJava, FaNodeJs, FaPhp, FaReact } from "react-icons/fa";
import { GoCloud } from "react-icons/go";
import { LiaSymfony } from "react-icons/lia";
import { MdCss } from "react-icons/md";
import { RiAngularjsLine } from "react-icons/ri";
import { SiMongodb, SiMongoose, SiMysql, SiNeo4J, SiOracle, SiPostgresql, SiSpring } from "react-icons/si";
import { TbBrandAnsible, TbBrandTypescript } from "react-icons/tb";
import CustomCircularProgress from "./CustomCircularProgress";
import ScrollReveal from "./ScrollReaveal";
import TechsPanel from "./TechPanel";
const Skills: React.FC = () => {
    return (
        <section id="Techs">
            <ScrollReveal>
                <span>
                    <Typography variant="h2">TECHNOLOGIES</Typography>
                </span>
                <Grid container direction={"row"} justifyContent={'center'} spacing={8}>
                    <Grid item xs={12} sm={6} md={3}>
                        <TechsPanel title="Back-end">
                            <CustomCircularProgress content={<FaJava size={60} />} progress={100} title={"Java"} />
                            <CustomCircularProgress content={<SiSpring size={60} />} progress={100} title={"Spring"} />
                            <CustomCircularProgress content={<FaPhp size={60} />} progress={100} title={"PHP"} />
                            <CustomCircularProgress content={<LiaSymfony size={60} />} progress={100} title={"Symfony"} />
                            <CustomCircularProgress content={<FaNodeJs size={60} />} progress={100} title={"NodeJS"} />
                        </TechsPanel>
                    </Grid>
                    <Grid item xs={12} sm={6} md={3}>  
                        <TechsPanel title="Front-end" >
                            <CustomCircularProgress content={<AiOutlineHtml5 size={60} />} progress={100} title={"HTML5"} />
                            <CustomCircularProgress content={<MdCss size={60} />} progress={100} title={"CSS"} />
                            <CustomCircularProgress content={<TbBrandTypescript size={60} />} progress={100} title={"TypeScript"} />
                            <CustomCircularProgress content={<FaReact size={60} />} progress={100} title={"React"} />
                            <CustomCircularProgress content={<RiAngularjsLine size={60} />} progress={100} title={"Angular"} />
                        </TechsPanel>
                    </Grid>
                    <Grid item xs={12} sm={6} md={3}>
                        <TechsPanel title="Base de Donnée">
                            <CustomCircularProgress content={<SiPostgresql size={60} />} progress={100} title={"PostgreSQL"} />
                            <CustomCircularProgress content={<SiMysql size={60} />} progress={100} title={"MySQL"} />
                            <CustomCircularProgress content={<SiOracle size={60} />} progress={100} title={"Oracle SQL"} />
                            <CustomCircularProgress content={<FaJava size={60} />} progress={100} title={"JDBC"} />
                            <CustomCircularProgress content={<SiMongodb size={60} />} progress={100} title={"MongoDB"} />
                            <CustomCircularProgress content={<SiMongoose size={60} />} progress={100} title={"Mongoose"} />
                            <CustomCircularProgress content={<SiNeo4J size={60} />} progress={100} title={"Neo4J"} />
                        </TechsPanel>
                    </Grid>
                    <Grid item xs={12} sm={6} md={3}>
                        <TechsPanel title="Autre">
                            <CustomCircularProgress content={<GoCloud size={60} />} progress={100} title={"Cloud"} />
                            <CustomCircularProgress content={<FaGitAlt size={60} />} progress={100} title={"GIT"} />
                            <CustomCircularProgress content={<AiOutlinePython size={60} />} progress={100} title={"Pyhton"} />
                            <CustomCircularProgress content={<CgCPlusPlus size={60} />} progress={100} title={"C ++"} />
                            <CustomCircularProgress content={<TbBrandAnsible size={60} />} progress={100} title={"Ansible"} />
                        </TechsPanel>
                    </Grid>
                </Grid>
            </ScrollReveal>

        </section>
    )
}

export default Skills;