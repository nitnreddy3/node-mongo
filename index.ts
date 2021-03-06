// const {MongoClient} = require('mongodb');

// async function listDatabases(client){
//    let databasesList = await client.db().admin().listDatabases();
 
//     console.log("Databases:");
//     databasesList.databases.forEach(db => console.log(` - ${db.name}`));
// };

// async function main(){
//     /**
//      * Connection URI. Update <username>, <password>, and <your-cluster-url> to reflect your cluster.
//      * See https://docs.mongodb.com/ecosystem/drivers/node/ for more details
//      */
//     const uri = "mongodb://localhost:37017/?readPreference=primaryPreferred&appname=MongoDB%20Compass&directConnection=true&ssl=false";
 

//     const client = new MongoClient(uri);
 
//     try {
//         // Connect to the MongoDB cluster
//         await client.connect();
 
//         // Make the appropriate DB calls
//         await  listDatabases(client);
 
//     } catch (e) {
//         console.error(e);
//     } finally {
//         await client.close();
//     }
// }

// main().catch(console.error);

var {MongoClient} = require('mongodb');
var url = "mongodb://localhost:37017/?readPreference=primaryPreferred&appname=MongoDB%20Compass&directConnection=true&ssl=false";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  console.log("Database created!");
  db.close();
});
