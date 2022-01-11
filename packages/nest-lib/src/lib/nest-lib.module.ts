import { Module } from '@nestjs/common';
import { nodeLib } from '@all-libs/node-lib';
import { NestLib2Module } from '@all-libs/nest-lib2';

@Module({
  controllers: [],
  providers: [],
  exports: [],
  imports: [NestLib2Module],
})
export class NestLibModule {
  constructor() {}
}
