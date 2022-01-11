import { Module } from '@nestjs/common';
import { NestLib2Service } from './nest-lib2/nest-lib2.service';

@Module({
  controllers: [],
  providers: [NestLib2Service],
  exports: [NestLib2Service],
})
export class NestLib2Module {}
