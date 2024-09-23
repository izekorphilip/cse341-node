const express = require('express');
const app = express();
 
app.get('/', (req, res) => {
  res.send("Hello Philip, how are you doing today? I'm fine thank you");
});
 
app.listen(process.env.PORT || 3000, () => {
  console.log('Web Server is listening at port ' + (process.env.PORT || 3000));
});