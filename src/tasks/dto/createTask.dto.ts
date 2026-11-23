import { IsNotEmpty, IsString } from 'class-validator';

export class CreateTaskDTO {
  @IsString()
    @IsNotEmpty()
    title!: string;

  @IsString()
    @IsNotEmpty()
    description!: string;

  @IsNotEmpty()
    completed: boolean = false;

  @IsString()
    @IsNotEmpty()
    userId!: string;

}
