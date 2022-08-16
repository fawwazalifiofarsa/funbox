require('dotenv').config();
const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());

const adminRouter = require("./routes/admin/admin.router");
const feedbackRouter = require("./routes/feedback/feedback.router");
const lapanganRouter = require("./routes/lapangan/lapangan.router");
const transaksiRouter = require("./routes/transaksi/transaksi.router");
const userRouter = require("./routes/user/user.router");

app.use(cors());
app.use(express.json());
app.use("/admin", adminRouter);
app.use("/feedback", feedbackRouter);
app.use("/lapangan", lapanganRouter);
app.use("/transaksi", transaksiRouter);
app.use("/user", userRouter);

app.listen(process.env.APP_PORT, ()=>{
    console.log("Tersambung di PORT : " + process.env.APP_PORT)
})
