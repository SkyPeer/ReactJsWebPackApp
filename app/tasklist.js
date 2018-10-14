import renderList from './renderlist';

/*const mongoose = require('mongoose');
let Schema = mongoose.Schema;
mongoose.Promise = global.Promise;

let taskSchema = new Schema({
    title: String,
    complete: Boolean
});

mongoose.connect('mongodb://localhost:27017/tasks', {
    useNewUrlParser: true,
})
    .then(() => {console.log('mongodb has started')})
    .catch(e => {console.log(e)});


let Task = mongoose.model("Task", taskSchema);

/*
 let task = new Task({
 title: "НЕ Выучить Ангуляр",
 complete: false
 });

 task.save(function(err){
 mongoose.disconnect();  // отключение от базы данных

 if(err) return console.log(err);
 console.log("Сохранен объект", task);
 });
*/
/*
let tasksArray = [];

Task.find({}, function(err, docs){
    mongoose.disconnect();

    if(err) return console.log(err);

    //console.log(docs);
    for (var i=0; i<docs.length; i++){
        tasksArray.push(
            {
                title: docs[i].title,
                complete: docs[i].complete
            }
        )
    }


}).then(()=> {
    /*docsToArray(tasksArray)*/
  //  console.log(tasksArray)
/*    let readyRenderList = renderList(tasksArray);
    export default readyRenderList*/
//});

/*
function docsToArray(titlesArray) {
    for (var i=0; i<titlesArray.length; i++){
        console.log(titlesArray[i].title)
    }
}
*/

let readyRenderList = renderList([
    {
        title: 'Выучить Реакт',
        complete: false
    },
    {
        title: 'НЕ Выучить Реакт',
        complete: false
    },
    {
        title: 'Выучить Ангуляр',
        complete: false
    },
    {
        title: 'НЕ Выучить Ангуляр',
        complete: false
    }
    ]);

export default readyRenderList