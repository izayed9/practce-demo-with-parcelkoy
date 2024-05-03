import express from 'express';
import models from "./models/index.js";
// import  models  from 'models/index.js';
import mongoose, { Model } from 'mongoose';

const app = express()

const port = 3000
app.use(express.json())

function log(msg){
   console.log(msg)
}


mongoose.connect('mongodb://127.0.0.1:27017/siginup')
  .then(() => console.log('Connected!'));

app.get('/', (req, res) => {
    console.log('Its a root router')
  });
app.get('/api', (req, res) => {
    const query = JSON.stringify(req.query.id);
    res.send(`Search Query: ${query}`);
  });
  
  app.post('/api/users', (req, res) => {
    const { name, message } = req.body;
    const user = new models.User({
        username: name,
        message: message,
    });
    user.save()
        .then((result) => {
            console.log(result);
            res.send(result); // Sending the saved user as response
        })
        .catch((err) => {
            console.log(err);
            res.status(500).send('Error saving user');
        });
});


app.listen(port, ()=>{
    console.log(`app listining port on ${port}`)
})

log(models)

