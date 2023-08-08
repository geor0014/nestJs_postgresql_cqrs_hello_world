import {
  Body,
  Controller,
  Get,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { CommandBus, QueryBus } from '@nestjs/cqrs';
import { GetPersonsQuery } from './queries/implementation/get-persons.query/get-persons.query';
import { CreatePersonCommand } from './commands/implementation/create-person.command/create-person.command';

@Controller('person')
export class PersonController {
  constructor(private qeuryBus: QueryBus, private commandBus: CommandBus) {}

  @Get()
  async getAll() {
    return await this.qeuryBus.execute(new GetPersonsQuery());
  }

  @Post()
  @UsePipes(
    new ValidationPipe({
      transform: true,
    }),
  )
  async create(@Body() payload: CreatePersonCommand) {
    return await this.commandBus.execute(payload);
  }
}
