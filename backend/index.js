const express = require("express");
const cors = require("cors");
const app = express();
//port
const port = 4000;
app.use(express.json());
app.use(cors());
app.use("/northino", require("./routes/subscribe"));
app.use("/northino", require("./routes/contact"));
app.use("/northino/admin", require("./routes/northinoTV"));
app.use("/northino/services", require("./routes/ServiceRequest"));
app.use("/northino/admin", require("./routes/admin"));
app.listen(port);
//commemt
