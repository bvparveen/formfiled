import { Box, Typography, Card, TextField, CardActions, Button } from '@mui/material'
import React, { useState } from 'react'
import "./App.css"
const App = () => {

  const api = {
    Api_key: "e0b64a860ad838e92f79c05f4cc081fa",
    BaseUrl: "https://api.openweathermap.org/data/2.5/"
  }
  
  const [values, setValues] = useState({ usname: "", password: "" })
  const [vaild, setValid] = useState(false)

  const userName = (e) => { setValues({ ...values, usname: e.target.value }) }
  const OnSubmit = () => {
    if ((values.usname.length > 0 && values.password.length > 0) && (values.usname == "test" && values.password == "123123")) {
      setValid(true)
    }
  }
  return (

    <Box sx={{ display: "flex", justifyContent: "center", mt: 10 }}>
      <Card sx={{ width: 250, height: 350, border: `2px solid gray` }} className='app'>
        <TextField
          fullWidth
          label="user name"
          sx={{ mt: 0, }}
          value={values.usname}
          onChange={userName}
        />
        <CardActions>
          <Button variant='contained' color="warning"
            sx={{ mt: 2, ml: 5 }}
            onClick={OnSubmit}
          >
            Submit
          </Button>
        </CardActions>
      </Card>
    </Box>


  )
}

export default App