import React from 'react'
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { makeStyles } from '@material-ui/core/styles'
import { Container, CssBaseline } from '@mui/material';
import Image from '../../src/images/learn.svg'
import { margin } from '@mui/system';



const useStyles = makeStyles((theme) => ({
    imageStyle: {
        height: '70%',
        width: "70%",

        // backgroundImage: `${Image}`
    },
}))



const Dashboard = (props) => {
    const classes = useStyles()

    return (
        <Container sx={{ mt: 10 }} >

            <img className={classes.imageStyle} src={Image} />


        </Container>


    );

}

export default Dashboard