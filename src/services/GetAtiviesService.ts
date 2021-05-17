import { getRepository } from "typeorm"
import { Activy } from "../model/Activy";

interface  UserId {
        id?: string;
}

class GetActiviesService{
    public async execute ({id}:UserId){

        const activeRepository = getRepository(Activy);
        
        const activies = activeRepository.find();

        if (!activies){
            return{
                message: 'activies not found'
            }
        }

    }
}

export {GetActiviesService}