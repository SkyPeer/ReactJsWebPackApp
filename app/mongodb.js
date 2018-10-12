const mongoClient = require("mongodb").MongoClient;
const url = "mongodb://localhost:27017/";



    mongoClient.connect(url, function (err, client) {

        const db = client.db("usersdb");
        const collection = db.collection("users");

        if (err) return console.log(err);


        let getData = collection.find().toArray(function (err, results) {
            client.close();
            console.log('results', results);
            return results;
        });
    });


function func() {
    console.log( 'SetTimeOut Worked' );
}
setTimeout(func, 1000);