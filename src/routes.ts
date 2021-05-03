import {Router, Request, Response, response} from 'express';
import {UserController} from './controller/UserController';
import { ActivyController } from './controller/ActivyController';
import {CourseUnitController} from './controller/CourseUnitController';

interface UserRequest {
    name:string;
    email:string;
    password:string;
}

const routes = Router();

const userController = new UserController();
const activyController = new ActivyController()
const courseUnitController = new CourseUnitController()

routes.get('/user/test', userController.testHeader);
routes.get('/user/:id', userController.index);
routes.get('/user/', userController.show);
routes.post('/user', userController.create);

export default routes;