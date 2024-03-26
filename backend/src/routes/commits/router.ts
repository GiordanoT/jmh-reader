import {Router} from 'express';
import {CommitsController} from './controller';

const router = Router();

router
    .route('/')
    .get(CommitsController.get)
    .post(CommitsController.create)

router
    .route('/:id')
    .delete(CommitsController.delete)

export {router as CommitsRouter};

