import { Controller, Get } from '@nestjs/common';

@Controller('tags')
export class TagController {
  @Get()
  findAll(): Array<string> {
    return ['dragons', 'coffee'];
  }
}
