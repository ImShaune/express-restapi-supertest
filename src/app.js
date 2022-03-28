const express = require('express');
const app = express();

app.use(express.json());

app.use("/users", requiere("./routes/users"));

app.listen(3000);
console.log("Hello There!");


module.exports = app;