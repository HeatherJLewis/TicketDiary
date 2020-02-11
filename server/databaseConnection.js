var mysql = require("mysql");

var con = mysql.createConnection({
  host: "localhost",
  user: "Heather",
  password: "B4ubl3s!"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});
