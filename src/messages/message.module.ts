import { Module } from '@nestjs/common';
import { MessagesController } from './messages.controller';
import { MessagesService } from './services/messages/messages.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Message } from './entities/message.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.DATABASE_HOST || '127.0.0.1',
      port: 3306,
      username: 'root',
      password: 'softpatrick123',
      database: 'sendmeapp_db',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
    }),
    TypeOrmModule.forFeature([Message]),
  ],
  controllers: [MessagesController],
  providers: [MessagesService],
})
export class MessageModule {

}
