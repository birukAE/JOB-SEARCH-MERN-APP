const express=require("express");
const app = express();

const cors= require('cors');
app.use(cors());
app.use(express.json());






const companyregsRoute = require("./routes/companyregs")
app.use('/companyregs',companyregsRoute);

const memberregsRoute = require("./routes/memberregs")
app.use('/memberregs',memberregsRoute);

const uploadRoute = require("./routes/upload")
app.use('/upload',uploadRoute);

const scholarRoute = require("./routes/scholar")
app.use('/scholar',scholarRoute);

const applicationRoute = require("./routes/application")
app.use('/application',applicationRoute);

app.listen(3006,(req,res)=>{
    console.log("the server is running");
}); 