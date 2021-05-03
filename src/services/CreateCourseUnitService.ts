import {getRepository} from 'typeorm';
import {CourseUnit} from '../model/CourseUnit';

interface CourseUnitData {
    name:string;
    description:string;
}

class CreateCourseUnitService {
    public async execute({name,description}:CourseUnitData): Promise<CourseUnit>{
        
        const courseUnitRepository = getRepository(CourseUnit)

        const courseUnit = courseUnitRepository.create({
            name,
            description
        });

        await courseUnitRepository.save(courseUnit);

        return courseUnit;
    }
}

export {CreateCourseUnitService}