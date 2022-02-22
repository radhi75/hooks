import * as React from 'react';
import { useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { AddCircle } from '@material-ui/icons';
import "./AddMovie.css"
import { Rating } from '@mui/material';

const style = {
   
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

 const AddMovie = ({addMovieCallback})=> {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [Name,setName] =  useState('');
  const [Image,setImage] =  useState('');
  const [Description,setDescription] =  useState('');
  const [Details,setDetails] =  useState('');
  const [Type,setGen] =  useState('');
  const [Date,setDate] =  useState('');
  const [value,setValue] =  useState(0);

  const handleSave =() =>{
      let newfilm ={
          id: Math.floor(Math.random()*1000+1),
          name :Name,
          image:Image,
          description:Description,
          details:Details,
          type:Type,
          date:Date,
          rating :value,

      }
      addMovieCallback(newfilm);
      setName('');
      setImage('');
      setDescription('');
      setDetails('');
      setGen('');
      setDate('');
      setOpen(false);
  }


  return (
    <div className='Add'>
      <Button onClick={handleOpen}><AddCircle/></Button>
      <Modal 
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box className='box' sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            ADD YOUR OWN MOVIE
          </Typography>
          <div className='inputinfo'>
          <div>
          <Typography component="legend" className='inde'>Movie Name</Typography>
          <input type="text" placeholder="movie Name" onChange={(event)=>setName(event.target.value)}/>
          </div>
         <div>
          <Typography component="legend" className='inde'>Image</Typography>
          <input type="text" placeholder="movie image" onChange={(event)=>setImage(event.target.value)}/>
          </div>
          <div>
          <Typography component="legend" className='inde'>Description</Typography>
          <input type="text" placeholder="movie description" onChange={(event)=>setDescription(event.target.value)}/>
          </div>
          <div>
          <Typography component="legend" className='inde'>Details</Typography>
          <input type="text" placeholder="movie details" onChange={(event)=>setDetails(event.target.value)}/>
         </div>
         <div>
          <Typography component="legend" className='inde'>Type</Typography>
          <input type="text" placeholder="movie gen" onChange={(event)=>setGen(event.target.value)}/>
          </div>
          <div>
          <Typography component="legend" className='inde'>Date</Typography>
          <input type="date" placeholder="movie date" onChange={(event)=>setDate(event.target.value)}/>
          </div>
          <div>
          <Typography component="legend" className='inde'>Rating</Typography>
          
          <Rating
            name="simple-controlled"
           value={value}
           onChange={(event, newValue) => {
           setValue(newValue);
           
  } }
  
/></div>
          </div>
          <button className='bts' onClick={handleSave}> SAVE</button>
          
          
        </Box>
      </Modal>
    </div>
  );
}
export default AddMovie ;
