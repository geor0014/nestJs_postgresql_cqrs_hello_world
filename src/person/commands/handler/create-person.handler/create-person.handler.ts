import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { CreatePersonCommand } from '../../implementation/create-person.command/create-person.command';
import { InjectRepository } from '@nestjs/typeorm';
import { Person } from 'src/entities/person/person';
import { Repository } from 'typeorm';

@CommandHandler(CreatePersonCommand)
export class CreatePersonHandler
  implements ICommandHandler<CreatePersonCommand>
{
  constructor(
    @InjectRepository(Person) private personRepo: Repository<Person>,
  ) {}

  async execute(command: CreatePersonCommand): Promise<any> {
    const person = new Person();
    person.name = command.name;
    person.age = command.age;
    await this.personRepo.insert(person);
  }
}
