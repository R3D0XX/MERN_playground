import multer from "multer"
import path from "path"

const storage = multer.diskStorage({});

const fileFilter = (req, res, cb) => {
    cb(null, false);

    cb(null, true);

    cb(new Error("I have no clue"));
}

const multerUpload = multer({ storage, fileFilter });

export default multerUpload;