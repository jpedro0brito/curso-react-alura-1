import React, { Fragment } from 'react';
import Header from '../../Components/Header';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';

const useEstilos = makeStyles({
    titulo:{
        TextAlign: 'center',
        color: 'blue'
    }
})
const Sobre = () => {
    const classes = useEstilos();
    return (
        <Fragment>
            <Header />
            <Container maxWidth='sm'>
                <Typography  className={classes.titulo} variant='h1' component='h2'>Sobre</Typography>
                <Typography>
                    <p>A casa do codigo e uma editora que desenvolve os livros em diversos formatos</p>
                </Typography>
            </Container>
        </Fragment>
    );
}

export default Sobre;