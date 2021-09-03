import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  root: {
    width: '100%',
    height: 450,
    marginBottom: '20px',
    position: 'relative'
  },
  media: {
    marginLeft: '5%',
    marginTop: '5%',
    height: '30%',
    borderRadius: '50%',
    width: '35%',
    align: 'left',
    display: 'inline-block'
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
  button: {
    margin: theme.spacing(1),
  },
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  modalPaper: {
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    width: '30%',
    height: '60%'
  },
  modalRoot: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
    },
  },
  modalForm: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    height: '10%'
  },
  buttonSubmit: {
    marginBottom: 10,
  }
}));