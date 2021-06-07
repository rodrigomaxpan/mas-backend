import {Router, Request, Response, response} from 'express';
import {UserController} from './controller/UserController';
import { ActivyController } from './controller/ActivyController';
import {CourseUnitController} from './controller/CourseUnitController';
import { AuthController } from './controller/AuthController';
import authenticated from './middlewares/authenticated';

interface UserRequest {
    name:string;
    email:string;
    password:string;
}

const userController = new UserController();
const activyController = new ActivyController()
const courseUnitController = new CourseUnitController()
const authController = new AuthController()


const routes = Router();

routes.post('/user', userController.create);
routes.get('/user', authenticated, userController.show);

routes.post('/auth',  authController.create);

routes.post('/activy', authenticated, activyController.create);
routes.get('/activy', authenticated, activyController.show);

routes.post('/courseunit', authenticated, courseUnitController.create);
routes.get('/courseunit', authenticated, courseUnitController.show);

export default routes;