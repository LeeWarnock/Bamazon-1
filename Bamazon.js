var mysql = require("mysql");

var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'Bamazon'
});


connection.connect(function(err) {

  if (err) {
    console.error('error connecting: ' + err);
    return;
  }

  connection.query("SELECT * FROM Bamazon_table", function(err, res) {
    if (err) throw err;
//    console.log(res);
    var Product_Name="CornPops";
    var Department_Name = "Cereal";
    var Price = "399";
    var Stock_Quantiy="100",

    var insertInto = {Product_Name: '', Department_Name: '', Price: '', Stock_Quantiy:''};
//    console.log(stuffToInsert);
