const {Router} = require('express');
const {getFiles, getFile, createFile, updateFile, deleteFile} = require('../controller/storages');
const uploadMiddleware = require('../utils/handleStorage');
const router = Router();


router.get('/', getFiles);

router.post('/', uploadMiddleware.single('myfile'), createFile);






module.exports = router;