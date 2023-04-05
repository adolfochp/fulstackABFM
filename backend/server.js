import  express  from 'express'
import dotenv from 'dotenv'
import { connectDB } from './config/db.js'
const app= express()

dotenv.config()

app.get("/hello", (req, res)=>{
    res.send("hola mundo")
})
 const PORT = process.env.PORT
 const MONGO_URI = process.env.MONGO_URI
/*app.listen(() =>{
    connectDB(MONGO_URI)
    console.log("MONGOBD CONNECTD")
    console.log( `server running  http://localhost:${PORT}` );
})*/
const start = async () => {
    try { 
       await connectDB(MONGO_URI)
       console.log("MONGOBD CONNECTD")
       app.listen(PORT,() =>{
       console.log(`server running  http://localhost:${PORT}` );         
    })
 }catch (error) {
      console.log(error);       
    }
}
start ()


