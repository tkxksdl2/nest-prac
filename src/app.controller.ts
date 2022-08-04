import { Controller } from '@nestjs/common';
import { Get } from '@nestjs/common';

@Controller('app')
export class AppController {
  @Get()
  home() {
    return 'welcome to my Movie';
  }
}