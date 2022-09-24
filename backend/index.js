/** @format */

const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
require("dotenv").config();
const app = express();

app.use(cors());
app.use(helmet());
app.use(express.json());
app.use(express.static(`${__dirname}/public`));

app.use("/northino", require("./routes/subscribe"));
app.use("/northino", require("./routes/contact"));
app.use("/northino/admin", require("./routes/northinoTV"));
app.use("/northino/services", require("./routes/ServiceRequest"));
app.use("/northino/admin", require("./routes/admin"));
app.use("/northino/user", require("./routes/user"));

app.listen(process.env.PORT || 4000);
