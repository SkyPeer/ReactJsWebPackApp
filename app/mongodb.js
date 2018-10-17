const mongoose = require('mongoose');
let Schema = mongoose.Schema;
mongoose.Promise = global.Promise;

let userScheme = new Schema({
    name: String,
    age: Number
});

mongoose.connect('mongodb://localhost:27017/youtube-video', {
    useNewUrlParser: true,
})
        .then(() => {console.log('mongodb has started')})
        .catch(err => {console.log(err)});

let User = mongoose.model("User", userScheme);

/*
let user = new User({
    name: "Jack",
    age: 30
}); */
/*
user.save(function(err){
    mongoose.disconnect();  // отключение от базы данных

    if(err) return console.log(err);
  //  console.log("Сохранен объект", user);
}); */

let tempArray = '';

User.find({}, function(err, docs){
    mongoose.disconnect();

    if(err) return console.log(err);

    //console.log(docs);
    tempArray = docs;
}).then(()=> {docsToArray(tempArray)});


function docsToArray(namesArray) {
    for (var i=0; i<namesArray.length; i++){
        console.log(namesArray[i].name)
    }
}
