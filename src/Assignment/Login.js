import { Box, Typography, Card, TextField, CardActions, Button } from '@mui/material'
import React, { useState } from 'react'

const Login = () => {

  const [values, setValues] = useState({
    usname: "",
    password: ""
  })
  const [vaild, setValid] = useState(false)
  const userName = (e) => {
    setValues({ ...values, usname: e.target.value })
  }
  const passwordhandlar = (e) => {
    setValues({ ...values, password: e.target.value })
  }
  const OnSubmit = () => {
    if ((values.usname.length > 0 && values.password.length > 0)
        && (values.usname == "test" && values.password == "123123")) {
      console.log("login");
      setValid(true)


    }

  }
  return (
    <Box>
      <Typography sx={{ textAlign: "center" }}>LOGIN</Typography>

      <Box sx={{ display: "flex", justifyContent: "center" }}>

        {vaild ? <Typography>succesfull login</Typography> : null}
        <Card sx={{ width: 350, height: 400, border: `2px solid gray` }}>
          <TextField
            label="user name"
            sx={{ mt: 10, ml: 5 }}
            value={values.usname}
            onChange={userName}
          />

          <TextField
            label="password"
            type="password"
            sx={{ mt: 2, ml: 5 }}
            value={values.password}
            onChange={passwordhandlar}

          />
          <CardActions>
            <Button variant='contained'
              sx={{ mt: 2, ml: 5 }}
              onClick={OnSubmit}
            >
              Submit

            </Button>


          </CardActions>

        </Card>
      </Box>

    </Box>

  )
}

export default Login
