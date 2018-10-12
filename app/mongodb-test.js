const mongoClient = require("mongodb").MongoClient;
const url = "mongodb://localhost:27017/";

let data = '';

    mongoClient.connect(url, function (err, client) {

        const db = client.db("usersdb");
        const collection = db.collection("users");

        if (err) return console.log(err);


        collection.find().toArray(function (err, results) {
            client.close();
            //  console.log('results', results);
            data = results;
            return results;
        });

    });



function func() {
    console.log('------------- data: ',data);
}
setTimeout(func, 1500);


/*function func() {
    console.log( 'SetTimeOut Worked' );
}
setTimeout(func, 100);*/