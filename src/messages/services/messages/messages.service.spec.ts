import { Test, TestingModule } from '@nestjs/testing';
import { MessagesService } from './messages.service';

describe('MessagesService', () => {
  let service: MessagesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MessagesService]
    }).compile();

    service = module.get<MessagesService>(MessagesService);
  });

  it('test1', () => {
    expect('PATRICK').toBe('PATRICK');
  });

});
