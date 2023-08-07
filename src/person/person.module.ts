import { Module } from '@nestjs/common';
import { PersonController } from './person.controller';
import { CqrsModule } from '@nestjs/cqrs';

@Module({
  imports: [CqrsModule],
  controllers: [PersonController],
})
export class PersonModule {}
