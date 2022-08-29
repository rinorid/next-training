import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    hello: {
      fontSize: '72px',
      '& .subtitle': {
        fontSize: '36px',
        color: '#af4154',
      },
      [theme.breakpoints.down('sm')]: {
        fontSize: '36px',
        '& .subtitle': {
            fontSize: '16px',
            color: '#0db4b9',
        },
      },
    },
  }));

export default useStyles