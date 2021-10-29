import { Router } from 'express';
import { baseURL } from '../config/index';
import uploadMiddleware from '../controllers/uploads';


const router = Router();

/**
 * @DESC Route pour télécharger 1 fichiers
 * @END-PT 'api/images/single-upload'
 * @Access Public
 * @TYPE POST
 */
router.post('/single-upload', uploadMiddleware.single('file'), async (req, res) => {
    let imagePath = req.file.path.replace("public", baseURL);
    imagePath = imagePath.split('src')[1].substring(1, imagePath.length);
    return res.json({
        imagePath
    });
});

/**
 * @DESC Route pour télécharger plusieurs fichiers
 * @END-PT 'api/images/multi-upload'
 * @Access Public
 * @TYPE POST
 */
router.post('/multi-upload', uploadMiddleware.array('files'), async (req, res) => {
    let { files } = req;
    let resp = [];
    _.forEach(files, (file) => {
        let imagePath = file.path.replace("public", baseURL);
        imagePath = imagePath.split('src')[1].substring(1, imagePath.length);
        resp.push(imagePath);
    });
    return res.json(resp);
});


export default router;