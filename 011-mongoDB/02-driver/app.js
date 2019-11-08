const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb://127.0.0.1.27017";
const client = new MongoClient(uri, { useNewUrlParser: true });
//链接数据库
client.connect(err => {
  if(err){
  	throw err
  }
  // perform actions on the collection object
  client.close();
});