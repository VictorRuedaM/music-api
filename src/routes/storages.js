const {Router} = require('express');
const {getFiles, getFile, createFile, updateFile, deleteFile} = require('../controller/storages');
const uploadMiddleware = require('../utils/handleStorage');
const {validateGetFileById} = require('../validators/storage.validator');
const router = Router();

/**
 * Get list of files
 */
router.get('/', getFiles);
/**
 * Get file details
 */
router.get('/:id',validateGetFileById, getFile);
/**
 * Create file in DB
 */
router.post('/', uploadMiddleware.single('myfile'), createFile);
/**
 * Update file in DB
 */
router.put('/:id',validateGetFileById, uploadMiddleware.single('myfile'), updateFile);
/**
 * Logical deletion of file in DB
 */
router.delete('/:id',validateGetFileById, deleteFile);






module.exports = router;