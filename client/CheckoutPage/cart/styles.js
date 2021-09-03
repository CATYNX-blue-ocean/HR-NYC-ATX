import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  root: {
    width: '100%',
    height: 150,
    marginBottom: '20px',
    position: 'relative',
    padding: '10px',
  },
  media: {
    height: '100px',
    width: '150px',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
  quantity: {
    height: '30px',
    width: '60px',
  },
}));
