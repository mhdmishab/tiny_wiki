import express from 'express';
import morgan from 'morgan';
import route from './routes/wikiRoute.js';
import adminRoute from './routes/adminRoute.js';

const app=express();
app.use(morgan(':method :url :status :res[content-length] - :response-time ms'));
app.use(express.json());
const port=3001;

app.use('/test',(req,res)=>{
    res.send("ok")
});
app.use('/api',route);
app.use('/api/admin',adminRoute);

app.listen(port,()=>{
    console.log(`app is lisenting on ${port}`)
})