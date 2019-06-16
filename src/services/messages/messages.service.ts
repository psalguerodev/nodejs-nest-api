import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, DeleteResult } from 'typeorm';
import { Message } from '../../messages/entities/message.entity';
import { CreateMessageDto } from '../../messages/dto/create-message-dto';

@Injectable()
export class MessagesService {

  constructor(
    @InjectRepository(Message)
    private readonly messageRepository: Repository<Message>) {}

  async findAll(): Promise<Message[]> {
    return await this.messageRepository.find();
  }

  async findOne(id: number): Promise<Message> {
    return await this.messageRepository.findOne(id);
  }

  async createOne(messageBody: CreateMessageDto): Promise<Message> {
    const newMessage = new Message();
    newMessage.message = messageBody.message;
    newMessage.nickname = messageBody.nickname;

    return await this.messageRepository.save(newMessage);
  }

  async updateOne(messageId: number, messageBody: CreateMessageDto): Promise<Message> {
    const messageFound = await this.messageRepository.findOne(messageId);
    messageFound.message = messageBody.message;
    messageFound.nickname = messageBody.nickname;

    return this.messageRepository.save(messageFound);
  }

  async deleteOne(messageId: number): Promise<DeleteResult> {
    return await this.messageRepository.delete({ id: messageId });
  }
}
