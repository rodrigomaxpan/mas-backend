import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateCourseUnits1619727160340 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name:"course_units",
                columns:[
                    {
                        name:"id",
                        type:"varchar",
                        isPrimary: true,
                    },
                    {
                        name:"name",
                        type:"varchar",
                    },
                    {
                        name:"description",
                        type:"varchar",
                    },
                    {
                        name:"created_at",
                        type:"timestamp",
                        default:"now()",
                    }
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("course_units")
    }

}
