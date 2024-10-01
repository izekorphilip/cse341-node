const express = require('express');
const mongodb = require('./data/database');
const app = express();

const port = process.env.Port || 833

app.use('/', require('./routes'));

mongodb.initDb((err) => {
  if(err){
    console.log(err);
  }
  else{
    app.listen(port, () => {console.log(`Database is listening and node Running on port ${port}`)})
  }
})


/*
app.get('/', (req, res) => {
  res.send("Hello Philip, how are you doing today? I'm fine thank you");
});
 
app.get('/p', (req, res) => {
    res.send("Full name: Philip Izekor");
  });
 
app.listen(process.env.PORT || 3000, () => {
  console.log('Web Server is listening at port ' + (process.env.PORT || 3000));
});

let name = 'Philip';
console.log(name);
 function e(){
    let h
    b = 2+2;
    return h;
 }
 console.log(e());
 */