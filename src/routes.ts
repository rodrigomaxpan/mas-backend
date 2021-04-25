import {Router, Request, Response, response} from 'express';
import {UserController} from './controller/UserController';

interface UserRequest {
    name:string;
    email:string;
    password:string;
}

const routes = Router();

const userController = new UserController();

routes.get('/user/test', userController.testHeader);
routes.get('/user/:id', userController.index);
routes.get('/user/', userController.show);
routes.post('/user', userController.create);

export default routes;