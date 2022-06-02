import { Box, Card, TextField, CardActions, Button, Typography } from '@mui/material';
import { useState } from 'react';
import '../App.css';

function Registration() {
  const [values, setValues] = useState({  fname: "", phone: "",  email: ""})
  const [submited, setSubmited] = useState(false)
  const [vaild, setvaild] = useState(false)
  const FnameHandler = (e) => {
    setValues({ ...values, fname: e.target.value })
  }

  const PhoneHandler = (e) => {
    setValues({ ...values, phone: e.target.value })
  }

  const EmailHandler = (e) => {
    setValues({ ...values, email: e.target.value })
  }

  const onSubmit = (e) => {
    e.preventDefault()
    setSubmited(true)
    if (values.fname && values.phone && values.email) {
      setvaild(true)
    }
  }



  return (

    <Box sx={{ display: "flex", justifyContent: "center" }}>
      { submited && vaild ? <Typography sx={{ textAlign: "center" }}>Thanks for Registration</Typography> : null }
      <Card sx={{ backgroundColor: "gray", width: 350, mt: 10 }}>
        <TextField
          label="Enter Name"
          value={values.fname}
          onChange={FnameHandler}
        />
        {submited && !values.fname ? <Typography sx={{ color: "red" }}>Plese enter Name</Typography> : null}
        <TextField
          label="phone Number"
          value={values.phone}
          onChange={PhoneHandler}
        />
        { submited && !values.phone ? <Typography sx={{ color: "red" }}>Plese enter phone</Typography> : null }
        <TextField
          label="Email"
          value={values.email}
          onChange={EmailHandler}
        />{ submited && !values.email ? <Typography sx={{ color: "red" }}>Plese enter email</Typography> : null }
        <CardActions>

          <Button variant="contained" onClick={onSubmit}>
            Submit
          </Button>
        </CardActions>
      </Card>
    </Box>
  );
}

export default Registration;
