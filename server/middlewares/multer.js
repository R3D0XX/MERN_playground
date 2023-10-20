import multer from "multer"
import path from "path"

const storage = multer.diskStorage({});

const fileFilter = (req, file, cb) => {
    // console.log('file', file);

    const extension = path.extname(file.originalname);
    // console.log('extension', extension);
    if (extension !== ".png" && extension !== ".jpg" && extension !== ".jpeg") {
        return cb(new Error("Only image files are allowed"), false);
    } else {
        cb(null, true);
    }
}

const multerUpload = multer({ storage, fileFilter });

export default multerUpload;