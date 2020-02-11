const express = require("express");
const app = express();
const port = 3000;

app.get("/", (request, response) => response.send("Bonjour"));

app.listen(port, () =>
  console.log(`TicketDiary app listening on port ${port}!`)
);
