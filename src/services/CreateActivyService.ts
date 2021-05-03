import {getRepository} from 'typeorm';
import {Activy} from '../model/Activy';

interface ActivyData {
    name: string;
    activy_date: string;
    course_unit_id: string;
}

class CreateActivyService {
    public async execute({name,activy_date,course_unit_id}:ActivyData): Promise<Activy>{
        
        const activyRepository = getRepository(Activy);

        const activy = activyRepository.create({
            name,
            activy_date,
            course_unit_id
        });

        await activyRepository.save(activy)

        return activy;
    }
}

export {CreateActivyService}