const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;
const userRoute = require('./Routes/v1/user.routes.js');

//middle ware
app.use(cors());
app.use(express.json());


app.use("/", userRoute);


app.all('*', (req, res)=>{
    res.send('Route not found');
})

app.listen(port, () => {
    console.log(`app listening on port ${port}`)
  })