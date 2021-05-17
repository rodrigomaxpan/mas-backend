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


routes.post('/auth',  authController.create);

routes.get('/user', authenticated, userController.show);
routes.get('/activy', authenticated, activyController.show);
routes.get('/courseunit', authenticated, courseUnitController.show);


routes.post('/user', userController.create);
routes.post('/activy', authenticated, userController.create);
routes.post('/courseunit', authenticated, userController.create);

export default routes;