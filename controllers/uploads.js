import multer from 'multer';

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, `${__dirname}/../public/uploads`);
    },
    filename: (req, file, cb) => {
        let lastIndex = file.originalname.lastIndexOf(".");
        // original extension 
        let extension = file.originalname.substring(lastIndex);
        // Crée l'image dans le server
        cb(null, `img-${Date.now()}${extension}`);
    }
});

const upload = multer({ storage });

export default upload;