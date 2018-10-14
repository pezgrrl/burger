var mysql = require("mysql");

var connection;


if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  connection = mysql.createConnection({
    host: "cig4l2op6r0fxymw.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
    port: 3306,
    user: "rexx9f6j87liiaee",
    password: "	jfccc9sibv5qow53",
    database: "ci9gdlpyg3ld5stu"
  });
};


connection.connect(function (err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});


module.exports = connection;