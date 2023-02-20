import * as React from 'react';
import './Addproduct.css'
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';
import { BsCamera } from 'react-icons/bs';
import { TextField } from '@mui/material';
import Card from './card'
import axios from 'axios'

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));

export interface DialogTitleProps {
  id: string;
  children?: React.ReactNode;
  onClose: () => void;
}

function BootstrapDialogTitle(props: DialogTitleProps) {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
}

export default function CustomizedDialogs() {
  const [open, setOpen] = React.useState(false);
  const [product, setProduct] = React.useState("")
  const [price, setPrice] = React.useState(0)
  const [description, setDescription] = React.useState("")

  const handleClickOpen = () => {
       setOpen(true);
  };
  
  const handleClose = () => {
    axios.post('http://localhost:3040/Addproduct',{
      product: product,
      price: price,
      description: description
    })
    console.log(product,price,description)
    setOpen(false);
  };

  return (
    <div>
      <Button variant="outlined" className='productbtn' onClick={handleClickOpen}>
        Add Your Own Product
      </Button> &nbsp;&nbsp;&nbsp;
      <Button variant="contained" disableElevation>
        LOG OUT
      </Button>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <BootstrapDialogTitle id="customized-dialog-title" onClose={handleClose}>
          PRODUCT
        </BootstrapDialogTitle>
        <DialogContent dividers>
          <Typography gutterBottom>
            <input type="file" name="photo" id="photo"
            // onChange={(e) => { setImageUpload(e.target.files[0]) }}
            />
            <label htmlFor="photo" >
              <BsCamera size={200} className='camera' />
            </label>
            <input type="text" size={31} maxLength={40}
              name="product name" required
              placeholder='Product Title' className='inp'
              onChange={(e) => { setProduct(e.target.value) }}
            />
            <TextField placeholder='Description'
              onChange={(e) => { setDescription(e.target.value) }}
            />
            <input type="number"
              name="number" required
              placeholder='Price' className='inp'
              onChange={(e) => { setPrice(e.target.value) }}
            />
          </Typography>

        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose}>
            ADD
          </Button>
        </DialogActions>
      </BootstrapDialog>
      <br />
      {/* Product card */}
      <Card />
      <br />
    </div>
  );
}

