import { Test, TestingModule } from '@nestjs/testing';
import { NestLibService } from './nest-lib.service';
import { NestLib2Module } from '@all-libs/nest-lib2';

describe('NestLibService', () => {
  let service: NestLibService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [NestLibService],
      imports: [NestLib2Module],
    }).compile();

    service = module.get<NestLibService>(NestLibService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
