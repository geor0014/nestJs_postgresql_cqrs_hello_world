import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Person } from './entities/person/person';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5435,
      username: 'postgres', // default
      password: 'postgres', // default
      database: 'testDB', // default
      entities: [Person],
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
