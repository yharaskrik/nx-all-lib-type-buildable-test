import { Injectable } from '@nestjs/common';
import { nodeLib } from '@all-libs/node-lib';
import { NestLib2Service } from '@all-libs/nest-lib2';

@Injectable()
export class NestLibService {
  constructor(private nestLib2Service: NestLib2Service) {
    nodeLib();
  }
}
