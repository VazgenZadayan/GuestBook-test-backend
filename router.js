import { Router } from 'express';

import CommentController from './controllers/CommentController.js';
import { commentValidationMiddleware } from './middlewares/commentValidationMiddleware.js';

const router = new Router();

router.post('/comments', commentValidationMiddleware, CommentController.create);
router.get('/comments', CommentController.getAll);

export default router;
