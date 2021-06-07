import {getRepository} from 'typeorm';
import {Activy} from '../models/Activy';

interface ActivyData {
    name: string;
    activy_date: string;
    grade: number;
    courseUnitId: string;
}

class CreateActivyService {

    async execute({name,activy_date,grade, courseUnitId}:ActivyData) {

        const activyRepository = getRepository(Activy);

        const activy = activyRepository.create({
            name,
            activy_date,
            grade,
            courseUnitId
        });

        await activyRepository.save(activy);

        return activy;

    }
}

export {CreateActivyService};