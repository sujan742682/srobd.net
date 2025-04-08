import multer from 'multer'

const storage=multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,'public/uploads')
    },
    filename:(req,file,cb)=>{
        console.log('⛳ FILENAME HIT', file.originalname);
        cb(null,file.originalname)
    },
})
const uploads = multer({ storage });
export default uploads;