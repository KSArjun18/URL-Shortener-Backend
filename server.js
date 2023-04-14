const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const cors = require("cors");
// const cookieParser = require("cookie-parser");
const morgan = require("morgan");
const userRouter = require("./routes/user");
const urlShortener = require("./routes/urlShortener")


// assign object to an app
const app = express();

app.use(
  cors({
    origin: "*",
  })
);
  
app.use(express.json());
// app.use(cookieParser());
// app.use(express.urlencoded({ extended: false }));

app.use(morgan("dev"));



mongoose
  .connect(process.env.MONGO_URL,{
    useUnifiedTopology: true,
    useNewUrlParser: true,
})
  .then(() => console.log("Database connected successfully"))
  .catch((err) => {
    console.log(err);
  });


  app.get("/", async function(request,response){
    response.send("Welcomes to URL Shortener App !!!");
});



app.use("/auth",userRouter);
app.use("/api",urlShortener);









const PORT = process.env.PORT || 4000
app.listen(PORT,() => {
  console.log("Connection Success");
});
