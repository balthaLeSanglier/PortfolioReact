import { CircularProgress, Grid, Stack, Typography } from "@mui/material"
import ScrollReveal from "./ScrollReaveal"
import { FaAngular, FaGit, FaGitAlt, FaPython } from "react-icons/fa";
import { RiAngularjsLine } from "react-icons/ri";
import { TbBrandAnsible, TbBrandTypescript } from "react-icons/tb";
import { FaReact } from "react-icons/fa";
import { MdCss } from "react-icons/md";
import { AiOutlineCloudUpload, AiOutlineConsoleSql, AiOutlineHtml5, AiOutlinePython } from "react-icons/ai";
import { SiAnsible, SiMongodb, SiMongoose, SiMysql, SiNeo4J, SiOracle, SiPostgresql, SiSpring } from "react-icons/si";
import { FaJava } from "react-icons/fa";
import { LiaSymfony } from "react-icons/lia";
import { FaPhp } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { CgCPlusPlus } from "react-icons/cg";


import CustomCircularProgress from "./CustomCircularProgress";
const Skills: React.FC = () => {
    return (
        <section>
            <ScrollReveal>
                <span>
                    <Typography variant="h2">Compétences</Typography>
                </span>
                <Stack spacing={2} direction="row">
                    <CustomCircularProgress content={<AiOutlineHtml5 size={60} />} progress={60} title={"HTML5"} />
                    <CustomCircularProgress content={<MdCss size={60} />} progress={25} title={"CSS"} />
                    <CustomCircularProgress content={<TbBrandTypescript size={60} />} progress={33} title={"TypeScript"} />
                    <CustomCircularProgress content={<FaReact size={60} />} progress={33} title={"React"} />
                    <CustomCircularProgress content={<RiAngularjsLine size={60} />} progress={33} title={"Angular   "} />
                </Stack>
                <Stack spacing={2} direction="row">
                    <CustomCircularProgress content={<FaJava size={60} />} progress={25} title={"Java"} />
                    <CustomCircularProgress content={<SiSpring size={60} />} progress={60} title={"Spring"} />
                    <CustomCircularProgress content={<LiaSymfony size={60} />} progress={33} title={"Symfony"} />
                    <CustomCircularProgress content={<FaPhp size={60} />} progress={33} title={"PHP"} />
                    <CustomCircularProgress content={<FaNodeJs size={60} />} progress={33} title={"NodeJS"} />
                </Stack>
                <Stack spacing={2} direction="row">
                    <CustomCircularProgress content={<TbBrandAnsible size={60} />} progress={25} title={"Ansible"} />
                    <CustomCircularProgress content={<FaGitAlt size={60} />} progress={60} title={"GIT"} />
                    <CustomCircularProgress content={<AiOutlinePython size={60} />} progress={33} title={"Pyhton"} />
                    <CustomCircularProgress content={<CgCPlusPlus size={60} />} progress={33} title={"C ++"} />
                </Stack>
                <Stack spacing={2} direction="row">
                    <CustomCircularProgress content={<SiMongodb size={60} />} progress={25} title={"MongoDB"} />
                    <CustomCircularProgress content={<SiMongoose size={60} />} progress={33} title={"Mongoose"} />
                    <CustomCircularProgress content={<SiPostgresql size={60} />} progress={60} title={"PostgreSQL"} />
                    <CustomCircularProgress content={<SiMysql size={60} />} progress={60} title={"MySQL"} />
                    <CustomCircularProgress content={<SiOracle size={60} />} progress={60} title={"Oracle SQL"} />
                    <CustomCircularProgress content={<FaJava size={60} />} progress={60} title={"JDBC"} />
                    <CustomCircularProgress content={<SiNeo4J size={60} />} progress={33} title={"Neo4J"} />
                </Stack>
            </ScrollReveal>
        </section>
    )
}

export default Skills;