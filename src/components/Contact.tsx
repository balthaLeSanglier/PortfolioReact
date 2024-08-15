import { Grid, TextField, Typography, Button, CircularProgress } from "@mui/material";
import "../styles/Contact.css"
import emailjs from 'emailjs-com';
import { Stack } from "@mui/system";
import { FaCheck, FaMailBulk } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import { useEffect, useState } from "react";
import { FaXmark } from "react-icons/fa6";

const Contact: React.FC = () => {

    const [iconSent, setIconSent] = useState<React.ReactNode | null>(null)

    function sendEmail(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();    //This is important, i'm not sure why, but the email won't send without it
        console.log(e.currentTarget)
        setIconSent(<CircularProgress color="info" variant="indeterminate"></CircularProgress>)
        emailjs.sendForm('service_lgrou3u', 'template_0fbitzi', e.currentTarget, 'Y2FW2ZKi2vzZ_2zwv')
            .then((result) => {
                setIconSent(<Typography color={"primary"}><FaCheck size={30}></FaCheck></Typography>)
            }, (error) => {
                setIconSent(<Typography color={"secondary"}><FaXmark size={30}></FaXmark></Typography>)
                console.log(error.text);
            });
    }

    return (
        <section id="Contact" >
            <span>
                <Typography variant="h2">CONTACT</Typography>
            </span>
            <form className="contact-form" onSubmit={sendEmail}>
                <Grid direction={"row"} justifyContent={"center"} container spacing={2} >
                    <Grid item xs={12} lg={7}>
                        <TextField fullWidth
                            required
                            label="Nom"
                            name="from_name"
                        />
                    </Grid>
                    <Grid item xs={12} lg={7}>
                        <TextField fullWidth
                            required
                            label="Sujet"
                            name="subject"
                            color="primary"
                        /></Grid>

                    <Grid item xs={12} lg={7}>
                        <TextField fullWidth
                            required
                            label="Message"
                            name="message"
                            multiline
                        />
                    </Grid>
                    <Grid item xs={12} lg={7} width={"100%"}>
                        <Stack direction={"row"} alignItems={"center"} justifyContent={"space-between"}>
                            <Button type="submit" variant="contained" size="large" color="primary">
                                <Stack justifyContent={'space-between'} alignItems={'center'} direction={'row'} gap={1}>
                                    Envoyer
                                    <IoMail size={30} />
                                </Stack>
                            </Button>
                           {iconSent}
                        </Stack>

                    </Grid>
                </Grid>

            </form>
        </section>
    )
}

export default Contact;