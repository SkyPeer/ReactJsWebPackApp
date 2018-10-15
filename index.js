const express = require('express'),
    helmet = require('helmet'),
    path = require('path'),
    compression = require('compression'),
    app = express(),
    http = require('http'),
    server = http.createServer(app),
    MongoClient = require('mongodb').MongoClient,
    mongoUrl = 'mongodb://localhost:27017',
    dbName = 'tasks';

/*app.get('/test', function (req, res) {
    //console.log(res);
    //console.log('testreq-ok!');
    res.send({hamma: 123});
}); */

app.get('/test', (req, res) => {

    // opens connection to mongodb
    MongoClient.connect(mongoUrl).then(client => {
        let tasksArray = [];
        // creates const for our database
        const db = client.db(dbName);

        // creates const for 'employees' collection in database
        const col = db.collection('tasks');

        // finds ALL employees in 'employees' collection/converts to array
        col.find({}).toArray().then(docs => {

            // logs message upon finding collection
            console.log('found tasks for index');

            //console.log(docs);
            // renders index ejs template and passes employees array as data

            for (let i=0; i<docs.length; i++){
                tasksArray.push(
                    {
                        title: docs[i].title,
                        complete: docs[i].complete
                    }
                )
            }

            res.send(tasksArray);

            // closes connection to mongodb and logs message
            client.close(() => console.log('connection closed'));

            // checks for error in finding 'employees' collection
        }).catch(err => {

            // logs message upon error in finding 'employees' collection
            console.log('error finding employees', err);

        });

        // checks for error in connecting to mongodb
    }).catch(err => {

        // logs message upon error connecting to mongodb
        console.log('error connecting to mongodb', err);

    });

});

app.use(helmet());
app.use(compression());

app.use('/build', express.static(path.join(__dirname, 'build')));
app.use('/', (req, res, next) => {
   // console.log('send default')
    res.sendFile('index.html', {root: __dirname})
});

server.listen(3000, function () {
    console.log(`Тестовое приложение запущено http://localhost:3000`);
});
