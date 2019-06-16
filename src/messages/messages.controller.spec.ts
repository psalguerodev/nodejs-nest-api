import { Test, TestingModule } from '@nestjs/testing';
import { MessagesController } from './messages.controller';

describe('Messages Controller', () => {
  let controller: MessagesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MessagesController],
    }).compile();

    controller = module.get<MessagesController>(MessagesController);
  });

  it('test1', () => {
    expect('PATRICK').toBe('PATRICK');
  });

});
