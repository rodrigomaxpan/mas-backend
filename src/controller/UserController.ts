import {Request,Response} from 'express'
import {CreateUserService} from '../services/CreateUserService';


class UserController {
    async create(request:Request, response:Response){
        
        const userData = request.body

        const createUser = new CreateUserService();

        const user = await createUser.execute(userData);

        return response.json(user);
    }

    async show(request:Request, response:Response){
        const {name,email} = request.query
        let message = 'Query params not sent';
        
        if(name && email) {
            message = `You sent the query params: ${name} and ${email}`
        }

        return response.json({message})
    }

    async index(request:Request, response:Response){
        const {id} = request.params
        const message = `You sent the url params: ${id}`

        return response.json({message})
    }

    async testHeader(request:Request, response:Response){
        const headers = request.headers
        
        return response.json({
            message:'Test Header HTTP',
            headers
        })
    }
}

export {UserController}