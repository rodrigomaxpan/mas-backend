import { Request, Response } from "express";
import {CreateActivyService} from '../services/CreateActivyService'

class ActivyController {
    async create(request: Request, response:Response){
        const activyData = request.body

        const createActivy = new CreateActivyService()

        const activy = createActivy.execute(activyData)

        return response.json(activy);
    }
}

export {ActivyController}