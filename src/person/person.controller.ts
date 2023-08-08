import { Controller, Get } from '@nestjs/common';
import { QueryBus } from '@nestjs/cqrs';
import { GetPersonsQuery } from './queries/implementation/get-persons.query/get-persons.query';

@Controller('person')
export class PersonController {
  constructor(private qeuryBus: QueryBus) {}

  @Get()
  async getAll() {
    return await this.qeuryBus.execute(new GetPersonsQuery());
  }
}
