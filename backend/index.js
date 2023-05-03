const express = require("express");
const cors = require("cors");
const axios = require('axios');
const app = express();
app.use(express.json());
app.use(cors({ origin: true }));

app.post("/authenticate", async (req, res) => {
  const { username } = req.body;

  try{
    const r = await  axios.put(
        "https://api.chatengine.io/users/",
        {username : username , secret : username, first_name:username},
        {headers: { "private-key": "9b892782-b08b-4b39-a809-b4d141495ed5 "}} );
  
    return res.status(r.status).json(r.data);                     
  } catch (e) {
    console.log(e)
    return res.status(e.response.status).json(e.response.data) 
  }
});

app.listen(3001);