import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {

  getNameByParam(name: string): string {
    return `Hola ${name.toUpperCase()}`;
  }
  getHello(): string {
    return 'Hello Ingeniero Patrick Salguero2!';
  }
}
