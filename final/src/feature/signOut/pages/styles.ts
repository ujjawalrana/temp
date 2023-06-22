import makeStyles from '@mui/styles/makeStyles';
import backGroundImage from '../../../assets/signInBackground.jpg'

const useStyles = makeStyles((theme) => ({
    signInOuterContainer: {
        display: 'flex',
        justifyContent: 'flex-start',
        backgroundImage: `url(${backGroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        height: '100vh',
        width: '100vw',
        backgroundColor: '#2a2a2a',
        backgroundBlendMode: 'multiply',
        paddingTop:220,
        paddingLeft:'15%'
    },
    signInContainer: {
        height:'fit-content',
        display: 'flex',
        flexDirection: 'column',
        justifyContent:'space-between',
        width: 600,
    },
}));
export default useStyles;