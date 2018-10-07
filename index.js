const express = require('express'),
    helmet = require('helmet'),
    path = require('path'),
    compression = require('compression'),
    app = express(),
    http = require('http'),
    server = http.createServer(app);

app.use(helmet());
app.use(compression());

app.use('/build', express.static(path.join(__dirname, 'build')));
app.use('/', (req, res, next) => {
    res.sendFile('index.html', {root: __dirname})
});

server.listen(3000, function () {
    console.log(`Тестовое приложение запущено http://localhost:3000`);
});