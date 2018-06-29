import express from 'express';
import renderer from './helpers/index';

const app = express();

app.use( express.static('public') );

app.get("/", (req, res) => {
  res.send( renderer() );
})


app.listen(5001, () => {
  console.log("Started at 5001");
})