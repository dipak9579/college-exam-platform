import app from "./app.js";

const PORT=process.env.PORT || 5000;

app.get('/',(req,res)=>res.send('exam portal running...'));

app.listen(PORT,()=>{
    console.log(`Port is running on ${PORT}`);
    
})