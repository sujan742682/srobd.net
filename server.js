import 'express-async-errors';
import * as dotenv from 'dotenv';
dotenv.config();
import express from 'express'
import morgan from 'morgan'
//Routers
import userRoleRouter from './routes/AdminRoutes.js'
import scanRouter from './routes/scanRoutes.js'
import userRouter from './routes/UserRoutes.js'
import puppeteerRouter from './routes/PuppeteerRouter.js'
import mongoose from 'mongoose';
import cookieParser from 'cookie-parser';
import cloudinary from 'cloudinary'
import errorHandlerMiddleware from './middleware/errorHandlerMiddleware.js';
import injunctionRoute from './routes/injunctionRoute.js';
import { loginProtectionMiddleware } from './middleware/loginProtectMiddleware.js';
import statsRouter from './routes/StatsRouter.js'
const app=express()
if(process.env.NODE_ENV==='development'){
    app.use(morgan('dev'))
}
//Cloudnary config
cloudinary.config({ 
    cloud_name: process.env.CLOUDNAME, 
    api_key: process.env.CLOUDAPIKEY, 
    api_secret: process.env.CLOUDAPISECRET // Click 'View API Keys' above to copy your API secret
});
//public folder
import {dirname} from 'path'
import {fileURLToPath} from 'url'
import path from 'path'
const __dirname=dirname(fileURLToPath(import.meta.url))
app.use(express.static(path.resolve(__dirname,'./public')))


app.use(cookieParser())
app.use(express.json())


app.use('/api/scan',loginProtectionMiddleware,scanRouter)
app.use('/api/user',userRouter)
app.use('/api/stats',loginProtectionMiddleware,statsRouter)
app.use('/api/injunctions',loginProtectionMiddleware,injunctionRoute)
app.use('/api/puppeteer',loginProtectionMiddleware,puppeteerRouter)
app.use('/api/admin',loginProtectionMiddleware,userRoleRouter)

// For deployment
app.get('*',(req,res)=>{
    res.sendFile(path.resolve(__dirname,'./public','index.html'));
})

app.use('*', (req, res) => {
    res.status(404).json({ msg: 'not found' });
});
app.use(errorHandlerMiddleware);
const port=process.env.PORT || 5100
try {
    await mongoose.connect(process.env.MONGO_URL)
    app.listen(port,()=>{
        console.log(`Server Running on port ${port}`);
    })
} catch (err) {
    console.log(err);
    process.exit(1)
}

