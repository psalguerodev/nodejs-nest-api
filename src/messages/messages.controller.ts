import { Controller, Post, Body, Get, Put, Delete, Param, Res, HttpStatus } from '@nestjs/common';
import { CreateMessageDto } from './dto/create-message-dto';
import { MessagesService } from '../services/messages/messages.service';
import { Response } from 'express';

@Controller('messages')
export class MessagesController {

  constructor(private readonly messageService: MessagesService) {}

  @Post()
  create(@Body() createMessageDto: CreateMessageDto, @Res() response: Response) {
    this.messageService.createOne(createMessageDto).then(message => {
      response.status(HttpStatus.CREATED).json(message);
    })
    .catch(error => response.status(HttpStatus.INTERNAL_SERVER_ERROR)
      .json({message: `Error ${error}`}));
  }

  @Get()
  findAll(@Res() response: Response) {
     this.messageService.findAll().then(messages => {
       response.status(HttpStatus.OK).json(messages);
     })
     .catch(error => {
       response.status(HttpStatus.INTERNAL_SERVER_ERROR).json({message: `Error ${error}`});
     })
  }

  @Get(':id')
  findById(@Param() params, @Res() response: Response) {
    this.messageService.findOne(params.id).then(message => {
      response.status(HttpStatus.OK).json(message);
    })
    .catch(error => response.status(HttpStatus.INTERNAL_SERVER_ERROR)
      .json({message: `Error ${error}`}));
  }

  @Put(':id')
  update(@Param() params, @Body() createMessageDto: CreateMessageDto, , @Res() response: Response) {
    this.messageService.updateOne(params.id, createMessageDto).then(message => {
      response.status(HttpStatus.CREATED).json(message);
    })
    .catch(error => response.status(HttpStatus.INTERNAL_SERVER_ERROR)
      .json({message: `Error ${error}`}));
  }

  @Delete(':id')
  delete(@Param() params, @Res() response: Response) {
    this.messageService.deleteOne(params.id).then(message => {
      response.status(HttpStatus.OK).json(message);
    })
    .catch(error => response.status(HttpStatus.INTERNAL_SERVER_ERROR)
      .json({message: `Error ${error}`}));
  }

}
