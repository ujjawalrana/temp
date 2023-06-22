import makeStyles from '@mui/styles/makeStyles';
import backGroundImage from '../../../assets/signInBackground.jpg'

const useStyles = makeStyles((theme) => ({
    signInOuterContainer: {
        display: 'flex',
        justifyContent: 'center',
        backgroundImage: `url(${backGroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        height: '100vh',
        width: '100vw',
        backgroundColor: '#2a2a2a',
        backgroundBlendMode: 'multiply',
        paddingTop:220,
    },
    signInContainer: {
        height:'fit-content',
        display: 'flex',
        flexDirection: 'column',
        justifyContent:'space-between',
        width: 600,
    },
    logInButton: {
        backgroundColor: 'red',
        color:'white'
    },
    ForgotButtonColor:{
        color: '#DB304B',
        textDecoration: 'underline',
    },
    GoogleAndAppleContainer:{
        display: 'flex',
        justifyContent:'center',
    }
}));
export default useStyles;
